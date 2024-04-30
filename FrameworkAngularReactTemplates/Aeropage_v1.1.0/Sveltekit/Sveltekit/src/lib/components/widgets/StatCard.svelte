<script lang="ts">
	import type { StatType } from '$lib/types/landing';
	export let stat: StatType;
	export let textColor: string = 'default-950';
	export let backgroundColor: string = 'white';
	export let borderColor: string = 'white';
</script>

<div class={`p-6 rounded-xl sm:text-start text-center border border-${borderColor} bg-${backgroundColor}`}>
	<div class="flex sm:justify-start justify-center flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-0">
		<div class="sm:pe-5">
			<svelte:component this={stat.icon} class={`h-10 w-10 text-default-950 mx-auto text-${textColor}`} />
		</div>

		<div class={`sm:ps-5 sm:border-s border-${borderColor}`}>
			<h2 class={`text-xl font-medium text-${textColor}`}>{ stat.title }</h2>
			<p class="text-base mt-3">{ stat.description }</p>
		</div>
	</div>
</div>