<script>
  export let stations = [];
  $: searchTerm = '';
  $: currentPage = 0;
  $: stationsPerPage = 3;

  $: filteredStations = stations
    .filter((station) =>
      station.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(currentPage * stationsPerPage, (currentPage + 1) * stationsPerPage);

  $: totalPages = Math.ceil(stations.length / stationsPerPage);
</script>

<section class="stations">
  <h2>Explore stations</h2>
  <p>Discover the Metro system of Cairo's stations and their amenities.</p>
  <div class="station-search">
    <input type="text" placeholder="Search stations" bind:value={searchTerm} />
    <button class="btn btn-secondary">Search</button>
  </div>
  {#if filteredStations.length > 0}
    <div class="station-grid">
      {#each filteredStations as station}
        <div class="station-card">
          <h3>{station.name}</h3>
          <p class="line">Lines: {station.line_id}</p>
          <ul class="amenities">
            <li>Restrooms</li>
            <li>Shops</li>
            <li>Ticket machines</li>
          </ul>
        </div>
      {/each}
    </div>
    <div class="pagination">
      <button
        class="btn btn-secondary"
        on:click={() => currentPage--}
        disabled={currentPage === 0}>Previous</button
      >
      <p>Page {currentPage + 1} of {totalPages}</p>
      <button
        class="btn btn-secondary"
        on:click={() => currentPage++}
        disabled={currentPage === totalPages - 1}>Next</button
      >
    </div>
  {:else}
    <p class="no-stations">No stations found.</p>
  {/if}
</section>

<style>
  .stations {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 40px;
    color: #666;
  }

  .station-search {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }

  input[type='text'] {
    padding: 15px 20px;
    border-radius: 50px;
    border: 1px solid #ccc;
    font-size: 1.2rem;
    width: 70%;
    margin-right: 10px;
    transition: all 0.3s ease-in-out;
  }
  input[type='text']:focus {
    width: 100%;
  }

  .btn {
    padding: 15px 30px;
    border-radius: 50px;
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #333;
    color: #fff;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #444;
    transform: scale(1.05);
  }

  .station-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
  }

  .station-card {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
    opacity: 1;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  .station-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #333;
  }

  .line {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #666;
  }

  .amenities {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .amenities li {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 5px;
    list-style-type: disc;
    list-style-position: inside;
  }

  .no-stations {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
    text-align: center;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 10px;
  }

  @media only screen and (max-width: 768px) {
    .station-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }

  .pagination p {
    font-size: 1.2rem;
    margin: 0 20px;
    color: #666;
  }

  .pagination button {
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #333;
    color: #fff;
    cursor: pointer;
  }

  .pagination button:hover {
    background-color: #444;
    transform: scale(1.05);
  }

  .pagination button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
