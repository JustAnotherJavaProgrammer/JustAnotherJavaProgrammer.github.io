<script lang="ts">
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	if (browser) {
		goto(
			'/' +
				(navigator.languages.reduce((lang: null | undefined | string, curr) => {
					if (lang != null) return lang;
					curr = curr.toLowerCase();
					if (curr.startsWith('de')) return 'de';
					if (curr.startsWith('en')) return 'en';
				}, null) ?? 'en')
		);
	}
</script>

<svelte:head>
	<title>Lukas Drescher - Redirecting...</title>
	<!-- <meta bind:this={redirectNode} http-equiv="refresh" content="5; url=/en" /> -->
</svelte:head>

<main>
	<h1>Welcome!</h1>
	<p>If you aren't redirected automatically, please click <a href="/en">here</a>.</p>
</main>

<style>
	main {
		padding: 1em;
	}
	h1 {
		margin-top: 0;
	}
</style>
