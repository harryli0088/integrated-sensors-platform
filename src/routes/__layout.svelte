<script lang="ts">
  //https://kit.svelte.dev/docs#layouts
	import '../app.css';
import Blanchor from '$lib/Blanchor.svelte';
</script>

<main>
	<slot />
</main>

<footer>
  <p>Built using <Blanchor href="https://kit.svelte.dev/">Svelte Kit</Blanchor> and <Blanchor href="https://www.typescriptlang.org/">TypeScript</Blanchor></p>
  <p>Github Repo: <Blanchor href="https://github.com/harryli0088/integrated-sensors-platform">https://github.com/harryli0088/integrated-sensors-platform</Blanchor></p>
  <p>Icons provided by Font Awesome: <Blanchor href="https://fontawesome.com/license">https://fontawesome.com/license</Blanchor></p>
</footer>

<style>
  footer {
		padding: 1em;
	}
	@media only screen and (min-width: 600px) {
		footer {
			padding-left: var(--tablet-padding);
			padding-right: var(--tablet-padding);
		}
	}
	@media only screen and (min-width: 1000px) {
		footer {
			padding-left: var(--desktop-padding);
			padding-right: var(--desktop-padding);
		}
	}

	footer {
		background-color: #ddd;
	}
</style>
