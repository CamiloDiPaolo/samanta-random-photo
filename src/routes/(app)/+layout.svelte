<script>
	import SideBar from '$lib/components/Nav/SideBar.svelte';
	import { getSession, googleOAuth } from '$lib/supabase';
	import sessionStore from '$lib/stores/session';
	import AmazingButton from '$lib/components/Text/AmazingButton.svelte';

	const loadSession = async () => {
		const session = await getSession();

		if (!session) return null;

		sessionStore.set(session);

		return session;
	};
</script>

{#await loadSession() then session}
	{#if session}
		<SideBar />
		<slot />
	{:else}
		<AmazingButton on:click={googleOAuth}>Registrate haciendo click!</AmazingButton>
	{/if}
{/await}
