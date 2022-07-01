<script lang="ts">
    import Navbar from "../lib/Navbar.svelte";
</script>

<Navbar links={[{displayName: "English", href: "/en"}, {displayName: "Deutsch", href: "/de"}]}/>
<slot />