<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { metadata, post: Post } = data;
</script>

<article>
	<div class="prose dark:prose-invert p-4 max-w-none">
		<Post />
	</div>
</article>
