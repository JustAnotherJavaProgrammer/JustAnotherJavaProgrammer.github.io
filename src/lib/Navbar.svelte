<script context="module" lang="ts">
	export type NavItem = {
		displayName: string;
		href: string;
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';

	let pageData = $page;
	export let links: NavItem[] = [];
</script>

<header>
	<h1>Lukas Drescher</h1>
	{#if links != null && links.length > 0}
		<nav>
			<ul>
				{#each links as link}
					<li>
						<a href={link.href} class:current={pageData.url.toString().includes(link.href)}
							>{link.displayName}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<style>
	header {
		display: block;
		position: sticky;
		border-bottom: 0.2em black solid;
		font: 600 1em Montserrat, sans-serif;
	}

	h1 {
		font-size: 1.5em;
		margin: 0.5em;
		display: inline-block;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav,
	ul > li {
		display: inline-block;
	}

	ul > li {
		margin: 0.3em;
		margin-left: 0.5em;
		margin-right: 0.5em;
	}

	a {
		text-decoration: none;
		color: black;
		padding-left: 0;
		padding-right: 0;
		padding-top: 0.2em;
		padding-bottom: 0.35em;
		background: linear-gradient(black, black) 50% calc(100% - 0.15em) / 0% 0% no-repeat;
		transition: background-size 0.3s;
	}

	a:hover,
	a.current {
		/* border-bottom: 0.15em solid black; */
		/* padding-bottom: 0.35em; */
		background-size: 100% 0.15em;
	}
</style>
