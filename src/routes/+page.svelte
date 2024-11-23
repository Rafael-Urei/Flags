<script lang="ts">
  import Card from '$lib/components/Card/Card.svelte';
  import Input from '$lib/components/Form/Input/Input.svelte';
  import Select from '$lib/components/Form/Select/Select.svelte';
  import type { Country } from '$lib/interfaces.js';

  const { data } = $props();

  let countries: Country[] = data.countries;
</script>

<div class="py-10">
  <Input placeholder="Search for a country" />
  <Select placeholder="Select a filter"></Select>
</div>
<div class="flex flex-col items-center gap-20 sm:grid lg:grid-cols-2 xl:grid-cols-4">
  {#each countries as country}
    <Card {country}></Card>
  {/each}
</div>
