<script>
  import { enhance } from '$app/forms';
  import { authStore, setAuth } from '$lib/store.js';
  import { TextInput, PasswordInput, Button } from '$components';

  let email = '';
  let password = '';
  let message = '';
  let isLoading = false;
  let rememberMe = false;
  export let data;
  let { session } = data;

  const handleLogin = ({ form, data, action, cancel }) => {
    if ($authStore.isLoggedIn) {
      message = 'You are already logged in!';
      cancel();
    }

    isLoading = true;

    return async ({ result, update }) => {
      isLoading = false;
      if (result.type === 'success') {
        const { user, toast } = result.data;
        message = toast;
        setAuth(user, session);
      } else {
        await update();
      }
    };
  };
</script>

<div class="login-form">
  <h1>Login</h1>
  <form method="POST" use:enhance={handleLogin}>
    <TextInput
      type="email"
      name="email"
      bind:value={email}
      labelName="Email:"
    />
    <PasswordInput name="password" bind:value={password} />
    <div class="form-group">
      <label for="remember-me" class="form-label">Remember me:</label>
      <input type="checkbox" id="remember-me" bind:checked={rememberMe} />
    </div>
    <Button {isLoading} text="Login" />
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
