/**
 * kudos to https://github.com/Tomekmularczyk/rollup-styled-jsx
 * see also the correspondig blog post explaining the setup
 * https://medium.com/@tomaszmularczyk89/guide-to-building-a-react-components-library-with-rollup-and-styled-jsx-694ec66bd2
 */
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile =
  NODE_ENV === "production" ? "./indui/index.js" : "./lib/indui.js";

export default {
  input: "./src/components",
  output: {
    file: outputFile,
    format: "cjs",
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    }),
    babel({
      exclude: "node_modules/**",
    }),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
  ],
  external: (id) => /^react|styled-jsx/.test(id),
};
