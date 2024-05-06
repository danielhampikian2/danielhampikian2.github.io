<script lang="ts">
	import { ebookImg10, ebookImg6, ebookImg7, ebookImg8, ebookImg9 } from '$lib/utilities/images';

	const bookImages = [ebookImg6, ebookImg7, ebookImg8, ebookImg9, ebookImg10];
</script>

<section class="bg-default-100 dark:bg-default-50">
	<div class="container">
		<div class="grid lg:grid-cols-2 gap-6 items-center">
			<div>
				<h2 class="text-4xl/tight font-medium text-default-950">Elevate Your Life with Ebooks Authored by Experts</h2>
				<p class="text-base mt-4">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
					sollicitudin and urna dolor sagittis lacus. Vestibulum fringilla pede sit amet augue.</p>
				<div class="backdrop-blur-2xl bg-white rounded-md max-w-xl mt-10 dark:bg-default-100">
					<form class="w-full flex items-center justify-between">
						<input type="email" name="email" id="email"
									 class="w-full p-4 border-0 focus:outline-none focus:ring-0 text-base text-default-950 placeholder:text-default-950 bg-transparent"
									 placeholder="Enter Your Email" autocomplete="off">
						<button
							class="py-2 px-6 me-2 border-0 text-white font-semibold text-base rounded-md backdrop-blur-2xl bg-primary hover:bg-primary-700 transition-all">
							<div class="flex items-center justify-center gap-1">
								<span>Submit</span>
								<i class="fa-solid fa-arrow-right"></i>
							</div>
						</button>
					</form>
				</div>
			</div>

			<div>
				<div class="mx-auto h-[495px] overflow-hidden">
					<div class="marquee grid grid-cols-2 gap-4 lg:gap-0">
						<div class="relative gap-6 m-auto flex flex-col overflow-hidden">
							<div
								class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 h-full min-h-full">
								{#each bookImages as img}
									<img class="aspect-1 object-cover h-full w-60" src={img} alt='' />
								{/each}
							</div>

							<div aria-hidden="true"
									 class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
								{#each bookImages as img}
									<img class="aspect-1 object-cover h-full w-60" src={img} alt='' />
								{/each}
							</div>
						</div>

						<div class="marquee-reverse gap-6 m-auto flex flex-col overflow-hidden">
							<div class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
								{#each bookImages as img}
									<img class="aspect-1 object-cover h-full w-60" src={img} alt='' />
								{/each}
							</div>

							<div aria-hidden="true"
									 class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
								{#each bookImages as img}
									<img class="aspect-1 object-cover h-full w-60" src={img} alt='' />
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>