import * as sass from "sass";
import path from "path";

export default class {
    async data() {
        const sourcePath = path.join(
            import.meta.dirname,
            "..",
            "scss/main.scss"
        );
        return {
            permalink: "/assets/css/main.css",
            eleventyExcludeFromCollections: true,
            entryFile: sourcePath,
        };
    }

    async compileSass(file) {
        return sass.compile(file).css.toString();
    }

    async render({ entryFile }) {
        try {
            return await this.compileSass(entryFile);
        } catch (error) {
            throw error;
        }
    }
}
