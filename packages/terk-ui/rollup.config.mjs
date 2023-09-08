import babel from "@rollup/plugin-babel";
// import external from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import del from "rollup-plugin-delete";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: "umd",
      name: "terk-ui",
      globals: {
        "react/jsx-runtime": "jsxRuntime",
        "prop-types": "PropTypes",
        "styled-components": "styled",
        react: "react"
      }
    },
    { file: pkg.module, format: "esm", name: "terk-ui" }
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled"
    }),
    typescript({
      compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
      outDir: "lib/",
      outputToFilesystem: true
    }),
    nodeResolve(),
    commonjs(),
    del({ targets: ["lib/*"] })
  ],
  external: Object.keys(pkg.peerDependencies || {})
};
