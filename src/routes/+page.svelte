<script>
  import { userProfile } from "../store.js";

  let username;

  $: {
    const user = $userProfile;

    if (user) {
      username = user.username;
    } else {
      username = "Guest";
    }
  }
</script>

<h1>Welcome, {username}!</h1>
