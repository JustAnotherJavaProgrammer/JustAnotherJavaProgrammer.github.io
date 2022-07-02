<script>
	import Navbar from './Navbar.svelte';
</script>

<div>
	<article>
		<slot
			><h1>Hello world!</h1>
			<p>I am still working on this page...</p></slot
		>
	</article>
	<slot name="navbar" />
</div>

<style>
    div {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
    }

    article {
        flex-grow: 1;
    }
</style>