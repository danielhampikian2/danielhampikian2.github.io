<script lang="ts">
	import { PlayIcon } from 'lucide-svelte';
	import { charityImg4 } from '$lib/utilities/images';
	import { charityImg2, charityImg5 } from '$lib/utilities/images.js';
</script>

<section id="join" class="py-10 lg:py-20">
	<div class="container">
		<div class="max-w-2xl mx-auto text-center">
        <span
					class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Starting with a Child</span>
			<h2 class="text-3xl/snug font-medium text-default-950 mt-4">Starting with a Child - Join Us.</h2>
			<p class="text-base mt-5">Children growing up in poverty encounter significant challenges education
				and healthcare, social discrimination, and isolation.</p>
		</div>

		<div class="mt-10">
			<div class="grid grid-cols-3 gap-6">
				<div class="col-span-2">
					<div class="relative h-full group">
						<img src={charityImg4} class="h-full w-full rounded-xl" alt="">

						<div class="opacity-0 group-hover:opacity-100 transition-all duration-700">
							<div class="absolute inset-0 rounded-xl bg-black/50 flex items-center justify-center h-full">
								<button
									class="relative h-20 w-20 flex items-center justify-center gap-2.5 rounded-full text-base font-medium bg-primary text-default-950 transition-all duration-300 ring-4 ring-primary/25 hover:bg-primary"
									data-hs-overlay="#watchvideomodal">
									<PlayIcon class="h-7 w-7 stroke-white fill-white" />
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="space-y-5">
					<div class="relative group">
						<img src={charityImg5} class="rounded-xl" alt="">

						<div class="opacity-0 group-hover:opacity-100 transition-all duration-700">
							<div class="absolute inset-0 rounded-xl bg-black/50 flex items-center justify-center h-full">
								<button
									class="relative h-14 w-14 flex items-center justify-center gap-2.5 rounded-full text-base font-medium bg-primary text-default-950 transition-all duration-300 ring-4 ring-primary/25 hover:bg-primary"
									data-hs-overlay="#watchvideomodal">
									<PlayIcon class="h-5 w-5 stroke-white fill-white" />
								</button>
							</div>
						</div>
					</div>

					<div class="relative group">
						<img src={charityImg2} class="rounded-xl" alt="">

						<div class="opacity-0 group-hover:opacity-100 transition-all duration-700">
							<div class="absolute inset-0 rounded-xl bg-black/50 flex items-center justify-center h-full">
								<button
									class="relative h-14 w-14 flex items-center justify-center gap-2.5 rounded-full text-base font-medium bg-primary text-default-950 transition-all duration-300 ring-4 ring-primary/25 hover:bg-primary"
									data-hs-overlay="#watchvideomodal">
									<PlayIcon class="h-5 w-5 stroke-white fill-white" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Watch Video Modal Start -->
<div id="watchvideomodal"
		 class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
	<div
		class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
		<div class="w-full flex flex-col pointer-events-auto rounded-xl overflow-x-hidden">
			<iframe class="w-full" height="400" src="https://www.youtube.com/embed/NbR-wVOpJwA?si=OlR2e-UItbGilVlu"
							title="YouTube video player" frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen></iframe>
		</div>
	</div>
</div>