<script lang="ts">
	import MoonIcon from '$lib/components/svg/MoonIcon.svelte';
	import SunIcon from '$lib/components/svg/SunIcon.svelte';
	import { darkmode } from '$lib/stores/darkmode';
	import { slide } from 'svelte/transition';

	let inTransition = {
		duration: 200,
		delay: 200
	};

	let outTransition = {
		duration: 200
	};

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

<button class="p-2 text-purple-800 dark:text-yellow-300" on:click={toggleDarkmode}>
	{#if $darkmode}
		<div in:slide={inTransition} out:slide={outTransition}>
			<SunIcon class="w-8 h-8 fill-current" />
		</div>
	{:else}
		<div in:slide={inTransition} out:slide={outTransition}>
			<MoonIcon class="w-8 h-8 fill-current" />
		</div>
	{/if}
</button>
