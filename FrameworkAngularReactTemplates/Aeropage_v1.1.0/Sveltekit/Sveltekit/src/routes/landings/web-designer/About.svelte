<script lang="ts">
	import { DotIcon, MoveRightIcon } from 'lucide-svelte';
	import { webDesignerImg8 } from '$lib/utilities/images';
</script>

<section id="about" class="py-10 lg:py-20">
	<div class="container">
		<div class="grid items-center gap-6 lg:grid-cols-2">
			<div>
				<img src={webDesignerImg8} class="rounded-xl" alt="" />
			</div>

			<div class="p-6">
          <span
						class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
					>Our About</span
					>
				<h2 class="mt-4 text-4xl font-medium text-default-950">Why choose us</h2>
				<p class="mt-5 text-base text-default-950">
					The role of the graphic designer in the communication process is that of an encoder or interpreter of the
					message. They focus on
					interpreting, organizing, and presenting visual messages.
				</p>

				<div class="my-5 grid grid-cols-1">
					<div class="flex items-center gap-2">
						<div>
							<DotIcon class="h-9 w-9 text-primary" />
						</div>
						<h3 class="text-xl text-default-950">Business Consultancy</h3>
					</div>

					<div class="flex items-center gap-2">
						<div>
							<DotIcon class="h-9 w-9 text-primary" />
						</div>
						<h3 class="text-xl text-default-950">Art direction</h3>
					</div>

					<div class="flex items-center gap-2">
						<div>
							<DotIcon class="h-9 w-9 text-primary" />
						</div>
						<h3 class="text-xl text-default-950">Web development</h3>
					</div>
				</div>

				<a
					href={null}
					class="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-8 py-2 text-default-950 backdrop-blur-3xl transition-all hover:border-primary hover:bg-primary hover:text-white"
				>Read More
					<MoveRightIcon class="h-6 w-6" />
				</a>
			</div>
		</div>
	</div>
</section>