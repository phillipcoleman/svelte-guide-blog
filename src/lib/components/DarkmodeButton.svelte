<script lang="ts">
	import MoonIcon from '$lib/components/svg/MoonIcon.svelte';
	import SunIcon from '$lib/components/svg/SunIcon.svelte';
	import { darkmode } from '$lib/stores/darkmode';

	function toggleDarkmode() {
		if ($darkmode) {
			$darkmode = false;
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			$darkmode = true;
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
	}
</script>

<button
	class="p-2 rounded-lg text-purple-800 hover:bg-gray-100 dark:text-yellow-200 dark:hover:bg-gray-800"
	on:click={toggleDarkmode}
>
	{#if $darkmode}
		<SunIcon class="w-8 h-8 fill-current" />
	{:else}
		<MoonIcon class="w-8 h-8 fill-current" />
	{/if}
</button>
