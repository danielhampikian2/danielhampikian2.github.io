<script lang="ts">
	import { MoveRightIcon } from 'lucide-svelte';
	import { charityBg3, charityBg4, charityBg5, charityImg8 } from '$lib/utilities/images';
</script>

<section id="blog" class="py-10 lg:pb-20">
	<div class="container">
		<div class="grid lg:grid-cols-2 gap-6 items-center">
			<div>
          <span
						class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">How You Can Make a Difference</span>
				<h2 class="text-4xl/snug font-medium text-default-950 mt-4">It's incredibly straightforward.</h2>
				<p class="text-base mt-5">Children growing up in poverty encounter significant challenges: hunger
					and malnutrition, restricted access to education and healthcare, social discrimination, and isolation.</p>
				<div class="mt-10">
					<a href={null}
						 class="inline-flex items-center justify-center gap-2 text-base py-2 px-8 rounded-md text-white bg-primary hover:bg-primary-700 transition-all">Read
						More
						<MoveRightIcon class="h-6 w-6" />
					</a>
				</div>
			</div>

			<div>
				<div class="choose-image relative">
					<img src={charityImg8} alt="" />

					<div class="choose-image-shape md:block hidden">
						<div class="absolute z-10 animate-[moveLeftBounce_3s_linear_infinite] left-0 top-0">
							<img src={charityBg3} alt="" />
						</div>
						<div
							class="absolute right-[-10%] -translate-y-2/4 -z-10 animate-[moveLeftBounce_3s_linear_infinite] top-2/4">
							<img src={charityBg4} alt="" />
						</div>
						<div class="absolute -z-10 animate-[moveLeftBounce_3s_linear_infinite] left-[12%] bottom-[10%]">
							<img src={charityBg5} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>