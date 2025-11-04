// src/lib/asset.ts
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '/');

/** Build a correct URL for files in /public (or pass through full http(s) URLs). */
export function asset(path: string): string {
  const p = String(path);
  if (/^https?:\/\//i.test(p)) return p;        // leave external URLs as-is
  return BASE + p.replace(/^\/+/, '');          // avoid double slashes
}
