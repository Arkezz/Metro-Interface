<script>
  import { onMount } from "svelte";
  import { loginUser, getUserInfo } from "$lib/api.js";
  import { setAuthToken, setUserProfile, isLoggedIn } from "$lib/store.js";
  import PasswordInput from "$lib/components/passwordInput.svelte";
  import TextInput from "$lib/components/textInput.svelte";
  import Button from "$lib/components/button.svelte";

  let email = "";
  let password = "";
  let message = "";
  let isLoading = false;
  let rememberMe = false;

  onMount(() => {
    const authToken = getCookie("authToken");
    if (authToken) {
      setAuthToken(authToken);
      getUserInfo(authToken).then((user) => {
        setUserProfile(user);
        $isLoggedIn = true;
      });
    }
  });

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }

  const handleLogin = async (event) => {
    console.log(password, email);
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
      if (rememberMe) {
        document.cookie = `authToken=${token}; expires=${new Date(
          Date.now() + 604800000
        )}`;
      }
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
    <TextInput type="email" bind:value={email} labelName="Email:" />
    <PasswordInput bind:value={password} />
    <div class="form-group">
      <label for="remember-me" class="form-label">Remember me:</label>
      <input type="checkbox" id="remember-me" bind:checked={rememberMe} />
    </div>
    <Button text="Login" />
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
