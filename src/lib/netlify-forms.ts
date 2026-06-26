/** Static HTML file where Netlify detects forms at build time. */
const SUBMIT_URL = "/forms.html";

export const NETLIFY_FORM_ERROR =
  "Something went wrong. Please email hello@communityip.org directly.";

function encodeFormData(formData: FormData): string {
  const params = new URLSearchParams();
  for (const [key, value] of formData.entries()) {
    params.append(key, String(value));
  }
  return params.toString();
}

async function postToNetlify(body: string): Promise<boolean> {
  try {
    const response = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    return response.ok;
  } catch {
    return false;
  }
}

/** Submit a rendered form element (contact, volunteer, partner). */
export async function submitNetlifyFormElement(
  form: HTMLFormElement
): Promise<boolean> {
  const formName = form.getAttribute("name");
  if (!formName) return false;

  const formData = new FormData(form);
  formData.set("form-name", formName);

  return postToNetlify(encodeFormData(formData));
}

/** Submit programmatically (e.g. multi-step intake wizard). */
export async function submitNetlifyForm(
  formName: string,
  fields: Record<string, string>
): Promise<boolean> {
  const body = new URLSearchParams({
    "form-name": formName,
    ...fields,
  });

  return postToNetlify(body.toString());
}

/** Serialize intake wizard data for Netlify Forms */
export function serializeIntakeFields(
  data: Record<string, unknown>,
  referenceNumber: string
): Record<string, string> {
  const fields: Record<string, string> = { referenceNumber };

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "boolean") {
      fields[key] = value ? "yes" : "no";
    } else if (Array.isArray(value)) {
      fields[key] = value.join(", ");
    } else if (value != null && value !== "") {
      fields[key] = String(value);
    }
  }

  return fields;
}
