<script lang="ts">
	import { logoLight } from '$lib/utilities/images';
	import PasswordInput from '$lib/components/PasswordInput.svelte';
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
				<PasswordInput label="New Password" />
			</div>

			<div class="mb-4">
				<PasswordInput label="Confirm New Password" />
			</div>

			<div class="mb-6 flex flex-col justify-center gap-4">
				<a
					href="/auth/login"
					class="relative inline-flex w-full items-center justify-center rounded bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-700"
				>Reset Password</a>
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
			Back To ?
			<a href="/auth/login" class="ms-1 text-primary">
				<b>Login</b>
			</a>
		</p>
	</div>
</div>