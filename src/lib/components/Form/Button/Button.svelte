<script lang="ts">
  import { style } from './style';

  let { children, ...rest } = $props();

  const { button } = style();
</script>

<button class={button()} {...rest} on:click>
  {@render children()}
</button>
