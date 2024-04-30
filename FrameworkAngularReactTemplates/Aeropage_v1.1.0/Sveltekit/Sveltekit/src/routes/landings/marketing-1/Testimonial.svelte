<script lang="ts">
	import { marketing1Img11 } from '$lib/utilities/images';
	import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-svelte';
	import { testimonialData } from '$lib/utilities/common';

	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
	import TestimonialCard1 from '$lib/components/widgets/TestimonialCard1.svelte';

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
		<div class="mb-10 flex items-end justify-between">
			<div class="mx-auto max-w-2xl text-center">
          <span
						class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">Testimonials</span>
				<h2 class="my-4 text-3xl font-medium capitalize text-default-950">
					What People Says?
				</h2>
			</div>
		</div>

		<div class="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
			<div class="relative">

				<div class="swiper testimonials relative rounded-md">
					<div class="swiper-wrapper">

						{#each testimonialData as testimonial}
							<div class="swiper-slide">
								<TestimonialCard1 {testimonial} />
							</div>
						{/each}

					</div>
				</div>

				<div class="z-10 hidden pt-6 md:block">
					<div class="relative flex items-center justify-end gap-5 pe-10">
						<div class="testimonials-button-prev">
							<div
								class="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white hover:bg-primary">
								<ArrowLeftIcon class="h-7 w-7" />
							</div>
						</div>
						<div class="testimonials-button-next">
							<div
								class="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white hover:bg-primary">
								<ArrowRightIcon class="h-7 w-7" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="me-0 lg:mx-auto">
				<div class="relative z-10">
					<div
						class="absolute inset-y-0 -start-20 -z-10 hidden h-full w-full rounded-full border-2 border-primary/10 bg-primary/5 lg:block"></div>
					<img src={marketing1Img11} class="mx-auto rounded-full" alt="" />
				</div>
			</div>
		</div>
	</div>
</section>