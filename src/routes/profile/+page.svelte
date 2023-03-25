<script>
</script>

//Show two tabs tickets and requests
<div>
  <div class="tabs">
    <div class="tab" on:click={() => (activeTab = "tickets")}>Tickets</div>
    <div class="tab" on:click={() => (activeTab = "requests")}>Requests</div>
  </div>
  <div class="tab-content">
    {#if activeTab === "tickets"}
      <Tickets />
    {:else if activeTab === "requests"}
      <Requests />
    {/if}
  </div>
</div>

<style>
</style>
