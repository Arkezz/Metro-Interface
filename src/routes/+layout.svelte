<div class="hero">
  <a href="/">Home</a>
  <a href="/login">Login</a>
  <a href="/register">Register</a>
  <a href="/password-reset">Reset Password</a>
  <a href="/admin">Admin Page</a>
</div>

<main>
  <slot />
</main>

<div class="footer">
  <p>Footer</p>
</div>

<style>
  @import url("https://fonts.cdnfonts.com/css/josefin-sans");
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    font-family: "Josefin Sans", sans-serif;
  }

  .hero {
    font-size: large;
  }
</style>
