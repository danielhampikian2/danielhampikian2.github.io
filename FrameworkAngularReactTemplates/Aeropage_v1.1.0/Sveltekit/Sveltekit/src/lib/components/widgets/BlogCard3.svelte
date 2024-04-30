<script lang="ts">
	import type { BlogType } from '$lib/types/landing';
	import { MoveRightIcon } from 'lucide-svelte';

	export let blog: BlogType;
</script>

<div class="rounded-md border border-default-200 p-6">
	<div class="grid items-center gap-6 sm:grid-cols-5">

		<div class="col-span-2">
			<img src={blog.image} class="rounded-md my-auto h-full w-full" alt="">
		</div>

		<div class="sm:col-span-3 group">
			<h3 class="mb-4 text-2xl font-medium text-default-950">{ blog.title }</h3>
			<p class="text-sm mb-5 mt-3">{ blog.description }</p>
			<a href={null}
				 class="text-default-950 text-lg font-medium">Read More
				<MoveRightIcon
					class="group-hover:opacity-100 opacity-0 w-4 h-4 text-primary inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
			</a>
		</div>

	</div>
</div>