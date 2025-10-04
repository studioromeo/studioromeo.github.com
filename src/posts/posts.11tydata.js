export default {
    layout: "article",
    tags: ["post"],
    permalink: "{{ page.fileSlug }}/index.html",

    eleventyComputed: {
        title: (data) => {
            // 1. Check if the title is already set in the Front Matter.
            if (data.title) {
                return data.title;
            }

            // 2. If it is NOT set, use the page.fileSlug property.
            // page.fileSlug is the URL-friendly part of the filename (e.g., 'my-new-post').
            if (data.page.fileSlug) {
                // 3. Convert the slug to a readable title (e.g., "my-new-post" -> "My New Post")
                let slug = data.page.fileSlug;
                return slug
                    .replace(/-/g, " ") // Replace hyphens with spaces
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
                    .join(" ");
            }

            return "";
        },

        summary: (data) => {
            if (data.summary) {
                return data.summary;
            }

            if (data.page.excerpt) {
                return data.page.excerpt.substring(0, 160);
            }

            return data.site.description;
        },
    },
};
