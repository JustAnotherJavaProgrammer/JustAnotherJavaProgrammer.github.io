<script lang="ts">
	export let taglines: string[] = ['Hello world!'];
	export let visibilityTime: number = 5;
	const cycleDuration = visibilityTime + 1;
	const completeDuration = cycleDuration * taglines.length;
</script>

<div style="--visibility-time: {visibilityTime}s; --complete-duration: {completeDuration}s;">
	{#each taglines as tagline, i}
		<p style="--anim-delay: {i * cycleDuration}s;">{tagline}</p>
	{/each}
</div>

<style>
	div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	p:nth-child(4n + 1) {
		color: var(--indigo);
	}
	p:nth-child(4n + 2) {
		color: var(--dark-yellow);
	}
	p:nth-child(4n + 3) {
		color: var(--red);
	}
	p:nth-child(4n) {
		color: var(--dark-green);
	}

	p {
		font-family: 'Rubik', sans-serif;
		font-size: min(3em, 7.5vmin);
		padding: 0;
		margin: 0;
		opacity: 0;
		visibility: hidden;
		position: fixed;
		max-width: 100%;
		animation-delay: 0s, var(--anim-delay), calc(var(--anim-delay) + 0.5s),
			calc(var(--visibility-time) + var(--anim-delay) + 0.5s),
			calc(var(--visibility-time) + var(--anim-delay) + 1s);
		animation-name: hide, fadeInUp, show, fadeOutUp, hide;
		animation-duration: var(--anim-delay), 0.5s, var(--visibility-time), 0.5s,
			var(--complete-duration);
	}

	p:last-of-type {
		visibility: visible;
		opacity: 1;
		animation-delay: 0s, var(--anim-delay);
		animation-name: hide, fadeInUp;
		animation-duration: var(--anim-delay), 0.5s;
		font-weight: 500;
		color: var(--dark-orange);
	}

	@keyframes fadeInUp {
		from {
			visibility: visible;
			opacity: 0;
			transform: translateY(50%);
		}
		to {
			visibility: visible;
			opacity: 100%;
			transform: translateY(0);
		}
	}

	@keyframes fadeOutUp {
		from {
			visibility: visible;
			opacity: 100%;
			transform: translateY(0);
		}
		to {
			visibility: visible;
			opacity: 0;
			transform: translateY(-50%);
		}
	}

	@keyframes show {
		from {
			visibility: visible;
			opacity: 100%;
		}
		to {
			visibility: visible;
			opacity: 100%;
		}
	}

	@keyframes hide {
		from {
			visibility: hidden;
			opacity: 0;
		}
		to {
			visibility: hidden;
			opacity: 0;
		}
	}
</style>
