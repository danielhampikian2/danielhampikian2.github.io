<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import GLightbox from 'glightbox';

	import 'glightbox/dist/css/glightbox.min.css';

	type CustomGLightboxProps = {
		image: string;
		other?: HTMLAnchorAttributes;
	};

	let anchorRef: HTMLAnchorElement;
	export let value: CustomGLightboxProps;
	let { image, other } = value;

	let instance: any = null;
	onMount(() => {
		if (anchorRef) {
			instance = new GLightbox({ title: false });
		}
	});

	onDestroy(() => {
		instance?.destroy();
	});
</script>

<a href={image} bind:this={anchorRef} {...other} class={`glightbox ${other?.class}`}>
	<slot />

</a>