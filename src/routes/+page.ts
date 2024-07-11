import type { MarkdownPostMetadataAndSlug } from "../types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch("/api/posts");

    const posts: MarkdownPostMetadataAndSlug[] =
        await response.json();

    return {
        posts
    };
};