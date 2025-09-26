<script>
  import Nav from "$lib/Nav.svelte";
</script>

<div class="matrix-bg">
  <Nav />
  <slot />
</div>

<style>
  .matrix-bg {
    min-height: 100vh;
    background-color: black;
    color: #0f0;
    font-family: 'Share Tech Mono', monospace;
    padding: 2rem;
  }

  .matrix-bg::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      to bottom,
      rgba(0, 255, 0, 0.1) 0px,
      rgba(0, 255, 0, 0.1) 2px,
      transparent 2px,
      transparent 4px
    );
    animation: rain 1s linear infinite;
    pointer-events: none;
  }

  @keyframes rain {
    from { background-position: 0 -100%; }
    to   { background-position: 0 100%; }
  }
</style>
