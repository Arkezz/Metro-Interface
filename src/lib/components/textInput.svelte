<script>
</script>

<div class="form-field">
  <label for="email">Email:</label>
  <input type="email" id="email" bind:value required />
</div>

<style>
  .form-field label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .form-field input[type="email"] {
    display: block;
    width: 95%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 3px;
    border: 1px solid #ccc;
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
</style>
