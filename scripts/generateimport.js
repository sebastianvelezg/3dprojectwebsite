// const fs = require("fs");
// const path = require("path");

// const imagesDir = path.join(__dirname, "..", "src", "images", "house2");
// const outputDir = path.join(__dirname, "..", "lib");
// const outputFile = path.join(outputDir, "imageData.ts");

// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir);
// }

// fs.readdir(imagesDir, (err, files) => {
//   if (err) {
//     console.error("Failed to list images:", err);
//     return;
//   }

//   const imports = files
//     .filter((file) => /\.(jpe?g|png|svg)$/i.test(file))
//     .map(
//       (file, index) =>
//         `import image${index + 1} from '../src/images/house2/${file}';`
//     )
//     .join("\n");

//   const exports = files
//     .filter((file) => /\.(jpe?g|png|svg)$/i.test(file))
//     .map((file, index) => `image${index + 1}`)
//     .join(",\n  ");

//   const content = `${imports}\n\nexport const images = [\n  ${exports}\n];\n`;

//   fs.writeFileSync(outputFile, content);
//   console.log("Image data module created successfully!");
// });
