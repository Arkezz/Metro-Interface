<script>
  import { loginUser, getUserInfo } from "../../api.js";
  import { setAuthToken, setUserProfile, isLoggedIn } from "../../store.js";
  import PasswordInput from "$lib/components/passwordInput.svelte";
  import TextInput from "$lib/components/textInput.svelte";

  let email = "";
  let password = "";
  let message = "";

  const handleLogin = async (event) => {
    event.preventDefault();
    if ($isLoggedIn) {
      message = "You are already logged in!";
      return;
    }
    isLoading = true;
    try {
      const token = await loginUser(email, password);
      setAuthToken(token);
      const user = await getUserInfo(token);
      setUserProfile(user);
      message = `Logged in successfully! Welcome ${user.username}`;
    } catch (error) {
      message =
        error.response?.data || "Something went wrong. Please try again later.";
    } finally {
      isLoading = false;
    }
  };
</script>

<div class="login-form">
  <h1>Login</h1>
  <form on:submit={handleLogin}>
    <TextInput type="email" bind:value={email} lableName="Email:" />
    <PasswordInput bind:value={password} />
    <div class="form-field">
      <!-- <button disabled={isLoading || !$PasswordInput.isValid}>
        {isLoading ? "Logging in..." : "Login"}
      </button> -->
    </div>
    <div class="form-message">{message}</div>
  </form>
  <div class="form-options">
    <a href="password-reset">Forgot Password?</a>
    <span>|</span>
    <a href="/register">Create Account</a>
  </div>
</div>

<style>
  .login-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .login-form h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-field {
    margin-bottom: 1rem;
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

  .form-field button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .form-message {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #ff0000;
  }

  .form-options {
    display: flex;
    justify-content: space-between;
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
