<script lang="ts">
	import { MoveRightIcon } from 'lucide-svelte';
	import type { BlogType } from '$lib/types/landing';

	export let blog: BlogType;
</script>

<div class="overflow-hidden rounded-md border border-default-200">
	<div class="group">
		<img src={blog.image} alt="" />

		<div class="p-6">
			<h2 class="mb-5 text-lg font-medium text-default-950">
				{ blog.title }
			</h2>
			<a href={null}
				 class="text-lg font-medium text-default-900">Read More
				<MoveRightIcon
					class="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
				/>
			</a>
		</div>
	</div>
</div>