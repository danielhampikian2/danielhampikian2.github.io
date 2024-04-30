<script lang="ts">
	import { contactData } from '$lib/utilities/common.js';
</script>

<section id="contact" class="lg:py-20 py-10">
	<div class="container">
		<div class="flex flex-wrap items-center justify-around gap-6">

			{#each contactData as item}
				<div class="text-center">
					<div
						class="h-20 w-20 rounded-md border border-default-200 text-default-950 bg-white/5 mx-auto flex items-center justify-center">
						<svelte:component this={item.icon} class="h-10 w-10" />
					</div>
					<h4 class="text-xl font-medium text-default-950 mt-5">{ item.label }</h4>
					<p class="text-base text-default-800 mt-1">{ item.detail }</p>
				</div>
			{/each}
		</div>
	</div>
</section>