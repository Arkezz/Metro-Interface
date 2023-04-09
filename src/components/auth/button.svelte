<!-- MyButton.svelte -->
<script>
  export let text = '';
  export let isLoading = false;
</script>

<button aria-busy={isLoading ? 'true' : 'false'}>
  {#if !isLoading}
    {text}
  {:else}
    <span class="spinner" />
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

  button[aria-busy='true'] {
    opacity: 0.5;
    cursor: default;
  }

  .spinner {
    display: inline-block;
    width: 1em;
    height: 1em;
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
