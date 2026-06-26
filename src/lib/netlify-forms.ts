const SUBMIT_URL = "/";

export async function submitNetlifyForm(
  formName: string,
  fields: Record<string, string>
): Promise<boolean> {
  const body = new URLSearchParams({
    "form-name": formName,
    ...fields,
  });

  try {
    const response = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    return response.ok;
  } catch {
    return false;
  }
}

export const NETLIFY_FORM_ERROR =
  "Something went wrong. Please email hello@communityip.org directly.";

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
