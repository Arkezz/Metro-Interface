<script>
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

  <!-- Stations section -->
  <section class="stations">
    <h2>Explore stations</h2>
    <p>Discover the Metro system of Cairo's stations and their amenities.</p>
    <div class="station-search">
      <input type="text" placeholder="Search stations" />
      <button class="btn btn-secondary">Search</button>
    </div>
    <div class="station-list">
      <div class="station">
        <h3>Giza Station</h3>
        <p>Lines: 1, 2</p>
        <p>Amenities: Restrooms, shops, ticket machines</p>
      </div>
      <div class="station">
        <h3>Zamalek Station</h3>
        <p>Lines: 2, 3</p>
        <p>Amenities: Restrooms, shops, ticket machines</p>
      </div>
      <div class="station">
        <h3>Tahrir Square Station</h3>
        <p>Lines: 1, 3</p>
        <p>Amenities: Restrooms, shops, ticket machines</p>
      </div>
    </div>
  </section>
  <section class="routes">
    <h2>Plan your route</h2>
    <p>Find out the best route to get to your destination.</p>
    <div class="route-search">
      <input type="text" placeholder="Enter origin" />
      <input type="text" placeholder="Enter destination" />
      <button class="btn btn-secondary">Search</button>
    </div>
    <div class="route-results">
      <div class="route">
        <h3>Route 1</h3>
        <p>Price: $2</p>
        <p>Stations: Giza - Tahrir Square - Heliopolis</p>
      </div>
      <div class="route">
        <h3>Route 2</h3>
        <p>Price: $3</p>
        <p>Stations: Zamalek - Tahrir Square - Maadi</p>
      </div>
      <div class="route">
        <h3>Route 3</h3>
        <p>Price: $1.5</p>
        <p>Stations: Tahrir Square - Abbassiya - Shubra</p>
      </div>
    </div>
  </section>
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

  /* Routes section */
  .routes {
    padding: 2rem 0;
  }

  .routes h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .routes p {
    margin-bottom: 2rem;
  }

  .route-search {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .route-search input[type="text"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 0.5rem;
    width: 25%;
  }

  .route-search button {
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .route-results {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .route {
    background-color: #fff;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    flex-basis: 25%;
  }

  .route h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .route p {
    margin-bottom: 0.5rem;
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
