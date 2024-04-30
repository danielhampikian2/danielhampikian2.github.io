<script lang="ts">
	import type { ServiceType } from '$lib/types/landing';
	import { CameraIcon, GitForkIcon, ProjectorIcon, UserSquareIcon } from 'lucide-svelte';
	import ServiceCard6 from '$lib/components/widgets/ServiceCard6.svelte';

	const serviceData: ServiceType[] = [
		{
			icon: CameraIcon,
			title: 'Pet Portraits',
			description: 'Preserve the distinct personality and soul of your cherished pets with beautiful and heartwarming portraits.'
		},
		{
			icon: UserSquareIcon,
			title: 'Wildlife Photography',
			description: ' Embark on an exhilarating adventure into the untamed, seizing breathtaking instances of wildlife in their native environments.'
		},
		{
			icon: ProjectorIcon,
			title: 'Nature Videography',
			description: 'These videos encompass everything from awe-inspiring landscapes to intricate details of flora and fauna, showcasing the tranquility and grandeur of nature in all its splendor.'
		},
		{
			icon: GitForkIcon,
			title: 'Commercial Projects',
			description: `Highlight your brand's distinctive narrative with our tailored commercial photography services designed for the animal industry.`
		}
	];
</script>

<section id="services" class="py-10 lg:py-20">
	<div class="container">
		<div class="mb-10 flex items-end justify-between">
			<div class="mx-auto max-w-2xl text-center">
            <span
							class="border border-default-200 px-3 py-1 text-xs font-medium uppercase tracking-wider text-default-950"
						>Our Services</span>
				<h2 class="my-4 text-4xl font-medium capitalize text-default-950">
					Our Offerings
				</h2>
				<p class="text-base">
					Explore a realm of exceptional animal photography services.
				</p>
			</div>
		</div>

		<div class="grid gap-6 xl:grid-cols-2">
			{#each serviceData as service,idx}
				<ServiceCard6 cardNumber={idx+1} {service} />
			{/each}
		</div>
	</div>
</section>