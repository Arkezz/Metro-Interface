<script>
  import { enhance } from '$app/forms';
  import { resetPassword } from '$lib/api.js';
  import { authStore } from '$lib/store.js';

  let oldPassword = '';
  let newPassword = '';
  let message = '';

  const handleResetPassword = async () => {};
</script>

<form method="POST" use:enhance={handleResetPassword}>
  <div class="password-reset-form">
    <h1>Reset Password</h1>
    <form>
      <div class="form-field">
        <label for="old-password">Old Password:</label>
        <input
          type="password"
          name="oldPassword"
          id="old-password"
          bind:value={oldPassword}
        />
      </div>
      <div class="form-field">
        <label for="new-password">New Password:</label>
        <input
          type="password"
          name="newPassword"
          id="new-password"
          bind:value={newPassword}
        />
      </div>
      <div class="form-field">
        <button>Reset Password</button>
      </div>
    </form>
    <div class="form-message">
      <p>{message}</p>
    </div>
    <div class="form-options">
      <a href="/login">Already have an account? Login here</a>
    </div>
  </div>
</form>

<style>
  .password-reset-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .password-reset-form h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .password-reset-form form {
    display: flex;
    flex-direction: column;
  }

  .password-reset-form .form-field {
    margin-bottom: 1rem;
  }

  .password-reset-form .form-field label {
    display: block;
    margin-bottom: 0.5rem;
  }

  .password-reset-form .form-field input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .password-reset-form .form-field button {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

  .password-reset-form .form-message {
    margin-top: 1rem;
  }

  .password-reset-form .form-message p {
    color: #333;
  }

  .password-reset-form .form-options {
    margin-top: 1rem;
  }

  .password-reset-form .form-options a {
    color: #333;
  }

  .password-reset-form .form-options a:hover {
    text-decoration: underline;
  }

  .password-reset-form .form-options a:active {
    color: #000;
  }

  .password-reset-form .form-options a:visited {
    color: #333;
  }

  .password-reset-form .form-options a:link {
    color: #333;
  }

  .password-reset-form .form-options a:focus {
    outline: none;
  }
</style>
