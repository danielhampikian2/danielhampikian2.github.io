<script lang="ts">

	import { MoveLeftIcon, MoveRightIcon } from 'lucide-svelte';
	import { testimonialData } from '$lib/utilities/common';

	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
	import TestimonialCard6 from '$lib/components/widgets/TestimonialCard6.svelte';

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

<section id="testimonial">
	<div class="container">
		<div class="bg-default-100 dark:bg-default-50">
			<div
				class="bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat py-20 dark:bg-[url('../images/other/bg-lines-2-dark.png')]">
				<div class="relative">
					<div class="mx-auto mb-12 max-w-2xl text-center">
						<h2 class="text-3xl font-medium text-default-950 md:text-4xl">
							Explore the feedback from our clients.
						</h2>
					</div>
					<div class="swiper testimonials relative">
						<div class="swiper-wrapper">

							{#each testimonialData as testimonial}
								<div class="swiper-slide">
									<TestimonialCard6 {testimonial} />
								</div>
							{/each}

						</div>
					</div>

					<div
						class="absolute start-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2">
						<div class="testimonials-button-prev">
							<div class="relative">
                    <span
											class="absolute -start-1.5 top-1/2 -z-10 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-primary"
										></span>
								<MoveLeftIcon class="h-10 w-10 text-default-950" />
							</div>
						</div>
					</div>
					<div
						class="absolute end-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
						<div class="testimonials-button-next">
							<div class="relative">
                    <span
											class="absolute -end-1.5 top-1/2 -z-10 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-primary"
										></span>
								<MoveRightIcon class="h-10 w-10 text-default-950" />
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

</section>