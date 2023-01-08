<script lang="ts">
	import MainHeader from '$lib/sections/MainHeader.svelte';
	import Title from '$lib/Title.svelte';
	import pagelist from './pagelist';
</script>

<Title />
<MainHeader
	{pagelist}
	taglines={['Hello world!', 'Hobbyist programmer', 'Work experience: school', 'Motivation: 100%']}
/>
