<script lang="ts">
  import { page } from '$app/stores';
  import Badge from '$lib/components/Badge/Badge.svelte';
  import Button from '$lib/components/Form/Button/Button.svelte';
  import type { Country } from '$lib/interfaces.js';
  import { tv } from 'tailwind-variants';

  const { data } = $props();

  let countries: Country[] = $page.data.countries;
  let country: Country = $state(data.country[0]);
  let info = $state(data.info);
  let borders: Country[] = countries.filter(({ cioc }) => country.borders.includes(cioc));

  const style = tv({
    slots: {
      wrapper: 'grid grid-cols-2 gap-10',
      info_wrapper: 'flex flex-col justify-center gap-10',
      list_wrapper: 'flex gap-10',
      list: 'flex flex-col gap-2',
      name: 'text-2xl font-bold',
      list_item: 'text-gray-500',
      list_borders: 'flex gap-2 items-start'
    }
  });

  const { wrapper, info_wrapper, list_wrapper, list, list_item, name, list_borders } = style();
</script>

<div class="py-10">
  <Button on:click={() => history.back()}>Back</Button>
</div>

<div class={wrapper()}>
  <img class="flex-1" src={country.flags.svg} alt={country.name.common} />
  <div class={info_wrapper()}>
    <h1 class={name()}>{country.name.common}</h1>
    <div class={list_wrapper()}>
      <ul class={list()}>
        {#if info}
          {@const labels = ['name', 'population', 'region', 'subRegion', 'capital']}
          {#each Object.entries(info) as [key, value]}
            {#if value.value && labels.includes(key)}
              <li class={list_item()}>
                <span class="font-bold text-gray-900">{value.label}:</span>
                {value.value}
              </li>
            {/if}
          {/each}
        {/if}
      </ul>
      <ul class={list()}>
        {#if info}
          {@const labels = ['tld', 'currencies', 'languages']}
          {#each Object.entries(info) as [key, value]}
            {#if value.value && labels.includes(key)}
              <li class={list_item()}>
                <span class="font-bold text-gray-900">{value.label}:</span>
                {value.value}
              </li>
            {/if}
          {/each}
        {/if}
      </ul>
    </div>

    <ul class={list_borders()}>
      <p class="font-bold">Border Countries:</p>
      <div class="flex flex-wrap items-center gap-2">
        {#each borders as borderCountry}
          <Badge href={`/${borderCountry.name.official}`}>{borderCountry.name.common}</Badge>
        {/each}
      </div>
    </ul>
  </div>
</div>
