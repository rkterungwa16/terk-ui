import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "umd" },
    { file: pkg.module, format: "esm" }
  ],
  plugins: [
    external(),
    babel({
      exclude: "node_modules/**"
    }),
    del({ targets: ["lib/*"] })
  ],
  external: Object.keys(pkg.peerDependencies || {})
};
