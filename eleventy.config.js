import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import site from "./src/_data/site.js";

export default async function (eleventyConfig) {
    eleventyConfig.addTemplateFormats("xml");

    eleventyConfig.addExtension("xml", {
        key: "liquid", // Use the 'liquid' engine for .xml files
    });

    // Watch SASS files for changes
    eleventyConfig.addWatchTarget("./src/scss/");

    // Copy images (relative to input directory 'src')
    eleventyConfig.addPassthroughCopy("src/img/assets");
    eleventyConfig.addPassthroughCopy("src/favicon*");

    // Syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight);

    // Add a group by year filter
    eleventyConfig.addFilter("groupByYear", (collection) => {
        const groupedObject = collection.reduce((acc, item) => {
            const year = item.date.getFullYear();
            if (!acc[year]) {
                acc[year] = [];
            }
            acc[year].push(item);
            return acc;
        }, {});

        // 2. Convert the object to an array of objects and sort by year descending (newest first)
        const sortedArray = Object.entries(groupedObject)
            // Sort by the year (key), descending (b[0] - a[0])
            .toSorted((a, b) => b[0] - a[0])

            // Map the result to a clean structure: [{ year: "2025", posts: [...] }, ...]
            .map(([year, posts]) => ({
                year: year,
                posts: posts,
            }));

        // Return the simple, structured, pre-sorted array
        return sortedArray;
    });

    // RSS
    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom", // or "rss", "json"
        outputPath: "/feed.xml",
        collection: {
            name: "post", // iterate over `collections.post`
            limit: 10, // 0 means no limit
        },
        metadata: {
            language: "en",
            title: site.title,
            subtitle: site.description,
            base: site.url,
            author: {
                name: site.author.name,
            },
        },
    });

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        widths: [800],
        htmlOptions: {
            imgAttributes: {
                loading: "lazy",
                decoding: "async",
            },
            fallback: "largest",
        },
    });
}

export const config = {
    dir: {
        input: "src",
        includes: "_includes",
        output: "_site",
        data: "_data",
    },
};
