<script lang="ts">
	import type { MarkdownPost } from '../../types';
	import { formatPublishedAt } from '$lib/utils/dates';

	export let metadata: MarkdownPost['metadata'];
</script>

<header class="p-4">
	{#if metadata.imageUrl}
		<div class="w-full sm:w-3/5 mb-6">
			<div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border">
				<img src={metadata.imageUrl} alt={metadata.title} class="object-cover" />
			</div>
		</div>
	{/if}

	<div>
		<h1 class="text-4xl font-bold mb-4">
			{metadata.title}
		</h1>
		<div class="py-2 border-t dark:border-gray-700 inline-block">
			<span>Published: </span>
			<time class="font-light" datetime={metadata.publishedAt}>
				{formatPublishedAt(metadata.publishedAt)}
			</time>
			<span class="font-light">by {metadata.author}</span>
		</div>
		<div>
			{metadata.readingTime.text}
		</div>
	</div>
</header>
