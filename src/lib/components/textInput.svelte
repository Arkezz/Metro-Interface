<script>
  export let value = "";
  export let lableName = "";
  export let type = "text";

  function typeAction(node) {
    node.type = type;
  }
</script>

<div class="form-field">
  <label for="email">{lableName}</label>
  <input use:typeAction id="email" bind:value required />
</div>

<style>
  .form-field label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .form-field input {
    display: block;
    width: 95%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 3px;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
  }
</style>
