<script>
	import MainHeader from '$lib/MainHeader.svelte';
	import MainHeaderLayout from '$lib/MainHeaderLayout.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import ProfilePic from '$lib/ProfilePic.svelte';
	import Taglines from '$lib/Taglines.svelte';
	import Title from '$lib/Title.svelte';
	import pagelist from './pagelist';
</script>

<Title />
<MainHeader>
	<Navbar slot="navbar" links={pagelist} />
	<MainHeaderLayout>
		<Taglines slot="slogans" taglines={["Hello world!", "Hobbyist programmer", "Work experience: school", "Motivation: 100%"]}/>
		<ProfilePic slot="picture" />
	</MainHeaderLayout>
</MainHeader>
