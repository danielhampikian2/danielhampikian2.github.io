<script lang="ts">

	import { afterNavigate } from '$app/navigation';
	import 'swiper';
	import '$lib/assets/css/style.css';
	import '$lib/assets/css/icons.css';

	import { register } from 'swiper/element/bundle';
	import { onMount } from 'svelte';
	import { currentTheme } from '$lib/stores/preference';
	import { favicon } from '$lib/utilities/images';


	onMount(() => {
		register();
	});

	onMount(() => {
		document.getElementsByTagName('html')[0].classList.add(currentTheme);
	});


	afterNavigate(() => {
		setTimeout(() => {
			window.HSStaticMethods.autoInit();
		}, 500);
		// window.HSStaticMethods.autoInit();
	});

</script>

<svelte:head>
	<title>AeroPage - Tailwind CSS Multipurpose One Page Landing Template</title>
	<meta name="description"
				content="Tailwind CSS Saas & Software Landing Page Template, Portfolio, business, clean, modern, multipurpose, tailwind css." />
	<meta name="author" content="coderthemes" />

	<link rel="shortcut icon" href={favicon} />
</svelte:head>

<slot />