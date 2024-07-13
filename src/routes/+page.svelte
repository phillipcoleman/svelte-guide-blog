<script lang="ts">
	import PostListing from '$lib/components/PostListing.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="pb-6">
	<header class=" border-b dark:border-gray-700 pt-4 pb-2 mx-4 mb-4">
		<h2 class="text-3xl font-semibold">Blog Posts</h2>
	</header>

	<section class="divide-y dark:divide-gray-700">
		{#each data.posts as post}
			<PostListing {post} />
		{/each}
	</section>
</section>
