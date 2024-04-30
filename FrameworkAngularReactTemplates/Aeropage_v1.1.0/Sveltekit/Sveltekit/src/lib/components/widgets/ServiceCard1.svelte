<script lang="ts">
	import { MoveRightIcon } from 'lucide-svelte';
	import type { ServiceType } from '$lib/types/landing';

	export let service: ServiceType;
	export let customClass = '';
</script>

<div class={`group ${customClass}`}>
	<div class="sm:p-10 p-8">
      <span>
        <svelte:component this={service?.icon} class="h-14 w-14 text-default-950" />
      </span>
		<h2 class="text-2xl text-default-950 font-medium mb-4 mt-8">{ service.title }</h2>
		<p class="text-base mb-6">{ service.description }</p>
		<a href={null} class="text-default-950 text-lg">Read More
			<MoveRightIcon
				class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
		</a>
	</div>
</div>