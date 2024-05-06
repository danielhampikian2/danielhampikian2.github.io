<script lang="ts">
	import type { ServiceType } from '$lib/types/landing';
	import { MoveRightIcon } from 'lucide-svelte';

	export let service: ServiceType;
	export let customClass: string = '';
</script>

<div class={`group ${customClass}`}>
	<div class="flex flex-wrap items-center gap-6 p-6">
		<div>
			<svelte:component this={service.icon} class="h-14 w-14 text-default-950" />
		</div>
		<div>
			<h2 class="mb-4 text-2xl font-medium text-default-950">
				{ service.title }
			</h2>
			<p class="mb-6 text-base">
				{ service.description }
			</p>
			<a
				href={null}
				class="text-lg text-default-950">Read More
				<MoveRightIcon
					class="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
			</a>
		</div>
	</div>
</div>