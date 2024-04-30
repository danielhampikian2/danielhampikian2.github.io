<script lang="ts">
	import { onMount } from 'svelte';
	import gumshoeMin from 'gumshoejs';

	type ElementType = {
		id: string
		title: string
	}

	export let elements: ElementType[];

	function initgumshoes() {
		if (document.querySelector('#ui-nav a')) {
			new gumshoeMin('#ui-nav a', {
				offset: 100
			});
		}
	}

	onMount(() => {
		window.addEventListener('scroll', () => {
			initgumshoes();
		});
	});
</script>

<div class="sticky top-40 rounded-lg border border-default-200 bg-white px-4 py-6 dark:bg-default-50">
	<ul class="sidebar-nav mb-0 flex flex-col gap-1 py-0" id="ui-nav">
		{#each elements as item}
			<li class="group p-0">
				<a href={`#${item.id}`}
					 class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-1 text-base text-default-900 transition-all duration-500 hover:text-primary group-[.active]:border-primary/20 group-[.active]:bg-primary/5 group-[.active]:text-primary"
				>{ item.title }</a
				>
			</li>
		{/each}
	</ul>
</div>