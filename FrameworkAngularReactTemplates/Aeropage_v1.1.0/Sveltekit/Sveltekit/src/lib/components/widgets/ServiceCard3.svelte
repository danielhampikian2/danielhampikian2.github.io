<script lang="ts">
	import type { ServiceType } from '$lib/types/landing';
	import { MoveRightIcon } from 'lucide-svelte';

	export let service: ServiceType;
	export let textColor: string = 'default-950';
	export let backgroundColor: string = 'default-100';
	export let darkBackgroundColor: string = 'default-50';

</script>

<div class={`text-center rounded-lg bg-${backgroundColor} dark:bg-${darkBackgroundColor}`}>
	<div class="p-6">
		<div class="flex justify-center">
			<svelte:component this={service.icon} class={`h-12 w-12 text-${textColor}`} />
		</div>
		<h3 class={`md:text-2xl text-xl font-medium mb-4 mt-6 text-${textColor}`}>{ service.title }</h3>
		<p class="md:text-base mb-4">{ service.description }</p>
		<a href={null} class={`inline-flex items-center gap-2 text-lg font-medium text-${textColor}`}>Read more
			<MoveRightIcon class="h-5 w-5" />
		</a>
	</div>
</div>