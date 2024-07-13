import { json, type RequestHandler } from "@sveltejs/kit";
import type {
    MarkdownPost,
    MarkdownPostMetadataAndSlug
} from "../../../types";

export const GET: RequestHandler = async () => {
    const markdownPostModules = import.meta.glob(
        "/src/posts/*"
    ) as Record<string, () => Promise<MarkdownPost>>;

    const postPromises: Promise<MarkdownPostMetadataAndSlug>[] = [];

    for (const path in markdownPostModules) {
        const loadMarkdownPostModule = markdownPostModules[path];

        const loadPostSlugAndMetadata = async function () {
            // dynamically import markdown post
            const markdownPostModule = await loadMarkdownPostModule();

            // slug is everything after last / without the file extension
            const slug = path
                .slice(path.lastIndexOf("/") + 1)
                .replace(".md", "");

            return {
                slug,
                metadata: markdownPostModule.metadata
            };
        };

        postPromises.push(loadPostSlugAndMetadata());
    }

    const posts = await Promise.all(postPromises);

    const sortedPosts = posts.sort((post1, post2) => {
        return (
            new Date(post2.metadata.publishedAt).getTime() -
            new Date(post1.metadata.publishedAt).getTime()
        );
    });

    return json(sortedPosts);
}
