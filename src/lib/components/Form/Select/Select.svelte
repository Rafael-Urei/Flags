<script lang="ts">
  import { fly } from 'svelte/transition';
  import { style } from './style';

  let { items, value, ...rest } = $props();

  const { label: labelStyle, select } = style();

  let open = $state(false)
</script>

<label class={labelStyle()}>
  <select {...rest} hidden
  ></select>
  {open}
  <div class={select()}>
    {#if value}
      {@const selected = items.find((item) => item.value === value)}
      {#if selected}
        {selected.name}
      {/if}
    {:else}
      {rest.placeholder}
    {/if}
  </div>
  {#if open}
    <div
      class="absolute bottom-0 h-80 w-full rounded-md bg-white shadow-md"
      transition:fly={{ y: 10 }}
    >
      {#each items as item}
        <div class="hover:bg-element-dark p-4">
          {item.name}
        </div>
      {/each}
    </div>
  {/if}
</label>
