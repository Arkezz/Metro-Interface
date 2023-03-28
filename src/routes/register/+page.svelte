<script>
  import { registerUser } from "$lib/api.js";
  import { TextInput, PasswordInput, Button } from "$lib/components";

  let email = "";
  let username = "";
  let password = "";
  let message = "";

  const handleRegister = async () => {
    try {
      await registerUser(email, password, username);
      message = `Registered successfully!`;
    } catch (error) {
      console.log(error.response.data);
      message =
        error.response?.data || "Something went wrong. Please try again later.";
    }
  };
</script>

<div class="register-form">
  <h1>Registration</h1>
  <form on:submit={handleRegister}>
    <TextInput bind:value={username} labelName="Username:" />
    <TextInput type="email" bind:value={email} labelName="Email:" />
    <PasswordInput bind:value={password} />
    <Button text="Register" />
    <div class="form-message">
      <p>{message}</p>
    </div>
    <div class="form-options">
      <a href="/login">Already have an account? Login here</a>
    </div>
  </form>
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
