import fs from "fs";
import slugify from "slugify";
import { exec } from "child_process";
const title = process.argv.slice(2).join(" ");

if (!title) {
    console.log("Please provide a title");
    process.exit(1);
}

const date = new Date().toISOString().split("T")[0];
const slug = slugify(title, { lower: true, strict: true });
const fileName = `src/posts/${date}-${slug}.md`;

const template = `---
title: "${title}"
summary:
tags:
    -
---
`;

fs.writeFileSync(fileName, template);
console.log(`Created ${fileName}`);

// Open the file in vscode
exec(`code ${fileName}`);
