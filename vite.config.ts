import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { createReadStream, existsSync } from "node:fs";

// An unapproved CV can be reviewed locally without entering public/ or dist/.
function localCvReview(): Plugin {
  return {
    name: "local-cv-review",
    transformIndexHtml(html, context) {
      return context.server
        ? html.replace(
            /\s*<meta\s+http-equiv="Content-Security-Policy"[^>]*>/,
            "",
          )
        : html;
    },
    configureServer(server) {
      install(server);
    },
    configurePreviewServer(server) {
      install(server);
    },
  };
  function install(server: {
    middlewares: {
      use: (
        fn: (
          req: { url?: string },
          res: import("node:http").ServerResponse,
          next: () => void,
        ) => void,
      ) => void;
    };
  }) {
    const path = process.env.PORTFOLIO_REVIEW_CV;
    if (!path || !existsSync(path)) return;
    server.middlewares.use((req, res, next) => {
      if (req.url?.split("?")[0] !== "/lebenslauf.pdf") return next();
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        'inline; filename="Lebenslauf_Maximilian_Gehrke.pdf"',
      );
      res.setHeader("Cache-Control", "no-store");
      createReadStream(path).pipe(res);
    });
  }
}

export default defineConfig({ base: "/", plugins: [react(), localCvReview()] });
