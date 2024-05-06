<script lang="ts">
	import AdminPageTitle from '$lib/components/layouts/AdminPageTitle.svelte';
	import StatCardWithChart from '$lib/components/widgets/StatCardWithChart.svelte';
	import Source from './Source.svelte';
	import TopPerformer from './TopPerformer.svelte';
	import RecentOrder from './RecentOrder.svelte';

	import { EyeIcon, PartyPopperIcon } from 'lucide-svelte';
	import { revenueChartData, statData } from './data';
	import { dashboardHeroImg } from '$lib/utilities/images';

	import ApexCharts from 'apexcharts';
	import { onMount } from 'svelte';

	onMount(() => {
		const element = document.getElementById('revenue_chart');
		if (element) {
			const chart = new ApexCharts(element, revenueChartData);
			chart.render();
		}
	});
</script>

<AdminPageTitle title="Dashboard" subtitle="Admin" />

<section>
	<div class="container">
		<div class="my-6 space-y-6">
			<div class="grid gap-6 lg:grid-cols-3">
				{#each statData as stat}
					<StatCardWithChart {stat} />
				{/each}
			</div>

			<div class="grid gap-6 lg:grid-cols-2">
				<div class="overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50">
					<div class="inline-flex w-full items-center bg-green-600/10 px-4 py-3 text-sm text-green-600" role="alert">
						<PartyPopperIcon class="me-2 h-4 w-4" />
						<span>Congratulations John.</span>
					</div>
					<div class="p-5">
						<div class="grid grid-cols-4 items-center justify-between">
							<div class="col-span-3 h-full">
								<div class="flex h-full flex-col items-start">
									<div class="mb-4 grow">
										<p class="text-lg text-default-900">You have done <span class="">68%</span>😎 more sales today</p>
										<p class="text-base text-default-600">Check your new badge in your profile.</p>
									</div>
									<a
										href={null}
										class="inline-flex shrink-0 items-center justify-center rounded-full bg-primary-500 px-6 py-2 text-center text-sm text-white transition-all hover:bg-primary-600"
									>View Profile
										<EyeIcon class="ms-1 h-4 w-4" />
									</a>
								</div>
							</div>
							<div class="">
								<img src={dashboardHeroImg} alt="" class="h-full max-w-full" />
							</div>
						</div>
					</div>
				</div>

				<Source />
			</div>

			<div class="grid gap-6 lg:grid-cols-3">
				<div class="lg:col-span-2">
					<div class="rounded-md border border-default-200 bg-white dark:bg-default-50">
						<div class="border-b border-default-200 px-6 py-3">
							<h4 class="text-lg text-default-900">Revenue</h4>
						</div>
						<div class="p-5">
							<div id="revenue_chart" class="apex-charts"></div>
						</div>
					</div>
				</div>

				<TopPerformer />
			</div>

			<div class="grid grid-cols-1">
				<RecentOrder />
			</div>
		</div>
	</div>
</section>