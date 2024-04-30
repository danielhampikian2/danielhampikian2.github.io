<script lang="ts">
	import { SearchIcon } from 'lucide-svelte';
</script>

<section class="py-10 lg:py-20">
	<div class="container">
		<div class="rounded-lg shadow bg-cover bg-gradient-to-l from-primary/5 to-primary/10 via-primary/0">
			<div class="py-20 px-6 bg-no-repeat bg-cover bg-[url('../images/other/bg-lines-2.png')]">
				<div class="max-w-2xl mx-auto text-center">
					<h2 class="md:text-4xl text-3xl font-medium text-default-950 mt-5">Obtain Your Customizable Financial
						Survival Plan.</h2>
					<p class="text-base text-default-950 mt-6">Nunc egestas, augue at pellentesque laoreet, felis
						eros vehicula leo, at malesuada velit leo quis pede.</p>
					<form class="max-w-2xl mx-auto space-y-2 mt-6">
						<div class="relative">
							<input type="email" id="subcribe"
										 class="py-4 ps-4 pe-14 w-full h-12 rounded-md bg-default-50 text-default-950 border-default-200 focus:ring-0 focus:border-default-200"
										 placeholder="Type Your Email" name="email">
							<button type="submit"
											class="inline-flex items-center justify-center gap-2 px-3 absolute top-[6px] end-[6px] h-9">
								<SearchIcon class="h-6 w-6 text-default-950" />
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>