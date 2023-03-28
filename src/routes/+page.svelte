<script>
  import PlanRoute from "$lib/components/home/PlanRoute.svelte";
  import StationSearch from "$lib/components/home/stationSearch.svelte";
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

  <!-- Tickets section -->
  <section class="tickets">
    <h2>Buy tickets</h2>
    <p>Choose from a range of ticket options to suit your needs.</p>
    <div class="ticket-types">
      <div class="ticket-type">
        <i class="fas fa-calendar" />
        <h3>Monthly pass</h3>
        <p>Valid for one calendar month</p>
        <p>Price: $30</p>
        <a href="/buy/monthly" class="btn btn-primary">Buy now</a>
      </div>
      <div class="ticket-type">
        <i class="fas fa-calendar-alt" />
        <h3>Quarterly pass</h3>
        <p>Valid for three calendar months</p>
        <p>Price: $80</p>
        <a href="/buy/quarterly" class="btn btn-primary">Buy now</a>
      </div>
      <div class="ticket-type">
        <i class="fas fa-calendar-check" />
        <h3>Annual pass</h3>
        <p>Valid for one calendar year</p>
        <p>Price: $250</p>
        <a href="/buy/annual" class="btn btn-primary">Buy now</a>
      </div>
    </div>
  </section>
  <StationSearch />
  <PlanRoute />
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
    height: 60vh;
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

  /* Tickets section */
  .tickets {
    padding: 2rem 0;
  }

  .tickets h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .tickets p {
    margin-bottom: 2rem;
  }

  .ticket-types {
    display: flex;
    justify-content: space-between;
  }

  .ticket-type {
    flex-basis: 30%;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .ticket-type h3 {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  .ticket-type p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
</style>
