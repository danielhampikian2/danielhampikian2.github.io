<script lang="ts">
import { charityImg11 } from '$lib/utilities/images';
</script>

<section id="contact" class="py-10 lg:py-20">
	<div class="container">
		<div class="relative z-20">
			<div class="hidden xl:block">
				<div
					class="before:w-24 before:h-24 before:absolute before:-top-10 before:-end-10 before:-z-10 before:bg-[url('../images/other/dot.svg')]"></div>
				<div
					class="after:w-24 after:h-24 after:absolute after:-bottom-10 after:-start-10 after:-z-10 after:bg-[url('../images/other/dot.svg')]"></div>
			</div>

			<div class="grid xl:grid-cols-2 gap-6">
				<div class="relative group">
					<img src={charityImg11} class="h-full w-full rounded-xl" alt="">
					<div class="absolute inset-0 rounded-xl ">
						<div class="flex items-end justify-center h-full">
							<div class="max-w-md mx-auto text-center bg-white/10 backdrop-blur-xl p-4 m-6 rounded-xl">
								<h2 class="text-4xl/snug font-medium text-white">Would you like to support our mission?</h2>
								<p class="text-base text-white/80 mt-5">Complete the form and become a part of our
									community.</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div class="p-8 rounded-md bg-default-100 dark:bg-default-50">
						<form class="relative">
							<h2 class="text-2xl font-medium text-default-950">Join Us Today!</h2>
							<div class="space-y-6 my-6">
								<div>
									<input type="text"
												 class="py-3 px-4 block w-full text-base rounded-full text-default-950 border-default-200 dark:bg-default-50 focus:border-default-300 focus:ring-transparent"
												 id="formFirstName" placeholder="Your first name..." required>
								</div>

								<div>
									<input type="email"
												 class="py-3 px-4 block w-full text-base rounded-full text-default-950 border-default-200 dark:bg-default-50 focus:border-default-300 focus:ring-transparent"
												 id="formEmail" placeholder="Your email..." required>
								</div>

								<div>
									<input type="text"
												 class="py-3 px-4 block w-full text-base rounded-full text-default-950 border-default-200 dark:bg-default-50 focus:border-default-300 focus:ring-transparent"
												 id="formSubject" placeholder="Studying Class" required>
								</div>

								<div>
									<input type="text"
												 class="py-3 px-4 block w-full text-base rounded-full text-default-950 border-default-200 dark:bg-default-50 focus:border-default-300 focus:ring-transparent"
												 id="formSubject" placeholder="Type Your Requirements" required>
								</div>
							</div>

							<button type="submit"
											class="py-3 w-full flex items-center justify-center rounded-full text-base text-white bg-primary hover:bg-primary-700 transition-all">
								Submit Now
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>