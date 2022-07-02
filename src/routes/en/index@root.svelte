<script>
import MainHeader from "$lib/MainHeader.svelte";
import Navbar from "$lib/Navbar.svelte";
import Title from "$lib/Title.svelte";
import pagelist from "./pagelist";

</script>
<Title />
<MainHeader>
    <Navbar slot="navbar" links={pagelist} />
</MainHeader>