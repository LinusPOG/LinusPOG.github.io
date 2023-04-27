<script>
  import "prism-themes/themes/prism-one-dark.css";
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />

  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
  </style>
</svelte:head>

<main data-theme="dark" class="container">
  <slot />
</main>

<style>
  :global(body) {
    background-color: var(--contrast);
    height: auto;
    min-height: 100%;
    position: absolute;
  }
</style>