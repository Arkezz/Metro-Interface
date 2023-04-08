<script>
  import { authStore } from '$lib/store.js';

  export let upcoming = '';
  export let completed = '';
</script>

<div>
  <div class="container">
    <h1>Welcome {$authStore.user.username}</h1>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" value={$authStore.user.email} />
    <label for="username">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      value={$authStore.user.username}
    />
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" value="********" />
    <h2>Upcoming Rides:</h2>
    {#if upcoming.length === 0}
      <p class="no-data">No upcoming rides.</p>
    {:else}
      <ul class="upcoming-rides">
        <li>Flight to New York (April 15, 2023) <button>Cancel</button></li>
        <li>Train to Boston (April 20, 2023) <button>Cancel</button></li>
      </ul>
    {/if}
    <h2>Completed Rides:</h2>
    {#if completed.length === 0}
      <p class="no-data">No completed rides.</p>
    {:else}
      <ul class="completed-rides">
        <li>Flight to Los Angeles (April 1, 2023)</li>
        <li>Bus to San Francisco (March 20, 2023)</li>
      </ul>
    {/if}
  </div>
</div>

<style>
  .container {
    margin: 0 auto;
    max-width: 800px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  h1 {
    margin-top: 0;
  }
  label {
    display: block;
    margin-bottom: 10px;
  }
  input[type='text'],
  input[type='password'],
  input[type='email'] {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    box-sizing: border-box;
  }
  button {
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  button:hover {
    background-color: #3e8e41;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f2f2f2;
    border-radius: 5px;
  }
  .upcoming-rides li button {
    float: right;
    background-color: #f44336;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .upcoming-rides li button:hover {
    background-color: #cc2d22;
  }
  .no-data {
    font-style: italic;
    color: #999;
  }
</style>
