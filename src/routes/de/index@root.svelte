<script>
	import MainHeader from '$lib/MainHeader.svelte';
	import MainHeaderLayout from '$lib/MainHeaderLayout.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import ProfilePic from '$lib/ProfilePic.svelte';
	import Title from '$lib/Title.svelte';
	import pagelist from './pagelist';
</script>

<Title />
<MainHeader>
	<Navbar slot="navbar" links={pagelist} />
	<MainHeaderLayout>
		<ProfilePic slot="picture" />
	</MainHeaderLayout>
</MainHeader>
