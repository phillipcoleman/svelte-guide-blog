<script lang="ts">
	export let href: string;
	export let target: '_self' | '_blank' = '_self';
</script>

<a class="p-2 rounded-lg dark:text-white dark:hover:bg-gray-800 text-gray-700 hover:bg-gray-100" {href} {target}>
	<slot />
</a>
