<script lang="ts">
	import ApexCharts from 'apexcharts';
	import { TrendingDownIcon, TrendingUpIcon } from 'lucide-svelte';
	import type { StatType } from '$lib/types/admin';
	import { onMount } from 'svelte';

	export let stat: StatType;

	onMount(() => {
		const element = document.getElementById(stat.id);
		if (element) {
			const chart = new ApexCharts(element, stat.chartOptions);
			chart.render();
		}
	});
</script>


<div class="rounded-md border border-default-200 bg-white dark:bg-default-50">
	<div class="p-5">
		<div class="">
			<div class="flex items-center justify-between">
				<span class="text-sm font-medium text-default-600">{ stat.title }</span>
				<span class={stat.growth > 0 ? 'text-teal-500' : 'text-red-500'}>
					{#if (stat.growth > 0)}
            <TrendingUpIcon class="me-1 inline h-4 w-4" />
						{:else }
            <TrendingDownIcon class="me-1 inline h-4 w-4" />
						{/if}
					{ stat.growth }%
          </span>
			</div>
			<div class="flex items-end justify-between gap-4">
				<h3 class="text-3xl font-medium text-default-800 flex">
					<span class="inline-block">{ stat.prefix ? stat.prefix : '' }</span> { stat.numeric } <span
					class="inline-block">{ stat.postfix ? stat.postfix : '' }</span>
				</h3>
				{#if (stat.chartOptions)}
					<div id={stat.id} class="apex-charts"></div>
				{/if}
			</div>
		</div>
	</div>
</div>