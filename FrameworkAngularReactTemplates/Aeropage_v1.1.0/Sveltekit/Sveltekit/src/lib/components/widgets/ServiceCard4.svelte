<script lang="ts">
	import type { ServiceType } from '$lib/types/landing';

	export let service: ServiceType;
</script>

<div class="relative mx-auto h-fit w-full">
	<div class="group">
		<div
			class="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
			<div class="bg-white p-6 text-center dark:bg-default-50">
				<svelte:component this={service.icon} class="inline-block h-12 w-12 text-default-950" />
				<h2 class="mt-5 text-2xl font-medium text-default-950">
					{ service.title }
				</h2>
				<p class="mt-4 text-base">
					{ service.description }
				</p>
			</div>
		</div>
		<div class="absolute left-0 top-0 -z-10 h-full w-full bg-default-950"></div>
	</div>
</div>