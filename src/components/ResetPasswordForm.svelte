<script>
    import { requestPasswordReset, resetPassword } from "../api.js";
    
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
        requestMessage = error.response.data.message;
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
        resetMessage = error.response.data.message;
      }
    };
  </script>
  
  <h1>Reset Password</h1>
  <label>
    Email:
    <input type="email" bind:value={email} />
  </label>
  <button on:click={handleResetRequest}>Request Reset</button>
  <p>{requestMessage}</p>
  <label>
    Token:
    <input type="text" bind:value={resetToken} />
  </label>
  <label>
    New Password:
    <input type="password" bind:value={resetPassword1} />
  </label>
  <label>
    Confirm New Password:
    <input type="password" bind:value={resetPassword2} />
  </label>
  <button on:click={handleReset}>Reset Password</button>
  <p>{resetMessage}</p>

  
  