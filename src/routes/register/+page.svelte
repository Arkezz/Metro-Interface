<script>
  import { registerUser } from "../../api.js";

  let email = "";
  let username = "";
  let password = "";
  let message = "";

  const handleRegister = async () => {
    try {
      const token = await registerUser(email, password, username);
      console.log(email, password, username, token);
      message = `Registered successfully! Token: ${token}`;
    } catch (error) {
      console.log(error.response.data);
      message =
        error.response?.data || "Something went wrong. Please try again later.";
    }
  };
</script>

<h1>Registration</h1>
<label>
  Username:
  <input type="text" bind:value={username} />
</label>
<label>
  Email:
  <input type="email" bind:value={email} />
</label>
<label>
  Password:
  <input type="password" bind:value={password} />
</label>
<button on:click={handleRegister}>Register</button>
<p>{message}</p>

<style>
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }
  input[type="email"],
  input[type="password"],
  input[type="text"] {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 16px;
    width: 100%;
    box-sizing: border-box;
  }
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0062cc;
  }
  p {
    margin-top: 16px;
    color: #dc3545;
    font-weight: bold;
  }
</style>
