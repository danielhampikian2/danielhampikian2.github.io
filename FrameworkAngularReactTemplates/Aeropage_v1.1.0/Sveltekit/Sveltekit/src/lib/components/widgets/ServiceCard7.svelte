<script lang="ts">
	import type { ServiceType } from '$lib/types/landing';

	export let service: ServiceType;
	export let variant: string = 'primary';
</script>


<div
	class={`rounded-xl border border-default-200 p-6 text-center transition-all duration-500 hover:border-${variant}/20 hover:bg-${variant}/5`}>
	<div
		class={`mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-${variant}/40 bg-${variant}/20 text-${variant}`}>
		<svelte:component this={service.icon} class="mx-auto h-10 w-10" />
	</div>

	<h2 class="mt-4 text-3xl font-medium text-default-950">
		{ service.title }
	</h2>
	<p class="mt-3 text-base">
		{ service.description }
	</p>
</div>