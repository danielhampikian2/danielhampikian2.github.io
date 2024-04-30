<script lang="ts">
	import { EyeIcon, EyeOffIcon } from 'lucide-svelte';
	import { afterUpdate } from 'svelte';

	export let label: string = 'Password';
	export let placeholder: string = 'Enter your password';
	export let error: string = '';
	export let value: string = '';

	const handleInput = (e: any) => {
		value = e.target.value;
	};

	let showPassword: boolean = false;

	const setShowPassword = () => {
		return showPassword = !showPassword;
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

<div class="flex">
	<input
		class="form-password block w-full rounded-s border border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:ring-transparent"
		type={showPassword ? 'text' : 'password'}
		{value}
		{placeholder}
		{...$$restProps}
		on:input={handleInput}
	/>
	<button
		type="button"
		on:click={setShowPassword}
		class="-ms-px inline-flex items-center justify-center rounded-e border border-white/10 bg-transparent px-4 py-2.5"
	>
		{#if (showPassword)}
			<EyeIcon class="password-eye-on h-5 w-5 text-zinc-100" />
		{:else }
			<EyeOffIcon class="password-eye-off h-5 w-5 text-zinc-100" />
		{/if}
	</button>
</div>

{#if (error.length > 0)}
	<span class="mt-1 block text-red-500">{ error }</span>
{/if}