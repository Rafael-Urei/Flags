<script lang="ts">
  import { style } from './style';

  export let label: string = '';

  const { label: labelStyle, input } = style();
</script>

<label class={labelStyle()}>
  {label}
  <input {...$$props} class={input()} />
</label>
