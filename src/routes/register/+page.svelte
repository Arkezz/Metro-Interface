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

<div class="register-form">
  <h1>Registration</h1>
  <form>
    <div class="form-field">
      <label for="username">Username:</label>
      <input type="text" id="username" bind:value={username} />
    </div>
    <div class="form-field">
      <label for="email">Email:</label>
      <input type="email" id="email" bind:value={email} />
    </div>
    <div class="form-field">
      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={password} />
    </div>
    <div class="form-field">
      <button on:click={handleRegister}>Register</button>
    </div>
  </form>
  <div class="form-message">
    <p>{message}</p>
  </div>
  <div class="form-options">
    <a href="/login">Already have an account? Login here</a>
  </div>
</div>

<style>
  .register-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .register-form h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-field {
    margin-bottom: 1rem;
  }

  .form-field label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .form-field input[type="text"],
  .form-field input[type="email"],
  .form-field input[type="password"] {
    display: block;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 3px;
    border: 1px solid #ccc;
  }

  .form-field button {
    display: block;
    width: 100%;
    padding: 0.5rem;
    font-size: 1.2rem;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .form-message {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #ff0000;
  }

  .form-options {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    font-size: 1rem;
  }

  .form-options a {
    color: #4caf50;
    text-decoration: none;
  }

  .form-options a:hover {
    text-decoration: underline;
  }
</style>
