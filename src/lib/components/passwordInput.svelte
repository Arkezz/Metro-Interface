<script>
  export let value = "";
  export let tooltip = true;
  export let isPasswordShort = false;
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
  {#if tooltip}
    <span class="password-requirements">{requirements}</span>
  {/if}
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

  .form-field input[type="password"]:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
  }

  .form-field label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .password-requirements {
    color: #ccc;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
</style>
