<script lang="ts">
	import { formatPublishedAt } from '$lib/utils/dates';
	import type { PageData } from './$types';

	export let data: PageData;

	const { metadata, post: Post } = data;
</script>

<div class="p-4">
	<div class="text-5xl">
		{metadata.title}
	</div>
	<hr />
	<span>Published on {formatPublishedAt(metadata.publishedAt)} by {metadata.author}</span>
</div>

<article>
	<div class="prose dark:prose-invert p-4 max-w-none">
		<Post />
	</div>
</article>
