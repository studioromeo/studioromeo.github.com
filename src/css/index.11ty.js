import * as sass from "sass";
import path from "path";
import fs from "node:fs/promises";

export default class {
    async data() {
        const sourcePath = path.join(
            import.meta.dirname,
            "..",
            "scss/main.scss",
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
            // Read the tokens.css
            const tokensPath = path.join(import.meta.dirname, "tokens.css");
            const tokensCss = await fs.readFile(tokensPath, "utf-8");

            const sassCss = await this.compileSass(entryFile);

            return tokensCss + "\n" + sassCss;
        } catch (error) {
            throw error;
        }
    }
}
