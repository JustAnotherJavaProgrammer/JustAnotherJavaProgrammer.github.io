<script lang="ts">
import MainHeaderLayout from "../components/MainHeaderLayout.svelte";
import MainHeader from "../components/MainHeader.svelte";
import Navbar, { type NavItem } from "../components/Navbar.svelte";
import ProfilePic from "../components/ProfilePic.svelte";
import Taglines from "../components/Taglines.svelte";

export let pagelist : NavItem[] | undefined;
export let taglines: string[] | undefined;
</script>
<MainHeader>
	<Navbar slot="navbar" links={pagelist} />
	<MainHeaderLayout>
		<Taglines slot="slogans" {taglines}/>
		<ProfilePic slot="picture" />
	</MainHeaderLayout>
</MainHeader>