<script lang="ts">
	import { MoonIcon, SunIcon, ChevronUpIcon } from 'lucide-svelte';
	import { preferences, currentTheme } from '$lib/stores/preference';
	import { onMount } from 'svelte';

	let isButtonVisible: boolean = false;

	const toggleTheme = () => {

		const newTheme: 'light' | 'dark' = (currentTheme === 'light') ? 'dark' : 'light';
		preferences.set({ theme: newTheme });

		const html = document.getElementsByTagName('html')[0];
		if (newTheme == 'light') {
			html.classList.remove('dark');
		} else {
			html.classList.add('dark');
		}
	};

	const backToTop = (e: Event) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	onMount(() => {
		window.addEventListener('scroll', () => {
			isButtonVisible = window.scrollY > 72;
		});
	});
</script>

<div class="fixed bottom-5 end-5 z-40 flex flex-col items-center gap-1">
	<!-- Back to Top -->
	<button
		class={`z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary shadow-[inset_0px_0px_12px_0px] shadow-primary/40 backdrop-blur-3xl transition-all duration-500 ${!isButtonVisible ? 'translate-x-16':''}`}
		on:click={backToTop}
	>
		<ChevronUpIcon class="h-4 w-4" />
	</button>

	<!-- Light/Dark Toggle -->
	<button class="z-20 rounded-lg bg-primary text-white" on:click={toggleTheme}>
		{#if (currentTheme === 'light')}
    <span class="flex h-9 w-9 items-center justify-center" id="light-theme">
      <MoonIcon class="h-5 w-5" />
    </span>
		{/if}
		{#if (currentTheme === 'dark')}
		<span class="flex h-9 w-9 items-center justify-center" id="dark-theme">
       <SunIcon class="h-5 w-5" />
    </span>
		{/if}
	</button>
</div>