<script lang="ts">
	import { ChevronUpIcon } from 'lucide-svelte';
	import { agencyImg11, agencyImg12 } from '$lib/utilities/images';
	import { faqData } from '$lib/utilities/common';
</script>

<section id="faq" class="py-20">
	<div class="container">
		<div class="flex items-end justify-between mb-10">
			<div class="max-w-2xl mx-auto text-center">
            <span
							class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Our FAQ</span>
				<h2 class="text-3xl font-medium capitalize text-default-950 my-4">Frequently Asked Questions ?</h2>
			</div>
		</div>

		<div class="relative">
			<div class="hidden lg:block">
				<div
					class="before:w-24 before:h-24 before:absolute before:-top-10 before:-start-10 before:-z-10 before:rotate-180 before:bg-[url('../images/landing/agency/dot.svg')] after:w-24 after:h-24 after:absolute after:-bottom-10 after:-end-10 after:-z-10 after:bg-[url('../images/landing/agency/dot.svg')]"></div>
			</div>

			<div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8 items-center">
				<div class="lg:pb-20">

					<div class="hs-accordion-group space-y-4">

						{#each faqData as faq,idx}
							<div
								class={`hs-accordion border border-default-200 bg-default-50  rounded-lg overflow-hidden ${ idx===0 ? 'active' :''}`}
								id={`faq-${idx}`}>
								<button
									class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-default-950 transition-all"
									aria-controls={`faq-accordion-${idx}`}>
									<h5 class="text-base font-medium flex">
										{ faq.question }
									</h5>
									<ChevronUpIcon class="h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180" />
								</button>
								<div id={`faq-accordion-${idx}`}
										 class={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${idx!==0 ? 'hidden' :''}`}
										 aria-labelledby={`faq-${idx}`}>
									<div class="px-6 pb-4 pt-0">
										<p class="text-sm">{ faq.answer }</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div>
					<div class="-z-10 relative">
						<img src={agencyImg11} class="lg:h-72 h-full rounded-md" alt="">
					</div>
					<div class="-mt-28 xl:block hidden text-end">
						<div class="inline-block bg-default-100 dark:bg-default-50 p-2 rounded-md ms-auto text-end">
							<img src={agencyImg12} class="ms-auto rounded" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>