<script lang="ts">
	import { logoLight } from '$lib/utilities/images';
	import PasswordInput from '$lib/components/PasswordInput.svelte';
	import SocialLink from '$lib/components/layouts/SocialLink.svelte';
	import { socialLinkData } from '$lib/utilities/layout';
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

		<form class="mt-10 shrink">
			<div class="mb-4">
				<label
					for="LogInFullName"
					class="mb-2 block text-base/normal font-semibold text-zinc-200"
				>Full Name</label
				>
				<input
					class="block w-full rounded border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
					type="text"
					id="LogInFullName"
					placeholder="Enter your Full Name"
				/>
				<span class="mt-1 block text-red-500"></span>
			</div>

			<div class="mb-4">
				<label
					for="LogInEmailAddress"
					class="mb-2 block text-base/normal font-semibold text-zinc-200"
				>Email address</label
				>
				<input
					class="block w-full rounded border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
					type="email"
					id="LogInEmailAddress"
					placeholder="Enter your email"
				/>
			</div>

			<div class="mb-4">
				<PasswordInput />
			</div>

			<div
				class="mb-6 flex flex-wrap items-center justify-between gap-x-1 gap-y-2"
			>
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
			</div>

			<div class="mb-6 text-center">
				<button
					class="group mt-5 inline-flex w-full items-center justify-center rounded bg-primary px-6 py-2.5 text-white backdrop-blur-2xl transition-all hover:bg-primary-700 hover:text-white"
					type="submit"
				>Register
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
			Already have an account ?
			<a href="/auth/login"
				 class="ms-1 text-primary">
				<b>Login</b>
			</a>
		</p>
	</div>
</div>