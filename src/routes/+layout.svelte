<!-- layout.svelte -->

<!-- Header section -->
<header class="header-section">
  <h1 class="header-title">Cairo Metro Ticket Booking</h1>
</header>

<main class="main-content">
  <slot></slot>
</main>

<footer class="footer-section">
  <p class="footer-text">&copy; 2023 Cairo Metro Ticket Booking</p>
</footer>

  
  <style>
   :root {
  --main-color: #f0f0f0;
  --text-color: #333;
  --font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: var(--font-size);
}

.header-section {
  background: var(--main-color);
  padding: 1em;
  text-align: center;
  color: var(--text-color);
}

.main-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
}

.footer-section {
  background: var(--main-color);
  padding: 1em;
  text-align: center;
  color: var(--text-color);
}

.footer-text {
  margin: 0;
  font-size: 14px;
}
  </style>