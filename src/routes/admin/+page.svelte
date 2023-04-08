<script>
  import Stations from '$lib/components/admin/stations.svelte';
  import Routes from '$lib/components/admin/routes.svelte';
  export let data;
  $: ({ stations, routes } = data);

  let activeTab = 'stations'; // default to showing the stations tab

  function setActiveTab(tab) {
    activeTab = tab;
  }
</script>

<div class="tabs">
  <button
    class="tab"
    class:active={activeTab === 'stations'}
    on:click={() => setActiveTab('stations')}>Stations</button
  >
  <button
    class="tab"
    class:active={activeTab === 'routes'}
    on:click={() => setActiveTab('routes')}>Routes</button
  >
</div>

<div class="panel">
  {#if activeTab === 'stations'}
    <Stations {stations} />
  {/if}
  {#if activeTab === 'routes'}
    <Routes {routes} />
  {/if}
</div>

<style>
  .tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f1f1;
    padding: 0.5rem;
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .tab {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: none;
    background-color: transparent;
    font-size: 1rem;
    margin-right: 0.5rem;
    color: #555;
    transition: all 0.2s ease-in-out;
  }

  .tab:last-child {
    margin-right: 0;
  }

  .tab:hover,
  .tab.active {
    background-color: #007aff;
    color: #fff;
  }

  .panel {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
</style>
