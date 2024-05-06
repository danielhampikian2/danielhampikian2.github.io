<script lang="ts">
	import type { ServiceType } from '$lib/types/landing';

	export let service: ServiceType;
	export let cardNumber: number;
</script>

<div class="border border-default-100 bg-default-50 p-6">
	<div class="flex flex-wrap gap-6 md:flex-nowrap">
		<div>
			<div
				class="flex h-14 w-14 items-center justify-center border border-primary/10 bg-primary/5">
				<svelte:component this={service.icon} class="h-10 w-10 text-primary" />
			</div>
		</div>
		<div>
			<h2 class="text-5xl font-medium text-default-950">
				{#if cardNumber < 10}
					<span>0</span>
				{/if}
				{ cardNumber }
			</h2>
			<h3 class="mt-2 text-3xl font-medium text-default-950">
				{ service.title }
			</h3>
			<p class="mt-4 text-base">
				{ service.description }
			</p>
		</div>
	</div>
</div>