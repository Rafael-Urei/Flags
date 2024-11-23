import { PUBLIC_API_URL } from '$env/static/public';
import type { Country } from '$lib/interfaces.js';

export async function load({ params, fetch }) {
  let url = PUBLIC_API_URL;

  const response = await fetch(`${url}/name/${params.flag_id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const data: Country[] = await response.json();
    return {
      country: data,
      info: {
        name: {
          label: 'Native name',
          value: Object.values(data[0].name.nativeName)
            .map((value) => value.official)
            .join(', ')
        },
        population: {
          label: 'Population',
          value: Intl.NumberFormat('pt-BR').format(data[0].population)
        },
        region: {
          label: 'Region',
          value: data[0].region
        },
        subRegion: {
          label: 'Sub Region',
          value: data[0].subregion
        },
        capital: {
          label: 'Capital',
          value: Object.values(data[0].capital)
            .map((value) => value)
            .join(', ')
        },
        tld: {
          label: 'Top Level Domain',
          value: data[0].tld
        },
        currencies: {
          label: 'Currencies',
          value: Object.values(data[0].currencies)
            .map((value) => value.name)
            .join(', ')
        },
        languages: {
          label: 'Languages',
          value: Object.values(data[0].languages)
            .map((value) => value)
            .join(', ')
        }
      }
    };
  }

  return { country: [], info: {} };
}
