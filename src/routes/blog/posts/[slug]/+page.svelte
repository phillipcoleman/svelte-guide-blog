<script lang="ts">
	import './prism.css';
	import CopyCodeInjector from '$lib/components/CopyCodeInjector.svelte';
	import PostHeader from '$lib/components/PostHeader.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { metadata, post: Post } = data;
</script>

<article>
	<PostHeader {metadata} />
	<div class="prose dark:prose-invert p-4 max-w-none">
		<CopyCodeInjector>
			<Post />
		</CopyCodeInjector>
	</div>
</article>
