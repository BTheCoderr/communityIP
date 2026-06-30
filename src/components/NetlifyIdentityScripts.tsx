"use client";

import Script from "next/script";

const IDENTITY_HASH_TOKENS = [
  "invite_token=",
  "recovery_token=",
  "confirmation_token=",
] as const;

const redirectScript = `
(function () {
  var hash = window.location.hash;
  if (!hash) return;
  if (window.location.pathname.indexOf("/admin") === 0) return;
  var shouldRedirect = ${JSON.stringify(IDENTITY_HASH_TOKENS)}.some(function (token) {
    return hash.indexOf(token) !== -1;
  });
  if (shouldRedirect) {
    window.location.replace("/admin/" + hash);
  }
})();
`;

export function NetlifyIdentityScripts() {
  return (
    <>
      <Script id="netlify-identity-token-redirect" strategy="beforeInteractive">
        {redirectScript}
      </Script>
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
