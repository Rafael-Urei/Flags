<script lang="ts">
  import type { Country } from '$lib/interfaces';
  import { style } from './style';

  export let country: Country;

  const { wrapper, info, name } = style();
</script>

<a href="/{country.name.official}" class={wrapper()} data-sveltekit-preload-data="hover">
  <div class="shadow">
    <img
      src={country.flags.png}
      alt="Flag"
      class="h-60 w-full rounded-tl-md rounded-tr-md object-cover object-center"
    />
  </div>
  <div class={info()}>
    <h3 class={name()}>{country.name.common}</h3>
    <span>
      <span class="font-semibold text-text-light">Population:</span>
      {Intl.NumberFormat('pt-BR').format(country.population)}
    </span>
    <span>
      <span class="font-semibold text-text-light">Region:</span>
      {country.region}
    </span>
    <span><span class="font-semibold text-text-light">Capital:</span> {country.capital}</span>
  </div>
</a>
