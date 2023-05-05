<script>
	import SideBar from '$lib/components/Nav/SideBar.svelte';
	import { getSession, googleOAuth } from '$lib/supabase';
	import sessionStore from '$lib/stores/session';

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
		<button on:click={googleOAuth}>Pantalla de login</button>
	{/if}
{/await}
