<script lang="ts">
	import PostHeader from '$lib/components/PostHeader.svelte';
	import { formatPublishedAt } from '$lib/utils/dates';
	import type { PageData } from './$types';

	export let data: PageData;

	const { metadata, post: Post } = data;
</script>

<article>
	<PostHeader {metadata} />
	<div class="prose dark:prose-invert p-4 max-w-none">
		<Post />
	</div>
</article>
