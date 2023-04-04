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
    padding: 4rem 0;
    text-align: center;
  }

  .tickets h2 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
    color: #333;
  }

  .tickets p {
    margin-bottom: 4rem;
    font-size: 1.5rem;
    color: #666;
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;
  }

  .ticket-types {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .ticket-type {
    flex-basis: 20%;
    padding: 2rem;
    margin: 2rem;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: all 0.3s ease-in-out;
  }

  .ticket-type:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }

  .ticket-type i {
    font-size: 5rem;
    margin-bottom: 1rem;
    display: block;
    color: #007bff;
  }

  .ticket-type h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    color: #333;
  }

  .ticket-type p {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: #666;
  }

  /* Buttons */
  .btn {
    padding: 1rem 2rem;
    border-radius: 5rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    border: 2px solid #007bff;
    color: #007bff;
  }

  .btn:hover {
    background-color: #007bff;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
</style>
