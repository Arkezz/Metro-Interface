<script>
  import Svg from "$lib/icons/svgIcon.svelte";
  import { eyeIcon, eyeOffIcon } from "$lib/svg.js";
  export let value = "";
  export let name = "";
  export let tooltip = true;
  export let isPasswordValid = false;
  let show_password = false;

  const handleInput = (event) => {
    const { value } = event.target;
    isPasswordValid = value.length >= 8;
    event.target.style.borderColor =
      value.length === 0 ? "#ccc" : isPasswordValid ? "green" : "red";
  };

  $: type = show_password ? "text" : "password";
</script>

<div class="form-field">
  <label for="password">Password:</label>
  <div style="position:relative;">
    <input
      {...{ type }}
      id="password"
      {name}
      bind:value
      on:input={handleInput}
      required
    />
    <button type="button" on:click={() => (show_password = !show_password)}>
      <Svg d={show_password ? eyeOffIcon : eyeIcon} size="24" />
    </button>
  </div>
  {#if tooltip}
    <span
      class="password-requirements"
      style="color: {isPasswordValid
        ? 'green'
        : value.length === 0
        ? '#ccc'
        : 'red'}; ">Password must be at least 8 characters long.</span
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
    padding-right: 30px;
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

  .form-field button {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .password-requirements {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
</style>
