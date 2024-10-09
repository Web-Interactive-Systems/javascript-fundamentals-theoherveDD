import * as esbuild from "esbuild";

export async function buildApp() {
  const prod = process.argv[2] === "production";
  const entry = process.argv[3];

  const context = await esbuild.context({
    // banner: {
    //     js: banner,
    // },
    entryPoints: [`src/script.js`],
    bundle: true,
    // external: [...builtins],
    logLevel: "error",
    sourcemap: prod ? false : "inline",
    treeShaking: true,
    outfile: "./build/app.js",
    minify: prod,
    plugins: [],
    // loader,
    format: "cjs",
    target: "es2020",
  });

  await context.rebuild();
  await context.watch();
  context.dispose();
}

buildApp();