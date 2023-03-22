<script>
  import { requestPasswordReset, resetPassword } from "../../api.js";

  let email = "";
  let resetToken = "";
  let resetPassword1 = "";
  let resetPassword2 = "";
  let requestMessage = "";
  let resetMessage = "";

  const handleResetRequest = async () => {
    try {
      const message = await requestPasswordReset(email);
      requestMessage = message;
    } catch (error) {
      requestMessage =
        error.response?.data || "Something went wrong. Please try again later.";
    }
  };

  const handleReset = async () => {
    if (resetPassword1 !== resetPassword2) {
      resetMessage = "Passwords do not match";
      return;
    }
    try {
      const message = await resetPassword(resetToken, resetPassword1);
      resetMessage = message;
    } catch (error) {
      resetMessage = error.response?.data;
    }
  };
</script>

<h1>Reset Password</h1>
<label>
  <span>Email:</span>
  <input type="email" bind:value={email} />
</label>
<button on:click={handleResetRequest}>Request Reset</button>
<p>{requestMessage}</p>
<label>
  <span>Token:</span>
  <input type="text" bind:value={resetToken} />
</label>
<label>
  <span>New Password:</span>
  <input type="password" bind:value={resetPassword1} />
</label>
<label>
  <span>Confirm New Password:</span>
  <input type="password" bind:value={resetPassword2} />
</label>
<button on:click={handleReset}>Reset Password</button>
<p>{resetMessage}</p>

<style>
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  input {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid gray;
  }

  button {
    background-color: blue;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
  }

  p {
    margin-top: 1rem;
  }
</style>
