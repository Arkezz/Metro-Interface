<script>
  export let value = "";
  export let labelName = "";
  export let type = "text";

  function typeAction(node) {
    node.type = type;
  }
</script>

<div class="form-field">
  <label for={labelName}>{labelName}</label>
  <input use:typeAction id={type} bind:value required />
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

  .form-field input:focus {
    border-color: #0077ff;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
    outline: none;
  }
</style>
