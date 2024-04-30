<script lang="ts">
	import { CheckCircle2Icon } from 'lucide-svelte';
</script>

<section class="relative h-full py-56">
	<div class="container">
		<div
			class="absolute inset-0 bg-[url('../images/landing/marketing-2/img-10.jpg')] bg-cover bg-no-repeat">
			<div class="absolute inset-0 h-full w-full bg-black/60"></div>
		</div>

		<div class="relative">
			<div class="grid gap-6 lg:grid-cols-2">
				<div>
					<h2 class="mb-4 text-4xl font-medium text-white">
						Marketing Boost for Your Business
					</h2>
					<p class="mb-10 text-lg text-zinc-300">
						The marketing audit is typically carried out by a third party,
						not an internal member of the organization.
					</p>
					<a href={null}
						 class="rounded-md bg-primary px-6 py-3 text-sm text-white transition-all hover:bg-primary-700">Get a
						Consultation</a>

					<div class="mt-10 grid gap-5 md:grid-cols-2">
						<div class="flex items-center gap-4">
							<CheckCircle2Icon class="h-6 w-6 text-primary" />
							<p class="text-base text-zinc-300">Business-to-Business</p>
						</div>

						<div class="flex items-center gap-4">
							<CheckCircle2Icon class="h-6 w-6 text-primary" />
							<p class="text-base text-zinc-300">Business-to-Customer</p>
						</div>

						<div class="flex items-center gap-4">
							<CheckCircle2Icon class="h-6 w-6 text-primary" />
							<p class="text-base text-zinc-300">Nonprofit Organization</p>
						</div>

						<div class="flex items-center gap-4">
							<CheckCircle2Icon class="h-6 w-6 text-primary" />
							<p class="text-base text-zinc-300">Ecommerce</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>