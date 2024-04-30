<script lang="ts">
	import Footer from '$lib/components/layouts/Footer.svelte';
	import BackToTop from '$lib/components/layouts/BackToTop.svelte';

	import { browser } from '$app/environment';

</script>

<slot />

<Footer />

{#if (browser)}
	<BackToTop />
{/if}