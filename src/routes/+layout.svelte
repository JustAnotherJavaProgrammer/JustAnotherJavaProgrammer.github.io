<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar links={[{displayName: "English", href: "/en"}, {displayName: "Deutsch", href: "/de"}]}/>
<slot />