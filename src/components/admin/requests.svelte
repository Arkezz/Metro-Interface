<script>
  export let requests = [];
</script>

{#if requests.length === 0}
  <div>No requests found</div>
{:else}
  {#each requests as request}
    <div>
      <div>{request.request_id}</div>
      <div>{request.name}</div>
      <div>{request.line_id}</div>
      <div>{request.station_ids}</div>
    </div>
  {/each}
{/if}

<style>
</style>
