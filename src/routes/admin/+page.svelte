<script>
  import { onMount } from "svelte";
  import {
    viewRefundRequests,
    uploadRefundRequest,
    approveRefundRequest,
  } from "../../api.js";

  let refunds = [];
  let refundDescription = "";

  const fetchRefunds = async () => {
    refunds = await viewRefundRequests();
  };

  const submitRefundRequest = async () => {
    const response = await uploadRefundRequest(refundDescription);
    console.log(response);
  };

  const approveRefund = async (refundId) => {
    const response = await approveRefundRequest(refundId);
    console.log(response);
  };

  onMount(fetchRefunds);
  console.log(refunds);
</script>

<h1>Refund Requests</h1>
<ul>
  {#each refunds as refund}
    <li>
      <p>{refund.description}</p>
      <button on:click={() => approveRefund(refund.id)}>Approve</button>
    </li>
  {/each}
</ul>

<h2>Submit a Refund Request</h2>
<textarea bind:value={refundDescription} />
<button on:click={submitRefundRequest}>Submit Request</button>
