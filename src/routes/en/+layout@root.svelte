<script>
import Navbar from "$lib/Navbar.svelte";
import pagelist from "./pagelist";

</script>
<svelte:head>
	<html lang="en" />
</svelte:head>

<Navbar links={pagelist}></Navbar>
<slot />
