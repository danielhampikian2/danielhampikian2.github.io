<script lang="ts">
	import { MoveLeftIcon, MoveRightIcon } from 'lucide-svelte';
	import TestimonialCard2 from '$lib/components/widgets/TestimonialCard2.svelte';
	import { testimonialData } from '$lib/utilities/common';

	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

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

<section id="testimonials">
	<div class="container">
		<div class="bg-default-100 rounded-lg dark:bg-default-50">
			<div
				class="md:p-20 p-10 bg-no-repeat bg-cover bg-[url('../images/other/bg-lines-2.png')] dark:bg-[url('../images/other/bg-lines-2-dark.png')]">
				<div class="max-w-2xl mx-auto text-center mb-12">
            <span
							class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Our Testimonials</span>
					<h2 class="md:text-4xl text-3xl font-medium text-default-950 mt-3">Explore the feedback from our
						clients.</h2>
				</div>
				<div class="relative">

					<div class="swiper testimonials relative">
						<div class="swiper-wrapper">
							{#each testimonialData as testimonial}
								<div class="swiper-slide">
									<TestimonialCard2 {testimonial} />
								</div>
							{/each}
						</div>
					</div>

					<div class="absolute top-1/2 start-0 -translate-y-1/2 -translate-x-1/2 z-10">
						<div class="testimonials-button-prev">
							<div class="relative">
                  <span
										class="absolute -start-1.5 w-8 h-8 top-1/2 -translate-y-1/2 border-2 -z-10 rounded-full border-primary"></span>
								<MoveLeftIcon class="h-10 w-10 text-default-950" />
							</div>
						</div>
					</div>
					<div class="absolute top-1/2 end-0 -translate-y-1/2 translate-x-1/2 z-10">
						<div class="testimonials-button-next">
							<div class="relative">
                  <span
										class="absolute -end-1.5 w-8 h-8 top-1/2 -translate-y-1/2 border-2 -z-10 rounded-full border-primary"></span>
								<MoveRightIcon class="h-10 w-10 text-default-950" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>