<script lang="ts">
	import { MoveRightIcon } from 'lucide-svelte';
	import type { BlogType } from '$lib/types/landing';

	export let cause: BlogType;
</script>

<div class="border border-default-200 rounded-lg overflow-hidden group">
	<div class="relative group overflow-hidden">
		<div class="overflow-hidden">
			<img src={cause.image}
					 class="h-full w-full scale-[1.2] group-hover:scale-[1.05] transition-all duration-500" alt="">
		</div>
		<div class="p-6">
			<h2 class="text-xl font-medium text-default-950 group-hover:underline transition-all duration-500">
				{ cause.title }</h2>
			<p class="text-base my-4">{ cause.description }</p>
			<a href={null} class="text-default-900 text-lg font-medium">Read More
				<MoveRightIcon
					class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"></MoveRightIcon>
			</a>
		</div>
	</div>
</div>