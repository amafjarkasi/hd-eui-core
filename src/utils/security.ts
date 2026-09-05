/**
 * Sanitizes a URL to prevent XSS attacks.
 * It strips control characters and blocks dangerous protocols like javascript:, data:, and vbscript:.
 */
export const sanitizeUrl = (url: string | undefined): string => {
  if (!url) return "";

  // Remove control characters and trim
  const sanitizedUrl = url.replace(/[\x00-\x1F\x7F]/g, "").trim();

  if (!sanitizedUrl) return "about:blank";

  // Check for dangerous protocols
  // We use a regex that looks for the protocol at the start of the string
  const isDangerousProtocol = /^(javascript|data|vbscript):/i.test(sanitizedUrl);

  if (isDangerousProtocol) {
    return "about:blank";
  }

  return sanitizedUrl;
};
