<script>
</script>

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

<style>
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

  /* Stations section */
  .stations {
    padding: 2rem 0;
  }

  .stations h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .stations p {
    margin-bottom: 2rem;
  }

  .station-search {
    display: flex;
    margin-bottom: 2rem;
  }

  .station-search input[type="text"] {
    flex-grow: 1;
    padding: 0.5rem;
    font-size: 1.2rem;
    border: 2px solid #ccc;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .station-search button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    background-color: #007bff;
    color: #fff;
    border: 2px solid #007bff;
    border-radius: 0 0.5rem 0.5rem 0;
    cursor: pointer;
  }

  .station-search button:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }

  .station-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }

  .station {
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  }

  .station h3 {
    font-size: 1.5rem;
    margin-top: 0;
  }

  .station p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }

  /* Routes section */
  .routes {
    padding: 2rem 0;
  }

  .routes h2 {
    font-size: 2rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  /* Stations section */
  .stations {
    padding: 2rem 0;
  }

  .stations h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .stations p {
    margin-bottom: 2rem;
  }

  .station-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .station-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
  }

  .station {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .station h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .station p {
    margin-bottom: 0.5rem;
  }

  /* Ticket types */
  .ticket-types {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
  }

  .ticket-type {
    flex-basis: calc(33.33% - 1rem);
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .ticket-type i {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
    text-align: center;
  }

  .ticket-type h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .ticket-type p {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  /* Buttons */
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border: none;
  }

  .btn-primary:hover {
    background-color: #0069d9;
  }

  .btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border: none;
  }

  .btn-secondary:hover {
    background-color: #5a6268;
  }
</style>
