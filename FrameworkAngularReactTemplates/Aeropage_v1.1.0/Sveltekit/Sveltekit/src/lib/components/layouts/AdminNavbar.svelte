<script lang="ts">
	import {
		AlertOctagonIcon,
		LayoutGridIcon,
		LogOutIcon,
		MailIcon,
		MaximizeIcon, MinimizeIcon,
		NewspaperIcon, SearchIcon,
		SettingsIcon, ShieldHalfIcon,
		UserIcon
	} from 'lucide-svelte';
	import { behance, bitbucket, dribbble, dropbox, github, slack, logoLight, avatar1 } from '$lib/utilities/images';
	import { page } from '$app/stores';
	import { adminNavbarLinkData } from '$lib/utilities/layout';

	const menuData = [
		{
			image: github,
			title: 'GitHub'
		},
		{
			image: bitbucket,
			title: 'Bitbucket'
		},
		{
			image: dropbox,
			title: 'Dropbox'
		},
		{
			image: slack,
			title: 'Slack'
		},
		{
			image: dribbble,
			title: 'Dribbble'
		},
		{
			image: behance,
			title: 'Behance'
		}
	];

	const notificationData = [
		{
			icon: ShieldHalfIcon,
			title: 'Congratulations!',
			description: 'Your OS System successfully updated.'
		},
		{
			icon: AlertOctagonIcon,
			title: 'Check this out!',
			description: 'Please review this file.'
		},
		{
			icon: ShieldHalfIcon,
			title: 'An error occurred',
			description: 'There was a problem in your code.'
		}
	];

	$: currentRoute = $page.url.pathname;

	let fullScreenOn: boolean = false;

	const toggleFullScreen = () => {
		const document: any = window.document;
		if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {
			// current working methods
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen();
			}
			fullScreenOn = true;
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
			fullScreenOn = false;
		}
	};
</script>

<header class="sticky top-0 z-50">
	<div
		class="z-50 flex w-full flex-wrap border-b border-default-200 bg-zinc-950 py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4">
		<nav class="container flex w-full items-center justify-between gap-6">
			<div>
				<a href="/" class="block">
					<img src={logoLight} class="flex h-8" alt="images" />
				</a>
			</div>

			<div class="flex items-center gap-3">
				<div class="relative hidden lg:block">
					<SearchIcon class="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
					<input
						type="search"
						class="h-10 w-full rounded-full border-0 bg-zinc-800 pe-4 ps-11 text-zinc-300 placeholder-zinc-400 focus:ring-0 sm:text-sm"
						placeholder="Search..."
					/>
				</div>

				<!-- Fullscreen Button -->
				<div class="hidden sm:flex">
					<button
						on:click={toggleFullScreen}
						type="button"
						class="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10"
					>
						{#if (fullScreenOn)}
							<MinimizeIcon class="h-5 w-5" />
						{:else }
							<MaximizeIcon class="h-5 w-5" />
						{/if}
					</button>
				</div>

				<!-- Notification Dropdown -->
				<div class="hidden sm:flex">
					<div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
						<button
							id="hs-dropdown-with-header"
							type="button"
							class="hs-dropdown-toggle inline-flex h-9 w-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10"
						>
							<MailIcon class="h-5 w-5" />
							<span
								class="absolute -end-0 -top-0 h-4 w-4 rounded-full bg-primary text-xs font-medium text-white">2</span>
						</button>

						<div
							class="hs-dropdown-menu duration mt-2 hidden min-w-[20rem] rounded-lg border border-default-200 bg-white opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
						>
							<div class="flex items-center justify-between px-4 py-3">
								<h6 class="text-base font-semibold text-default-900">Messages</h6>
								<a href={null}
									 class="border-b border-dashed border-default-300 font-semibold text-default-800">
									<small>Clear All</small>
								</a>
							</div>

							<div
								class="h-52 overflow-y-auto border-y border-dashed border-default-200 py-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-default-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1"
							>
								{#each notificationData as item,idx}
									<a href={null}
										 class="mx-2 flex items-center rounded px-2 py-4 transition-all duration-200 hover:bg-default-100">
                    <span
											class={`inline-flex h-9 w-9 items-center justify-center rounded-full ${idx % 2 === 0 ? 'bg-primary/20 text-primary' : 'bg-teal-500/20 text-teal-500'}`}>
                      <svelte:component this={item.icon} class="h-5 w-5" />
                    </span>
										<span class="px-3">
                      <h6 class="text-sm font-semibold text-default-800">
                        { item.title }
                      </h6>
                      <p class="text-xs text-default-600">
                        { item.description }
                      </p>
                    </span>
									</a>
								{/each}
							</div>

							<a href={null} class="block px-4 py-3 text-center text-sm font-medium text-primary"> View
								All </a>
						</div>
					</div>
				</div>

				<div class="hidden sm:flex">
					<div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
						<button
							id="hs-dropdown-with-header"
							type="button"
							class="hs-dropdown-toggle inline-flex h-9 w-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10"
						>
							<LayoutGridIcon class="h-5 w-5" />
						</button>

						<div
							class="hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
						>
							<div class="grid grid-cols-3 gap-3">
								{#each menuData as item}
									<a
										class="flex flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 text-sm text-default-800 hover:bg-default-100"
										href={null}
									>
										<img src={item.image} class="h-6" alt="" />
										<span>{ item.title }</span>
									</a>
								{/each}
							</div>
						</div>
					</div>
				</div>

				<!-- Profile Dropdown -->
				<div class="flex">
					<div class="hs-dropdown relative inline-flex">
						<button
							id="hs-dropdown-with-header"
							type="button"
							class="hs-dropdown-toggle inline-flex flex-shrink-0 items-center justify-center gap-2 align-middle text-xs font-medium transition-all"
						>
							<img class="inline-block h-9 w-9 rounded-full" src={avatar1} alt="" />
							<div class="hidden text-start lg:block">
								<p class="text-sm font-bold text-white">Diane Berry</p>
								<p class="mt-1 text-xs font-semibold text-zinc-400">Admin</p>
							</div>
						</button>

						<div
							class="hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
						>
							<a
								class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100"
								href={null}>
								<UserIcon class="h-4 w-4" />
								My Profile
							</a>
							<a
								href="/"
								class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100"
							>
								<NewspaperIcon class="h-4 w-4" />
								Landing
							</a>
							<a
								class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100"
								href={null}>
								<SettingsIcon class="h-4 w-4" />
								Setting
							</a>

							<hr class="-mx-2 my-2 border-default-200" />

							<a
								href="/auth/logout"
								class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-red-400 hover:bg-red-400/10"
							>
								<LogOutIcon class="h-4 w-4" />
								Log out
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>

	<nav
		class="admin-menu border-b border-default-200 bg-white text-sm font-medium shadow-sm shadow-default-100 dark:bg-default-50">
		<div class="custom-scroll container mx-auto flex w-full snap-x items-center overflow-x-auto py-2.5">

			{#each adminNavbarLinkData as item}
				<div class="shrink-0 snap-center px-2">
					{#if (item.path)}
						<a href={item.path}
							 class={`inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold text-default-600 transition-all hover:bg-default-100 hover:text-default-800 [&.active]:bg-primary/10 [&.active]:text-primary`}
							 class:active="{currentRoute === item.path}"
						>
							<svelte:component this={item.icon} class="h-5 w-5" />
							<span>{ item.name }</span>
						</a>
					{/if}
				</div>
			{/each}

		</div>
	</nav>
</header>