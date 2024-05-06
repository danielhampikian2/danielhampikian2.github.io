<script>
	import LandingNavbar from '$lib/components/layouts/LandingNavbar.svelte';
	import LandingFooter from '$lib/components/layouts/LandingFooter.svelte';

	import { logoSm } from '$lib/utilities/images';

	import { EyeIcon, AirplayIcon, ExternalLinkIcon } from 'lucide-svelte';

	import { demoPages, developmentTools } from '$lib/utilities/landing';
	import BackToTop from '$lib/components/layouts/BackToTop.svelte';
</script>

<LandingNavbar />

<section
	class="bg-default-10 relative border-b border-default-100 bg-[url(../images/other/bg-lines-2.png)] py-6 dark:bg-default-50 dark:bg-[url(../images/other/bg-lines-2-dark.png)] sm:py-10 md:py-32"
	id="home"
>
	<div class="px-6 sm:px-10 md:px-20">
		<div class="grid items-center gap-x-6 gap-y-10">
			<div class="mb-10 mt-12 flex flex-col items-center justify-center">
				<div class="text-center">
					<div class="mb-4 flex items-center justify-center gap-4">
                <span class="h-10">
                  <img
										src={logoSm}
										alt="images"
										class="h-full max-w-full"
									/>
                </span>
						<span
							class="inline-block rounded-md bg-primary/10 px-4 text-base/loose font-semibold text-primary"
						>v1.0.0</span>
					</div>
					<h1
						class="mb-6 text-3xl font-semibold capitalize text-default-950 sm:text-5xl/tight"
					>
						<span class="text-primary">AeroPage</span> - One Page Template
					</h1>
					<p class="mx-auto max-w-3xl text-base text-default-700">
						The Make your website or web application perfect starting point
						for your next project and the ultimate resource for learning how
						experts build real websites with Tailwind CSS.
					</p>
				</div>

				<div class="my-16 text-center">
					<p class="text-xl font-medium text-default-900">
						Technology stack
					</p>
					<div
						class="mt-4 inline-flex flex-wrap items-center justify-center gap-3"
					>

						{#each developmentTools as tool}
							<div
								class="hs-tooltip inline-block [--placement:top] [--trigger:hover]">
								<div
									class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100">
									<img src={tool.image} alt=""
											 class="size-8" />
								</div>
								<div
									class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
									role="tooltip"
									data-popper-placement="top">
									{tool.name}
									<div
										class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
									></div>
								</div>
							</div>
						{/each}

					</div>
				</div>

				<div class="flex flex-wrap items-center gap-4">
					<a
						href="#demo"
						class="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2 font-semibold text-white backdrop-blur-2xl transition-all duration-500 hover:bg-primary-600"
					>
						Landing Demos
						<EyeIcon class="ms-3 size-5" />
					</a>
					<a
						href="#admin_demo"
						class="inline-flex items-center justify-center rounded-lg bg-primary/20 px-6 py-2 font-semibold text-primary backdrop-blur-2xl transition-all duration-500 hover:bg-primary hover:text-white"
					>
						Admin Demos
						<AirplayIcon class="ms-3 size-5" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

{#each demoPages as item}
	<section id={item.id} class="py-20">
		<div class="mx-20">
			<div class=" mx-auto text-center mb-14">
        <span
					class="inline-flex text-base border-x-2 border-x-primary-600 text-primary-700 font-semibold px-2 rounded-lg bg-primary/20 mb-2">
					{ item.tag }</span>
				<h2 class="text-3xl font-semibold text-default-950 mb-2.5">{ item.title }</h2>
				{#if (item.description)}
					<p class="text-base text-default-900">
						{item.description }
					</p>
				{/if}
			</div>


			{#if (item.pages)}
				<div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-content-center">
					{#each item.pages as page}
						<a href={page.path}>
							<div
								class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50">
								<div class="p-4">
									<div class="relative rounded-lg overflow-hidden ">
										<img alt="demo-img"
												 class="dark:hidden w-full rounded-lg border border-default-100"
												 src={page.image.light}>
										<img alt="demo-img" class="hidden dark:block w-full rounded-lg border border-default-100"
												 src={page.image.dark}>
										<div
											class="absolute inset-0 flex items-center justify-center h-full w-full bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100 cursor-pointer">
											<div
												class="py-1.5 ps-5 pe-2 inline-flex items-center justify-center font-semibold align-middle duration-500 text-base text-center bg-primary hover:bg-primary-600 text-white rounded-lg">
												Live Preview <span
												class="h-8 w-8 inline-flex items-center justify-center rounded-md bg-white border border-white text-primary ms-3">
                      <ExternalLinkIcon class="h-5 w-5" />
                     </span>
											</div>
										</div>
									</div>
									<h5 class="mt-4 text-center text-lg font-medium capitalize text-default-900">{ page.title }</h5>
								</div>
							</div>
						</a>
					{/each}
				</div>
			{/if}

			{#if (item.features)}
				<div class="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
					{#each item.features as feature}
						<div
							class="bg-white dark:bg-default-50 rounded-xl border border-default-200 hover:shadow-lg transition-all duration-300">
							<div class="p-6">
								<div class="flex flex-col justify-center items-center text-center gap-4">
									<div class="shrink">
										<div
											class="inline-flex items-center justify-center h-12 w-12 bg-primary-500/20 text-primary-600 rounded-md">
											{#if (feature.image)}
												<img src={feature.image} alt="" class="h-6 w-6">
											{:else if (feature.icon)}
												<svelte:component this={feature.icon} />
											{/if}
										</div>
									</div>
									<div class="grow">
										<h4 class="text-lg font-semibold text-default-950 mb-2">{ feature.title }</h4>
										<p class="text-sm font-medium text-default-600">{ feature.description }</p>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<p class="text-base text-center mt-6 font-medium text-primary-900">Empower Your Journey with Our Engaging
					Landing Demo.🔥</p>
			{/if}
		</div>
	</section>
{/each}

<LandingFooter />

<BackToTop />