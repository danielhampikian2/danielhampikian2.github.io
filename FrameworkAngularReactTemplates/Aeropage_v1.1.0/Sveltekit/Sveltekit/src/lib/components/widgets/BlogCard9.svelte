<script lang="ts">
	import type { BlogType } from '$lib/types/landing';

	export let blog: BlogType;
</script>

<div class="overflow-hidden border border-default-200">
	<a href={null} class="group relative overflow-hidden">
		<div class="overflow-hidden">
			<img
				src={blog.image}
				class="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1]"
				alt=""
			/>
		</div>
		<div class="p-6">
			<p class="text-lg text-primary">
				{ blog.category }
				<span class="ms-4 text-sm font-medium text-default-950">5-minute Read</span>
			</p>
			<h3 class="mt-1 text-2xl/snug font-medium text-default-950">
				{ blog.title }
			</h3>
			<p class="mt-4 text-sm">
				{ blog.description }
			</p>
		</div>
	</a>
</div>