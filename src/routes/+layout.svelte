<script lang="ts">
	import MainHeader from '../lib/components/MainHeader.svelte';

	import DarkmodeButton from '../lib/components/DarkmodeButton.svelte';
	import IconLink from '$lib/components/IconLink.svelte';
	import GitIcon from '$lib/components/svg/GitIcon.svelte';
	import Logo from '$lib/components/svg/Logo.svelte';
	import ThemeInitializer from '$lib/components/ThemeInitializer.svelte';
	import { darkmode } from '$lib/stores/darkmode';
	import '../app.css';

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

<ThemeInitializer>
	<MainHeader />

	<main>
		<slot />
	</main>
</ThemeInitializer>
