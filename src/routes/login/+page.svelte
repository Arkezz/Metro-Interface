<script>
  import { loginUser } from "../../api.js";

  let email = "";
  let password = "";
  let message = "";

  const handleLogin = async () => {
    try {
      const token = await loginUser(email, password);
      message = `Logged in successfully! Token: ${token}`;
    } catch (error) {
      message =
        error.response?.data || "Something went wrong. Please try again later.";
    }
  };
</script>

<h1>Login</h1>

<div class="login-box">
  <label class="user-box">
    Email:
    <input type="email" bind:value={email} />
  </label>
  <label>
    Password:
    <input type="password" bind:value={password} />
  </label>
  <button on:click={handleLogin}>Login</button>
  <p>{message}</p>
</div>
