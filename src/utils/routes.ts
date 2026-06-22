export function route(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('#') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }

  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // GitHub Pages serves directory indexes only when the URL ends with a slash.
  if (cleanPath !== '/' && !cleanPath.endsWith('/') && !cleanPath.includes('.')) {
    return `${base}${cleanPath}/`;
  }

  return `${base}${cleanPath}`;
}
