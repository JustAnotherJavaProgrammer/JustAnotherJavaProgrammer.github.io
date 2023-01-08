<script>
	import InfoBlob from '$lib/components/InfoBlob.svelte';
import MainHeader from '$lib/sections/MainHeader.svelte';
	import Title from '$lib/Title.svelte';
	import pagelist from './pagelist';
	import profilePic from "$lib/assets/profilePic.jpg";
import ProfilePic from '$lib/components/ProfilePic.svelte';
</script>

<Title />
<MainHeader
	{pagelist}
	taglines={[
		'Hallo Welt!',
		'Hobbyprogrammierer',
		'Erfahrung: schulischer IT-Service',
		'Motivation: 100%'
	]}
/>
<InfoBlob asidePosition="right">
	Dies ist ein Absatz in einem InfoBlob.<br>Wir testen jetzt Text. Blahblahblah. Blubb. Hier könnte Ihre Werbung stehen...
	<ProfilePic slot="aside"/>
</InfoBlob>
