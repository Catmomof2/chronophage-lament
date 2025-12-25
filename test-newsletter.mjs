import { generateNewsletterHTML, generateNewsletterText } from "./dist/lib/newsletter.js";
import { january2026Newsletter } from "./dist/newsletters/2026-01-example.js";
import fs from "fs";
import path from "path";

console.log("Generating newsletter preview...\n");

// Generate HTML version
const htmlContent = generateNewsletterHTML(january2026Newsletter);
const htmlPath = path.join(process.cwd(), "newsletter-preview.html");
fs.writeFileSync(htmlPath, htmlContent);

console.log("✅ HTML newsletter generated:", htmlPath);

// Generate text version
const textContent = generateNewsletterText(january2026Newsletter);
const textPath = path.join(process.cwd(), "newsletter-preview.txt");
fs.writeFileSync(textPath, textContent);

console.log("✅ Text newsletter generated:", textPath);

console.log("\n" + "=".repeat(60));
console.log("NEWSLETTER PREVIEW (Text Version)");
console.log("=".repeat(60) + "\n");
console.log(textContent);
console.log("\n" + "=".repeat(60));
console.log("\nOpen newsletter-preview.html in a browser to see the full design!");
