<script lang="ts">
	import { afterUpdate } from 'svelte';

	export let label: string = 'Name';
	export let placeholder: string = 'Enter your name';
	export let type: string = 'text';
	export let error: string = '';
	export let value: string = '';

	const handleInput = (e: any) => {
		value = e.target.value;
	};

	afterUpdate(() => {
		if (error.length > 0) {
			setTimeout(() => {
				error = '';
			}, 3000);
		}
	});
</script>

<label class="mb-2 block text-base/normal font-semibold text-zinc-200">{ label }</label>

<input
	class="block w-full rounded border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
	{type}
	{value}
	{placeholder}
	{...$$restProps}
	on:input={handleInput}
/>

{#if (error.length > 0)}
	<span class="mt-1 block text-red-500">{ error }</span>
{/if}