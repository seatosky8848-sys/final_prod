export const SITE_URL = "https://ajaylalwani.com";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
