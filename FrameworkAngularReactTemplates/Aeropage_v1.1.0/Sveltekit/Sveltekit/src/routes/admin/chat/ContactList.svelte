<script lang="ts">
	import type { UserType } from '$lib/types/admin';
	import { avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8 } from '$lib/utilities/images';

	interface ContactType extends UserType {
		lastMessage?: string;
		isTyping?: boolean;
		lastSeen: string;
		unreadMessages?: number;
	}

	const contactList: ContactType[] = [
		{
			image: avatar2,
			name: 'Brandon Smith',
			lastSeen: '4:30am',
			lastMessage: 'How are you today?',
			unreadMessages: 3
		},
		{
			image: avatar4,
			name: 'Sky Adams',
			lastSeen: '4:30am',
			lastMessage: 'We can play game Today?',
			unreadMessages: 4
		},
		{
			image: avatar5,
			name: 'John Kish',
			lastSeen: '5:30am',
			isTyping: true
		},
		{
			image: avatar7,
			name: 'Maria C',
			lastSeen: 'Thu',
			lastMessage: 'Are we going to have planning meeting today?',
			unreadMessages: 2
		},
		{
			image: avatar6,
			name: 'Rhonda D',
			lastSeen: 'Wed',
			lastMessage: 'Please check these design assets...'
		},
		{
			image: avatar3,
			name: 'Michael H',
			lastSeen: 'Tue',
			lastMessage: 'I something have awesome...'
		},
		{
			image: avatar6,
			name: 'Thomas R',
			lastSeen: 'Tue',
			lastMessage: 'You and Tony Meet Today...'
		},
		{
			image: avatar8,
			name: 'Jonsy K',
			lastSeen: 'Tue',
			lastMessage: 'Howdy?'
		},
		{
			image: avatar4,
			name: 'Ricky J',
			lastSeen: 'Mon',
			lastMessage: 'Are you interested in learning?'
		}
	];
</script>

<div class="overflow-hidden rounded-xl border border-default-200 bg-white dark:bg-default-50 lg:min-w-96">
	<div class="border-b border-default-200 px-6 py-4">
		<h6 class="text-lg font-medium text-default-900">Contacts</h6>
	</div>
	<div
		class="h-[calc(100vh-370px)] divide-y divide-default-200 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-default-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1"
	>
		{#each contactList as user}
			<div>
				<div class={`flex items-center gap-3 px-4 py-3 ${user.isTyping ? 'bg-default-100':''}`}>
					<img src={user.image} class="h-10 rounded-full" alt="" />
					<div class="w-full">
						<div class="flex justify-between">
							<h6 class="text-default-900">{ user.name }</h6>
							<small class="text-default-400">{ user.lastSeen }</small>
						</div>
						<div class="flex justify-between">
							{#if (user.isTyping)}
								<span class="font-light text-default-400">typing...</span>
							{/if}
							<span class="font-light text-default-400">
                { user.lastMessage }
              </span>
							{#if user.unreadMessages}
							<span class="">
                <span class="rounded-full bg-red-500/25 px-1 py-0.5 text-xs text-red-500">{ user.unreadMessages }</span>
              </span>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>