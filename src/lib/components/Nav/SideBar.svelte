<script lang="ts">
	import type { IconSource } from 'svelte-hero-icons';
	import { Bookmark, CalendarDays, BookOpen, Icon } from 'svelte-hero-icons';

	export let menus: { name: string; href: string; icon: IconSource }[] = [
		{
			name: 'catalog',
			href: '/catalog',
			icon: BookOpen
		},
		{
			name: 'card',
			href: '/daily-card',
			icon: CalendarDays
		},
		{
			name: 'leaderboard',
			href: '/leaderboard',
			icon: Bookmark
		}
	];
</script>

<nav class="flex fixed top-10 left-1/2 -translate-x-1/2 gap-10 z-50">
	{#each menus as menu}
		<a
			href={menu.href}
			class="bg-white rounded-full p-3 shadow-lg hover:bg-white/70 hover:translate-y-1 hover:shadow-md"
		>
			<Icon src={menu.icon} class="w-5" />
		</a>
	{/each}
</nav>
