<script>
  export let text = "";
  export let isLoading = false;
</script>

<button aria-busy={isLoading}>
  {#if !isLoading}
    {text}
  {/if}
</button>

<style>
  button {
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
  button[aria-busy="true"]:after {
    content: "";
    display: inline-block;
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    border: 0.2em solid rgba(255, 255, 255, 0.2);
    border-top-color: #fff;
    animation: spin 1s linear infinite;
    margin-left: 0.5em;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
