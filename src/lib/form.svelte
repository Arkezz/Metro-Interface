<script>
  let value;
  let type;
  let label;
  let handleInput = () => {};

  function handleInput(event) {
    event.type = type;
  }
</script>

<label> {label} </label>
<input use:handleInput bind:value />
