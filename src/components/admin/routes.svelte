<script>
  export let routes = [];
</script>

{#if routes.length === 0}
  <div>No routes found</div>
{:else}
  {#each routes as route}
    <div>
      <div>{route.route_id}</div>
      <div>{route.name}</div>
      <div>{route.line_id}</div>
      <div>{route.station_ids}</div>
    </div>
  {/each}
{/if}

<style>
</style>
