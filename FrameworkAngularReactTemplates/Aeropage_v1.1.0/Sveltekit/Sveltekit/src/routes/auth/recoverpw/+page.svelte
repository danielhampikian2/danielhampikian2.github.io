<script lang="ts">
	import { logoLight } from '$lib/utilities/images';
	import SocialLink from '$lib/components/layouts/SocialLink.svelte';
	import { socialLinkData } from '$lib/utilities/layout';
</script>

<div class="h-full">
	<div class="flex h-full flex-col p-6">
		<a href="/" class="mb-8 block grow">
			<img
				class="h-8"
				src={logoLight}
				alt="images"
			/>
		</a>

		<form class="mt-10 shrink">
			<div class="mb-4">
				<label
					for="LogInEmailAddress"
					class="mb-2 block text-base/normal font-semibold text-gray-200"
				>Email address</label
				>
				<input
					class="block w-full rounded border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
					type="email"
					id="LogInEmailAddress"
					placeholder="Enter your email"
					value="user@demo.com"
				/>
			</div>

			<div class="mb-6 flex flex-col justify-center gap-4">
				<a
					href="/auth/reset-password"
					class="relative inline-flex w-full items-center justify-center rounded bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-700"
				>Forgot Password</a>
				<a
					href="/auth/login"
					class="relative inline-flex w-full items-center justify-center rounded border border-primary px-6 py-3 text-base capitalize text-primary transition-all hover:bg-primary hover:text-white"
				>Go to Login</a>
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
			Already have an account ?
			<a href="/auth/login" class="ms-1 text-primary">
				<b>Login</b>
			</a>
		</p>
	</div>
</div>