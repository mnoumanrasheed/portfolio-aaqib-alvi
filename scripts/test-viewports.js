const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const browserPaths = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
];

const browser = browserPaths.find((p) => fs.existsSync(p));
if (!browser) {
  console.error("No browser executable found!");
  process.exit(1);
}

const outDir = "C:\\Users\\mnoum\\.gemini\\antigravity-ide\\brain\\cedfd6ae-1c49-4c5e-9cfb-2025cb519494";

const viewports = [
  { name: "1366x768", width: 1366, height: 768 },
  { name: "1440x900", width: 1440, height: 900 },
  { name: "1024x768", width: 1024, height: 768 },
  { name: "375x812", width: 375, height: 812 },
];

for (const vp of viewports) {
  const outFile = path.join(outDir, `test_${vp.name}.png`);
  const cmd = `"${browser}" --headless --disable-gpu --window-size=${vp.width},${vp.height} --virtual-time-budget=6000 --screenshot="${outFile}" http://localhost:3000`;
  console.log(`Capturing ${vp.name}...`);
  try {
    execSync(cmd, { stdio: "ignore" });
    if (fs.existsSync(outFile)) {
      console.log(`Saved ${outFile}, size: ${fs.statSync(outFile).size}`);
    }
  } catch (err) {
    console.error(`Error on ${vp.name}:`, err.message);
  }
}
