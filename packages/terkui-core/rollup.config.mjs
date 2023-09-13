import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import del from "rollup-plugin-delete";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import ts from "rollup-plugin-ts";
import replace from '@rollup/plugin-replace';
import pkg from "./package.json" assert { type: "json" };

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: "cjs",
      name: "terkui-core",
      globals: {
        "react/jsx-runtime": "jsxRuntime",
        "prop-types": "PropTypes",
        "styled-components": "styled",
        react: "react"
      }
    },
    { file: pkg.module, format: "esm", name: "terkui-core" }
  ],
  plugins: [
    del({ targets: ["lib/*"] }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    typescript({
      compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
      // outDir: "lib/",
      module: "es2015",
    }),
    nodeResolve({
      browser: true
    }),
    commonjs(),
    external(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    })
  ],
  external: Object.keys(pkg.peerDependencies || {})
};
