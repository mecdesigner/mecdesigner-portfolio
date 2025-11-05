// src/lib/asset.ts
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '/');

/** Build a correct URL for files in /public (or pass through full http(s) URLs). */
export function asset(path: string): string {
  const p = String(path);
  if (/^https?:\/\//i.test(path)) return path;        // leave external URLs as-is
  return BASE + path.replace(/^\/+/, '');          // avoid double slashes
}
