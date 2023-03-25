<script>
  export let value = "";
  let isPasswordShort = false;
  let requirements = "Password must be at least 8 characters long.";

  const handleInput = (event) => {
    const { value } = event.target;
    isPasswordShort = value.length >= 8;
    const borderColor =
      value.length === 0 ? "#ccc" : isPasswordShort ? "green" : "red";
    event.target.style.borderColor = borderColor;
    const passwordRequirements = document.querySelector(
      ".password-requirements"
    );
    passwordRequirements.style.color = borderColor;
  };
</script>

<div class="form-field">
  <label for="password">Password:</label>
  <input
    type="password"
    id="password"
    bind:value
    on:input={handleInput}
    required
  />
  <span class="password-requirements">{requirements}</span>
</div>

<style>
  .form-field input[type="password"] {
    display: block;
    width: 95%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 3px;
    border: 1px solid #ccc;
  }

  .password-requirements {
    color: #ccc;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
</style>
