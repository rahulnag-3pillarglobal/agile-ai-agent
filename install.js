// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export function install() {
//   const projectRoot = process.cwd();
//   const targetDir = path.join(projectRoot, ".agile-ai-agent");

//   if (!fs.existsSync(targetDir)) {
//     fs.mkdirSync(targetDir);
//   }

//   // copy system.md
//   fs.copyFileSync(
//     path.join(__dirname, "system.md"),
//     path.join(targetDir, "system.md")
//   );

//   // copy triggers.json
//   fs.copyFileSync(
//     path.join(__dirname, "triggers.json"),
//     path.join(targetDir, "triggers.json")
//   );

//   // copy agents folder
//   const agentsDest = path.join(targetDir, "agents");
//   if (!fs.existsSync(agentsDest)) fs.mkdirSync(agentsDest);

//   const agentsSrc = path.join(__dirname, "agents");
//   fs.readdirSync(agentsSrc).forEach(file => {
//     fs.copyFileSync(
//       path.join(agentsSrc, file),
//       path.join(agentsDest, file)
//     );
//   });

//   // copy cursor.json (optional)
//   const cursorSrc = path.join(__dirname, "cursor.json");
//   if (fs.existsSync(cursorSrc)) {
//     fs.copyFileSync(
//       cursorSrc,
//       path.join(projectRoot, "cursor.json")
//     );
//   }

//   console.log("✅ Agile AI Agent installed successfully!");
// }


import fs from "fs";
import path from "path";
import os from "os";

export function install() {
  const homeDir = os.homedir();
  const targetDir = path.join(homeDir, ".agile-ai-agent");
  const sourceDir = path.join(process.cwd(), ".agile-ai-agent");

  // If already installed → skip
  if (fs.existsSync(targetDir)) {
    console.log("✅ Agile AI Agent is already installed.");
    return;
  }

  // Copy recursively
  fs.cp(sourceDir, targetDir, { recursive: true }, (err) => {
    if (err) {
      console.error("❌ Install failed:", err);
    } else {
      console.log("✅ Agile AI Agent installed successfully!");
      console.log(`📁 Config stored in: ${targetDir}`);
      console.log("Run: npx agile-ai-agent install");
    }
  });
}
