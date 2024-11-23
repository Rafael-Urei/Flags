<script lang="ts">
  import { style } from './style';

  const { wrapper, title } = style();
</script>

<header class={wrapper()}>
  <div class="flex items-center">
    <a href="/" class={title()}>Where in the world?</a>
  </div>
  <div class="flex items-center">
    <button>Dark mode</button>
  </div>
</header>
