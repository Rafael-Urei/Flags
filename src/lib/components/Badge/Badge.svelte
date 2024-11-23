<script lang="ts">
  import { style } from './style';

  let { href, children } = $props();

  const { base } = style();
</script>

<a {href} class={base()} data-sveltekit-preload-data="hover">
  {@render children()}
</a>
