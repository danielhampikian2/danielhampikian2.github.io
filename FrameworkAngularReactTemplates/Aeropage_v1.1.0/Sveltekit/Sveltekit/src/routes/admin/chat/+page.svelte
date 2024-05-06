<script lang="ts">
	import AdminPageTitle from '$lib/components/layouts/AdminPageTitle.svelte';
	import ContactList from './ContactList.svelte';
	import Chat from './Chat.svelte';
</script>

<AdminPageTitle title="Chat" subtitle="Admin" />

<section>
	<div class="container">
		<div class="my-6 space-y-6">
			<div class="grid gap-4 lg:grid-cols-3">
				<div class="lg:col-span-1">
					<ContactList />
				</div>

				<div class="lg:col-span-2">
					<Chat />
				</div>
			</div>
		</div>
	</div>
</section>