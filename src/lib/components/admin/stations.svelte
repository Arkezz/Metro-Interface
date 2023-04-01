<script>
  import { enhance } from "$app/forms";
  import { authToken } from "$lib/store.js";
  import { deleteStation } from "$lib/api.js";

  export let stations = [];

  async function deleteSelectedStation(id) {
    await deleteStation($authToken, id);
    stations = stations.filter((station) => station.station_id !== id);
  }
</script>

<h1>Admin Page</h1>
<h2>Stations</h2>
<form method="POST" action="/admin?/create">
  <label>
    Name:
    <input type="text" name="name" required />
  </label>
  <br />
  <label>
    Line:
    <input type="text" name="line_id" required />
  </label>
  <br />
  <button type="submit">Add Station</button>
</form>
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Line</th>
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
          <form method="POST" action="/admin?/update">
            <input type="hidden" name="id" value={station.station_id} />
            <label>
              Name:
              <input type="text" name="name" value={station.name} required />
            </label>
            <br />
            <label>
              Line:
              <input
                type="text"
                name="line_id"
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
  /* Style for heading tags */
  h1 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  /* Style for form */
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  input[type="text"] {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  button[type="submit"],
  button {
    padding: 8px 16px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    background-color: #4caf50;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background-color: #3e8e41;
  }

  /* Style for table */
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
    font-size: 16px;
  }

  th {
    background-color: #4caf50;
    color: #fff;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
</style>
