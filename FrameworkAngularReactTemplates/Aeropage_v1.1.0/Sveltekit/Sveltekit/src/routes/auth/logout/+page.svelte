<script lang="ts">
	import { logoLight, logoutImg } from '$lib/utilities/images';
</script>

<div class="h-full">
	<div class="flex h-full flex-col p-6">
		<a href="/" class="mb-8 block shrink">
			<img
				class="h-8"
				src={logoLight}
				alt=""
			/>
		</a>

		<div class="my-auto text-center">
			<h4 class="mb-4 text-2xl font-bold text-white">
				See you Again!
			</h4>
			<p class="mx-auto mb-5 max-w-sm text-default-300">
				You are now successfully sign out.
			</p>
			<div class="flex items-start justify-center">
				<img
					src={logoutImg}
					alt=""
					class="h-40"
				/>
			</div>
		</div>

		<p class="shrink text-center text-zinc-200">
			Already have an account ?
			<a href="/auth/login" class="ms-1 text-primary">
				<b>Login</b>
			</a>
		</p>
	</div>
</div>