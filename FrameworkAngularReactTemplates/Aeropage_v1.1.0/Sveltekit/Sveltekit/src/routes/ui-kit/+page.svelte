<script lang="ts">
import AdminPageTitle from '$lib/components/layouts/AdminPageTitle.svelte';
import AnchorNavigation from '$lib/components/AnchorNavigation.svelte';
import Buttons from './components/Buttons.svelte';
import Badges from './components/Badges.svelte';
import Alerts from './components/Alerts.svelte';
import Dropdowns from './components/Dropdowns.svelte';
import Accordions from './components/Accordions.svelte';
import NavTabs from './components/NavTabs.svelte';
import Pagination from './components/Pagination.svelte';
import Modals from './components/Modals.svelte';
import Popover from './components/Popover.svelte';
import Tooltip from './components/Tooltip.svelte';

const anchorNavigationData = [
	{
		id: 'buttons',
		title: 'Buttons',
	},
	{
		id: 'badges',
		title: 'Badges',
	},
	{
		id: 'alerts',
		title: 'Alerts',
	},
	{
		id: 'dropdowns',
		title: 'Dropdowns',
	},
	{
		id: 'accordions',
		title: 'Accordions',
	},
	{
		id: 'nav-tabs',
		title: 'Nav Tabs',
	},
	{
		id: 'paginations',
		title: 'Paginations',
	},
	{
		id: 'modals',
		title: 'Modals',
	},
	{
		id: 'popover',
		title: 'Popover',
	},
	{
		id: 'tooltip',
		title: 'Tooltip',
	},
]
</script>

<AdminPageTitle title="Ui Components" subtitle="Admin" />

<section class="pb-10">
	<div class="container relative">
		<div class="grid gap-6 lg:grid-cols-4">
			<div class="lg:col-span-3">
				<div class="space-y-6">
					<Buttons />

					<Badges />

					<Alerts />

					<Dropdowns />

					<Accordions />

					<NavTabs />

					<Pagination />

					<Modals />

					<Popover />

					<Tooltip />
				</div>
			</div>

			<div class="col-span-1 hidden md:block">
				<AnchorNavigation elements={anchorNavigationData} />
			</div>
		</div>
	</div>
</section>