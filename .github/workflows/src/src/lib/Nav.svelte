<script>
  export let current = "";
</script>

<nav class="nav">
  <a href="/" class:selected={current === "home"}>Home</a>
  <a href="/news" class:selected={current === "news"}>News</a>
  <a href="/blog" class:selected={current === "blog"}>Blog</a>
  <a href="/resources" class:selected={current === "resources"}>Resources</a>
</nav>

<style>
  .nav {
    display: flex;
    gap: 1.5rem;
    padding: 1rem;
    background: black;
    border-bottom: 1px solid #0f0;
    font-family: 'Share Tech Mono', monospace;
  }

  a {
    color: #0f0;
    text-decoration: none;
    transition: all 0.2s;
  }

  a:hover {
    text-shadow: 0 0 8px #0f0;
  }

  .selected {
    font-weight: bold;
    border-bottom: 2px solid #0f0;
  }
</style>
