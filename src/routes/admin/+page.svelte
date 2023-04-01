<script>
  import Stations from "$lib/components/admin/stations.svelte";
  export let data;
  $: ({ stations } = data);

  //import Stations from "$components";
</script>

<Stations {stations} />
