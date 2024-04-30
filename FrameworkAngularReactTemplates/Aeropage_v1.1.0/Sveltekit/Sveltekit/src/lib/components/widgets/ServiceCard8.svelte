<script lang="ts">
	import type { ServiceType } from '$lib/types/landing';
	import { MoveRightIcon } from 'lucide-svelte';

	export let service: ServiceType;
	export let customClass: string = '';
</script>

<div class={customClass}>
	<div
		class="group relative cursor-pointer rounded-xl border border-default-200 p-6">
		<svelte:component this={service.icon}
											class="h-10 w-10 text-default-950" />
		<h2
			class="text-default mt-5 text-2xl font-medium transition-all group-hover:text-primary">
			{ service.title }
		</h2>
		<p class="mt-3 text-base">
			{ service.description }
		</p>
		<div class="mt-5">
			<a
				href={null}
				class="text-lg font-medium text-default-900 after:absolute after:inset-0"
			>Read More
				<MoveRightIcon
					class="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
			</a>
		</div>
	</div>
</div>