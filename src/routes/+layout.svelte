<script>
  import { isLoggedIn } from '$lib/store.js';
</script>

<div class="hero">
  <a href="/">Home</a>
  <a href="/admin">Admin Page</a>
  <div class="dropdown">
    <button class="dropbtn"><img src="profile.png" alt="Profile Icon" /></button
    >
    <div class="dropdown-content">
      {#if $isLoggedIn}
        <a href="/profile">Profile</a>
        <a href="/logout">Logout</a>
      {:else}
        <a href="/register">Register</a>
        <a href="/login">Login</a>
      {/if}
    </div>
  </div>
</div>

<main>
  <slot />
</main>

<style>
  @import url('https://fonts.cdnfonts.com/css/josefin-sans');

  :root {
    --primary-color: #ff5722;
    --secondary-color: #00bcd4;
    --tertiary-color: #ffc107;
    accent-color: #3f51b5;
    --text-color: #212121;
    --link-color: #1976d2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  }

  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 4rem;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .hero a {
    text-decoration: none;
    color: #000;
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropbtn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    margin-left: 1rem;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    z-index: 1;
    top: 3rem;
    right: 0;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .dropdown-content a {
    display: block;
    text-decoration: none;
    color: #000;
    padding: 0.5rem;
    font-size: 1rem;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>
