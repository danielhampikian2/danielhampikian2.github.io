<script lang="ts">
	import type { SocialLinkType } from '$lib/types/layout';

	export let title: string;
	export let socialLink: SocialLinkType[];
</script>

<div class="mb-6 shrink text-center">
	<p class="mb-6 text-xl text-white">{title}</p>
	<ul class="flex flex-wrap items-center justify-center gap-2">
		{#each socialLink as link}
			<li>
				<a
					href={link.path}
					class="group inline-flex size-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-blue-500"
				>
					<svelte:component this={link.icon} class="h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white"/>
				</a>
			</li>
		{/each}
	</ul>
</div>