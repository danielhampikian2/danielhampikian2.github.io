<script lang="ts">
	import { logoLight } from '$lib/utilities/images';
	import PasswordInput from '$lib/components/PasswordInput.svelte';
	import SocialLink from '$lib/components/layouts/SocialLink.svelte';
	import { socialLinkData } from '$lib/utilities/layout';
	import TextInput from '$lib/components/TextInput.svelte';
	import { demoUser } from '$lib/utilities/auth.js';

	import { enhance } from '$app/forms';

	export let form;
	let email = demoUser.email;
	let password = demoUser.password;

</script>

<div class="">
	<div class="p-6">
		<a href="/" class="mb-8 block grow">
			<img
				class="h-8"
				src={logoLight}
				alt="images"
			/>
		</a>

		<form class="mt-10 shrink" method="POST" action="?/login" use:enhance={() => {
    return async ({ update }) => {
      update({ reset: false });
    }}}>

			{#if (form?.error && form?.error.length > 0)}
				<span class="mt-1 block text-red-500">{ form.error }</span>
			{/if}

			<div class="mb-4">
				<TextInput name="email" label="Email address" placeholder="Enter your email"
									 bind:value={email} />
			</div>

			<div class="mb-4">
				<PasswordInput name="password" bind:value={password} />
			</div>

			<div
				class="mb-6 flex flex-wrap items-center justify-between gap-x-1 gap-y-2">
				<div class="inline-flex items-center">
					<input
						type="checkbox"
						class="size-4 rounded border-white/20 bg-white/20 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/60 focus:ring-offset-0"
						id="checkbox-signin"
					/>
					<label
						class="ms-2 select-none align-middle text-base/none text-zinc-200"
						for="checkbox-signin"
					>Remember me</label
					>
				</div>
				<a
					href="/auth/recoverpw"
					class="border-b border-dashed text-zinc-200"
				><small>Forgot your password?</small></a
				>
			</div>

			<div class="mb-6 text-center">
				<button
					type="submit"
					class="group mt-5 inline-flex w-full items-center justify-center rounded bg-primary px-6 py-2.5 text-white backdrop-blur-2xl transition-all hover:bg-primary-700 hover:text-white"
				>
					Log In
				</button>
			</div>
		</form>

		<div class="my-6 flex shrink items-center">
			<div
				class="mt-px flex-auto border-t border-dashed border-white/20"
			></div>
			<div class="mx-4 text-zinc-100">Or</div>
			<div
				class="mt-px flex-auto border-t border-dashed border-white/20"
			></div>
		</div>

		<SocialLink title="Continue with" socialLink={socialLinkData} />

		<p class="shrink text-center text-zinc-200">
			Don't have an account ?
			<a href="/auth/register" class="ms-1 text-primary">
				<b>Register</b>
			</a>
		</p>

	</div>
</div>