<script>
  import Svg from "$lib/icons/svgIcon.svelte";
  import { eyeIcon, eyeOffIcon } from "$lib/svg.js";
  export let value = "";
  export let tooltip = true;
  export let isPasswordShort = false;
  let show_password = false;

  const handleInput = (event) => {
    const { value } = event.target;
    isPasswordShort = value.length >= 8;
    event.target.style.borderColor =
      value.length === 0 ? "#ccc" : isPasswordShort ? "green" : "red";
    const passwordRequirements = document.querySelector(
      ".password-requirements"
    );
    passwordRequirements.style.color = event.target.style.borderColor;
  };

  $: type = show_password ? "text" : "password";
</script>

<div class="form-field">
  <label for="password">Password:</label>
  <div style="position:relative;">
    <input
      {type}
      id="password"
      {value}
      on:input={handleInput}
      required
      style="padding-right: 30px;"
    />
    <button
      type="button"
      style="position:absolute; top: 50%; right: 5px; transform: translateY(-50%); border: none; background-color: transparent; cursor: pointer;"
      on:click={() => (show_password = !show_password)}
    >
      <Svg d={show_password ? eyeOffIcon : eyeIcon} size="24" />
    </button>
  </div>
  {#if tooltip}
    <span
      class="password-requirements"
      style="color: {isPasswordShort
        ? 'green'
        : '#ccc'}; font-size: 0.8rem; margin-top: 0.5rem;"
      >Password must be at least 8 characters long.</span
    >
  {/if}
</div>

<style>
  .form-field input {
    display: block;
    width: 90%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 3px;
    border: 1px solid #ccc;
  }

  .form-field input:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
  }

  .form-field label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
</style>
