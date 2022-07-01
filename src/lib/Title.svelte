<script lang="ts">
	export let title = '';
	title = title.trim();
</script>

<svelte:head>
	<title>{title != null && title.length > 0 ? title + ' - Lukas Drescher' : 'Lukas Drescher'}</title
	>
</svelte:head>
