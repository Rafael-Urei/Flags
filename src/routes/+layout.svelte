<script lang="ts">
  import Header from '$lib/components/Header/Header.svelte';
  import '../app.css';
  let { children } = $props();
</script>

<div
  class="font-nunito dark:bg-background-dark bg-background-light flex h-screen max-h-screen flex-col"
>
  <Header></Header>
  <div class="flex flex-1 flex-col overflow-y-auto px-4 sm:px-20">
    {@render children()}
  </div>
</div>
