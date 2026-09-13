const http = require("http");

function check(path, label, checks) {
  return new Promise(function(resolve) {
    http.get("http://localhost:3000" + path, function(res) {
      var body = "";
      res.on("data", function(d) { body += d; });
      res.on("end", function() {
        console.log("\n=== " + label + " (HTTP " + res.statusCode + ") ===");
        if (checks) {
          checks.forEach(function(c) {
            var found = body.includes(c.str);
            var pass = c.absent ? !found : found;
            console.log("  " + (pass ? "PASS" : "FAIL") + "  " + c.label);
          });
        }
        resolve();
      });
    }).on("error", function(e) {
      console.log("ERROR: " + label + ": " + e.message);
      resolve();
    });
  });
}

async function run() {
  await check("/", "Homepage", [
    { str: "01 / 06", label: "Card 1 index" },
    { str: "02 / 06", label: "Card 2 index" },
    { str: "03 / 06", label: "Card 3 index" },
    { str: "Portfolio Pillar", label: "Portfolio Pillar absent", absent: true },
    { str: "Download Profile", label: "Download Profile CTA" },
    { str: "Explore focus area", label: "Explore focus area link" },
    { str: "aaqib-alvi-profile.pdf", label: "PDF link" },
    { str: "Toggle theme", label: "Theme toggle" },
    { str: "Global AI", label: "Card 1 content" },
    { str: "Sustainability", label: "Card 2 content" },
    { str: "EdTech", label: "Card 3 content" },
  ]);

  await check("/focus/ai-digital", "Focus: AI Digital", [
    { str: "Global AI", label: "Title content" },
    { str: "Back to Executive", label: "Back button" },
    { str: "noindex", label: "noindex meta" },
  ]);

  await check("/focus/sustainability", "Focus: Sustainability", [
    { str: "Sustainability", label: "Title content" },
    { str: "Back to Executive", label: "Back button" },
    { str: "noindex", label: "noindex meta" },
  ]);

  await check("/focus/edtech", "Focus: EdTech", [
    { str: "EdTech", label: "Title content" },
    { str: "Back to Executive", label: "Back button" },
    { str: "noindex", label: "noindex meta" },
  ]);

  await check("/", "Focus routes not in homepage HTML nav/footer", [
    { str: "href=\"/focus", label: "No direct /focus links in homepage", absent: true },
  ]);
}

run().catch(console.error);
