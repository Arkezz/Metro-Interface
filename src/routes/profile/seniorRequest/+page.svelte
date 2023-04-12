<script>
  import { enhance } from '$app/forms';

  let token;
  let name = '';
  let imageFile;
  let isLoading = false;
  let errorMessage = '';

  const handleSubmit = async (e) => {};
</script>

<main>
  <h1>Create Senior Request</h1>
  {#if errorMessage}
    <p style="color: red;">{errorMessage}</p>
  {/if}
  <form
    method="POST"
    use:enhance={handleSubmit}
    action="/profile?/createRequest"
  >
    <label>
      Name:
      <input type="text" name="name" bind:value={name} />
    </label>
    <label>
      Image:
      <input type="file" name="imageFile" accept="image/*" />
    </label>
    <button type="submit" disabled={isLoading}>
      {#if isLoading}
        Please wait...
      {:else}
        Submit
      {/if}
    </button>
  </form>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
  }

  form label {
    display: block;
    width: 100%;
    text-align: left;
    margin-bottom: 0.5rem;
  }

  form input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 3px;
    border: 1px solid #ccc;
  }

  form input:focus {
    outline: none;
    border-color: blue;
  }

  form button {
    display: block;
    width: 100%;
    padding: 0.5rem;
    font-size: 1.2rem;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 1rem;
  }

  form button[disabled] {
    opacity: 0.5;
    cursor: default;
  }
</style>
