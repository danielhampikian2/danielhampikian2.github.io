<script lang="ts">
	export let marqeeItems: string[] = ['UI-UX Experience', 'Web Development', 'Digital Marketing', 'Product Design', 'Mobile Solutions'];
	export let customClass: string = '';
	export let textClass: string = '';
</script>


<div class={`relative gap-28 m-auto flex overflow-hidden border border-default-200 py-6 ${customClass}`}>
	<div class="marquee__group gap-28 flex items-center justify-around flex-shrink-0 min-w-full">
		{#each marqeeItems as item}
			<div class="py-2">
				<h2 class={`text-4xl text-default-950 ${textClass}`}>{ item }</h2>
			</div>
		{/each}
	</div>

	<div aria-hidden="true" class="marquee__group gap-28 flex items-center justify-around flex-shrink-0 min-w-full">
		{#each marqeeItems as item}
			<div class="py-2">
				<h2 class={`text-4xl text-default-950 ${textClass}`}>{ item }</h2>
			</div>
		{/each}
	</div>
</div>