<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

	import { creativeImg6 } from '$lib/utilities/images';
	import TestimonialCard3 from '$lib/components/widgets/TestimonialCard3.svelte';
	import { testimonialData } from '$lib/utilities/common';

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


<section id="testimonial" class="py-10 lg:py-20">
	<div class="container">
		<div class="flex items-end justify-between mb-10">
			<div class="max-w-2xl mx-auto text-center">
          <span
						class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Testimonials</span>
				<h2 class="text-3xl font-medium capitalize text-default-950 my-4">What People Says?</h2>
			</div>
		</div>

		<div class="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
			<div class="mx-auto">
				<div class="relative z-10">
					<div
						class="absolute inset-y-0 -start-20 h-full w-full border-2 border-default-200 rounded-full -z-10 hidden sm:block"></div>
					<img src={creativeImg6} class="rounded-full" alt="">
				</div>
			</div>

			<div class="relative">
				<div class="swiper testimonials relative rounded-md">
					<div class="swiper-wrapper">

						{#each testimonialData as testimonial}
							<div class="swiper-slide">
								<TestimonialCard3 {testimonial} />
							</div>
						{/each}

					</div>
				</div>
			</div>
		</div>
	</div>
</section>