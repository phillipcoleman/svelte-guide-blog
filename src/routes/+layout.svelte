<script lang="ts">
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
	<header
		class="fixed z-10 top-0 inset-x-0 border-b
        bg-white dark:bg-dark-background dark:border-gray-800"
	>
		<nav
			class="flex items-center justify-between max-w-5xl
        mx-auto px-4 h-24"
		>
			<a href="/">
				<Logo class="w-16 h-16 text-gray-700 dark:text-white" />
			</a>

			<div class="flex space-x-1 items-center">
				<DarkmodeButton />

				<IconLink target="_blank" href="/">
					<GitIcon class="w-8 h-8 fill-current" />
				</IconLink>
			</div>
		</nav>
	</header>

	<main>
		<slot />
	</main>
</ThemeInitializer>
