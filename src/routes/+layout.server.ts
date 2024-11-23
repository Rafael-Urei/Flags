import { PUBLIC_API_URL } from '$env/static/public';
import type { Country } from '$lib/interfaces';

export async function load({ fetch }) {
  let url = PUBLIC_API_URL;

  const response = await fetch(`${url}/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const data: Country[] = await response.json();
    return {
      countries: data
    };
  }

  return { countries: [] };
}
