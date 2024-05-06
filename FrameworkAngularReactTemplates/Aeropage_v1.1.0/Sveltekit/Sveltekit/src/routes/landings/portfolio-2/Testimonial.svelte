<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-svelte';
	import { portfolio2Img1 } from '$lib/utilities/images';

	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
	import { testimonialData } from '$lib/utilities/common';
	import TestimonialCard4 from '$lib/components/widgets/TestimonialCard4.svelte';

	onMount(() => {
		new Swiper('.testimonials', {
			modules: [Thumbs, FreeMode, Navigation],
			loop: true,
			navigation: {
				nextEl: '.testimonials-button-next',
				prevEl: '.testimonials-button-prev'
			},
			pagination: {
				clickable: true,
				el: '.swiper-pagination'
			}
		});
	});
</script>

<section id="testimonials" class="py-10 lg:py-20">
	<div class="container">
		<div class="mb-10 flex items-end justify-between">
			<div class="mx-auto max-w-2xl text-center">
            <span
							class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
						>Our Testimonials</span>
				<h2 class="mt-4 text-4xl font-medium capitalize text-default-950">
					Feedback from Our Clients
				</h2>
				<p class="mt-4 text-base">
					Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque
					laoreet, felis eros vehicula leo, at malesuada velit leo quis
					pede.
				</p>
			</div>
		</div>

		<div class="rounded-xl bg-default-100 p-6">
			<div class="grid grid-cols-1 lg:grid-cols-5">
				<div class="col-span-2">
					<div>
						<img src={portfolio2Img1} class="rounded-xl" alt="" />
					</div>
				</div>

				<div class="relative col-span-3">

					<div class="swiper testimonials relative rounded-md">
						<div class="swiper-wrapper">

							{#each testimonialData as testimonial}
								<div class="swiper-slide">
									<TestimonialCard4 {testimonial} />
								</div>
							{/each}

						</div>
					</div>
					<div
						class="relative flex items-center justify-start gap-5 py-4 pe-10 mt-5">
						<div class="testimonials-button-prev">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg border border-default-300 bg-default-50 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white">
								<ChevronLeftIcon class="h-6 w-6" />
							</div>
						</div>
						<div class="testimonials-button-next">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg border border-default-300 bg-default-50 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white">
								<ChevronRightIcon class="h-6 w-6" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>