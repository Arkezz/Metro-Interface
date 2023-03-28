<script>
  import { onMount } from "svelte";
  import { authToken } from "../../store.js";
  import {
    createStation,
    deleteStation,
    updateStation,
    viewAllStations,
  } from "$lib/api.js";

  let stations = [];

  async function loadStations() {
    stations = await viewAllStations();
  }

  onMount(async () => {
    await loadStations();
  });

  async function addStation(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get("name");
    const location = data.get("location");
    const result = await createStation(name, location);
    stations = [...stations, result];
    event.target.reset();
  }

  async function updateSelectedStation(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const id = data.get("id");
    const name = data.get("name");
    const location = data.get("location");
    const result = await updateStation(id, { name, location });
    stations = stations.map((station) => {
      if (station.id === result.id) {
        return result;
      }
      return station;
    });
  }

  async function deleteSelectedStation(id) {
    await deleteStation(id);
    stations = stations.filter((station) => station.station_id !== id);
  }

  // ... other functions to handle senior requests, refund requests, and ticket subscriptions
</script>

<h1>Admin Page</h1>
<h2>Stations</h2>
<form on:submit|preventDefault={addStation}>
  <label>
    Name:
    <input type="text" name="name" required />
  </label>
  <br />
  <label>
    Location:
    <input type="text" name="location" required />
  </label>
  <br />
  <button type="submit">Add Station</button>
</form>
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Location</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {#each stations as station}
      <tr>
        <td>{station.station_id}</td>
        <td>{station.name}</td>
        <td>{station.line_id}</td>
        <td>
          <form on:submit|preventDefault={updateSelectedStation}>
            <input type="hidden" name="id" value={station.station_id} />
            <label>
              Name:
              <input type="text" name="name" value={station.name} required />
            </label>
            <br />
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={station.line_id}
                required
              />
            </label>
            <br />
            <button type="submit">Update</button>
          </form>
          <button on:click={() => deleteSelectedStation(station.station_id)}
            >Delete</button
          >
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  h1 {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  form {
    margin-bottom: 1em;
  }

  table {
    border-collapse: collapse;
    margin-top: 1em;
    width: 100%;
  }

  th {
    background-color: #eee;
    font-weight: bold;
    padding: 0.5em;
    text-align: left;
  }

  td {
    border: 1px solid #ccc;
    padding: 0.5em;
  }

  input[type="text"] {
    font-size: 1em;
    padding: 0.25em;
    width: 100%;
  }

  button[type="submit"],
  button {
    background-color: #0066cc;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1em;
    margin-top: 0.5em;
    padding: 0.5em 1em;
  }

  button[type="submit"]:hover,
  button:hover {
    background-color: #0059b3;
  }
</style>
