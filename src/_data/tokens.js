import { resolver } from "../_tokens/index.js";

const tokenSet = resolver.apply({});

const tokens = {};

for (const [id, token] of Object.entries(tokenSet)) {
    let value = token.$value;
    if (token.$type === "color") {
        value = `oklch(${token.$value.components.join(" ")})`;
    }

    // Split the dotted ID and build the nested object
    const parts = id.split(".");
    let current = tokens;
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (i === parts.length - 1) {
            current[part] = value;
        } else {
            current[part] = current[part] || {};
            current = current[part];
        }
    }
}

export default tokens;
