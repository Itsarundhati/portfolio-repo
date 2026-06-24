import { writeFileSync } from "node:fs";
import { join } from "node:path";

// TanStack Start preview loads dist/server/<entry>.js (here: server.js).
// The Cloudflare adapter emits dist/server/index.js instead — bridge the two.
const out = join("dist", "server", "server.js");
writeFileSync(out, 'export { default } from "./index.js";\n');
