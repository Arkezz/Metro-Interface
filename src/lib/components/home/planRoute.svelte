<script>
  export let routes = [];

  $: filteredRoutes = routes;
</script>

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

<style>
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
</style>
