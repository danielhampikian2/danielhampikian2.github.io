<script lang="ts">
	import { MoveRightIcon } from 'lucide-svelte';
</script>

<section
	class="py-10 lg:py-20 bg-default-100 dark:bg-default-50 bg-no-repeat bg-cover bg-[url('../images/other/bg-lines-2.png')] dark:bg-[url('../images/other/bg-lines-2-dark.png')]">
	<div class="container">
		<div class="grid xl:grid-cols-2 grid-cols-1 gap-6 items-center">
			<div>
				<h2 class="md:text-4xl text-3xl font-medium text-default-950">Assisting you in securing a competitive
					advantage</h2>
				<p class="text-default-600 text-base font-medium my-5">Placerat nunc amet sapien neque, purus cras. Elementum
					viverra egestas fames ornare sed arcu. Consectetur cras vitae orci.</p>
				<a href={null}
					 class="inline-flex items-center justify-center h-10 px-4 bg-primary/20 text-primary rounded-md hover:bg-primary hover:text-white transition-all">
					<MoveRightIcon class="h-6 w-6" />
				</a>
			</div>

			<div class="p-8 rounded-lg">
				<div class="p-6 rounded-md bg-white dark:bg-default-100">
					<h3 class="text-2xl font-medium text-default-950">Feel free to get in touch with us!</h3>
					<p class="text-base mt-3">Placerat nunc amet sapien neque, purus cras. Elementum viverra egestas
						fames ornare sed arcu.</p>

					<form class="space-y-4 mt-6">
						<div>
							<label for="name" class="text-base font-medium inline-block mb-2 text-default-950">Name</label>
							<input type="text" id="name"
										 class="py-4 ps-4  w-full h-12 text-default-950 rounded border-default-200 focus:ring-0 focus:border-default-200 dark:bg-default-50"
										 placeholder="Your Name" name="name">
						</div>
						<div>
							<label for="email" class="text-base font-medium inline-block mb-2 text-default-950">Email</label>
							<input type="email" id="email"
										 class="py-4 ps-4  w-full h-12 text-default-950 rounded border-default-200 focus:ring-0 focus:border-default-200 dark:bg-default-50"
										 placeholder="Type Your email" name="email">
						</div>
						<div>
							<label for="subject" class="text-base font-medium inline-block mb-2 text-default-950">Subject</label>
							<input type="text" id="subject"
										 class="py-4 ps-4  w-full h-12 text-default-950 rounded border-default-200 focus:ring-0 focus:border-default-200 dark:bg-default-50"
										 placeholder="Your message subject" name="subject">
						</div>
						<button class="px-6 py-2 text-lg rounded text-white bg-black">Send</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>