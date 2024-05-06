<script lang="ts">
	import { serviceData } from '$lib/utilities/common';
	import ServiceCard1 from '$lib/components/widgets/ServiceCard1.svelte';
</script>

<section id="features" class="lg:py-20 py-10">
	<div class="container">
		<div class="flex items-end justify-between mb-10">
			<div class="max-w-2xl mx-auto text-center">
          <span
						class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Features Services</span>
				<h2 class="text-4xl font-medium capitalize text-default-950 my-4">Features</h2>
			</div>
		</div>

		<div
			class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center rounded-md overflow-hidden border border-default-200">
			{#each serviceData as service,idx}
				<ServiceCard1 {service} customClass={idx === 0?'border-default-200':'border-default-200 md:border-s'} />
			{/each}
		</div>
	</div>
</section>