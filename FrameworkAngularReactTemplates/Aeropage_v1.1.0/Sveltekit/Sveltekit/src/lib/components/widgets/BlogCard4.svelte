<script lang="ts">
	import { MoveRightIcon } from 'lucide-svelte';
	import type { BlogType } from '$lib/types/landing';

	export let blog: BlogType;
	export let titleClass: string = 'text-2xl';
	export let customClass: string = '';
</script>

<div class="{`p-6 border border-default-200 rounded-md ${customClass}`}">
	<div class="grid items-center sm:grid-cols-5 gap-6">
		<div class="sm:col-span-3 group">
			<h3 class={`font-medium text-default-950 mb-4 mt-3 ${titleClass}`}>{ blog.title }</h3>
			<p class="text-base font-medium text-default-800 mb-5 mt-3">{ blog.description }</p>
			<a href={null}
				 class="text-default-950 text-lg font-medium">Read
				More
				<MoveRightIcon
					class="group-hover:opacity-100 opacity-0 w-4 h-4 text-primary inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
			</a>
		</div>

		<div class="col-span-2">
			<img src={blog.image} class="rounded-md my-auto h-full w-full" alt="">
		</div>
	</div>
</div>