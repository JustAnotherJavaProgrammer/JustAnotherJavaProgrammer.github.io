<script lang="ts">
    export let title: string = "A wonderful heading I forgot to replace";
	export let asidePosition: 'left' | 'right' | 'top' | 'bottom' = 'left';
</script>

<div id="outer">
	<section class={asidePosition}>
		<div id="inner">
			<h2>{title}</h2>
			<slot>Absolutely fantastic content</slot>
		</div>
		{#if $$slots.aside}
			<aside>
				<slot name="aside" />
			</aside>
		{/if}
	</section>
</div>

<style>
	section {
		display: flex;
		align-items: center;
	}

	section > * {
		padding: 1rem;
	}

	section.top {
		flex-direction: column-reverse;
	}

	section.right,
	section.left,
	section.bottom {
		flex-direction: column;
	}

	@media (min-width: 768px) and (orientation: landscape) {
        #outer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
        }

        #inner {
            max-width: 50vw;
        }

		section {
			max-width: 80vw;
			justify-content: center;
		}

		section.top {
			flex-direction: column-reverse;
		}

		section.right {
			flex-direction: row;
		}
		section.left {
			flex-direction: row-reverse;
		}

		section.bottom {
			flex-direction: column;
		}
	}
</style>
