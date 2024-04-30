<script lang="ts">
	import AdminNavbar from '$lib/components/layouts/AdminNavbar.svelte';
	import AdminFooter from '$lib/components/layouts/AdminFooter.svelte';
	import BackToTop from '$lib/components/layouts/BackToTop.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.getElementsByTagName('body')[0].classList.add('bg-default-50');
	});
</script>

<AdminNavbar />
<slot />
<AdminFooter />
<BackToTop />