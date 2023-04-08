<script>
  import PlanRoute from '$lib/components/home/PlanRoute.svelte';
  import StationSearch from '$lib/components/home/stationSearch.svelte';
  import Tickets from '$lib/components/home/tickets.svelte';

  export let data;
  $: ({ stations, routes } = data);
</script>

<main class="container">
  <!-- Hero section -->
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to Metro Cairo Mover</h1>
      <p>Buy tickets, view upcoming and completed rides, and more.</p>
      <a href="/register" class="btn btn-primary">Sign up</a>
    </div>
  </section>

  <Tickets />
  <StationSearch {stations} />
  <PlanRoute {routes} />
</main>

<style>
  /* Main container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Hero section */
  .hero {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    color: #333;
    text-shadow: 2px 2px #333;
  }

  .hero h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  .hero p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .hero a {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 5px;
  }

  .hero a:hover {
    background-color: #fff;
    color: #333;
  }
</style>
