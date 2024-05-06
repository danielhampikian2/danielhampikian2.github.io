<script lang="ts">
	import { MoveRightIcon } from 'lucide-svelte';
	import type { FeatureType } from '$lib/types/landing';

	export let benefit: FeatureType;
</script>

<div class="p-6 group rounded-xl drop-shadow-md bg-white dark:bg-default-50">
	<div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
		<svelte:component this={benefit?.icon} class="size-7 text-primary"></svelte:component>
	</div>
	<h2 class="text-2xl font-medium text-default-950 mt-5">{ benefit.title }</h2>
	<p class="text-base mt-3">{ benefit.description }</p>
	<div class="mt-5">
		<a href={null} class="text-default-900 text-lg font-medium">Read More
			<MoveRightIcon
				class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
		</a>
	</div>
</div>