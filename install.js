import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function install() {
  const projectRoot = process.cwd();
  const targetDir = path.join(projectRoot, ".agile-ai-agent");

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  // copy system.md
  fs.copyFileSync(
    path.join(__dirname, "system.md"),
    path.join(targetDir, "system.md")
  );

  // copy triggers.json
  fs.copyFileSync(
    path.join(__dirname, "triggers.json"),
    path.join(targetDir, "triggers.json")
  );

  // copy agents folder
  const agentsDest = path.join(targetDir, "agents");
  if (!fs.existsSync(agentsDest)) fs.mkdirSync(agentsDest);

  const agentsSrc = path.join(__dirname, "agents");
  fs.readdirSync(agentsSrc).forEach(file => {
    fs.copyFileSync(
      path.join(agentsSrc, file),
      path.join(agentsDest, file)
    );
  });

  // copy cursor.json (optional)
  const cursorSrc = path.join(__dirname, "cursor.json");
  if (fs.existsSync(cursorSrc)) {
    fs.copyFileSync(
      cursorSrc,
      path.join(projectRoot, "cursor.json")
    );
  }

  console.log("✅ Agile AI Agent installed successfully!");
}
