import buble from "@rollup/plugin-buble";

export default {
  input: "src/index.js",
  output: {
    format: "umd",
    file: "lib/index.js",
    name: "SubtitleController"
  },
  plugins: [ buble({namedFunctionExpressions: false}) ]
}