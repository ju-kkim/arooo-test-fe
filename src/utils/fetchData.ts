export async function fetchData<T>(url: string, options?: RequestInit) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error('NOT OK');
  const data: T = await response.json();

  return data;
}
