module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  // plugins: ["es-beautifier"],
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-strongly-recommended",
    "@vue/typescript/recommended",
    // "plugin:es-beautifier/standard",
    // "plugin:prettier/recommended",
  ],
  // parser: "vue-eslint-parser",
  parserOptions: {
    // parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/max-attributes-per-line": "off",
    // "vue/max-attributes-per-line": [
    //   "error",
    //   {
    //     singleline: {
    //       max: 3,
    //     },
    //     multiline: {
    //       max: 3,
    //     },
    //   },
    // ],
    "vue/first-attribute-linebreak": "off",
    // "vue/first-attribute-linebreak": [
    //   "error",
    //   {
    //     singleline: "ignore",
    //     multiline: "below",
    //   },
    // ],
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: [],
      },
    ],
    "vue/attribute-hyphenation": [
      "error",
      "always",
      {
        ignore: ["projetoNorma"],
      },
    ],
    indent: ["error", 2],
    "comma-dangle": [
      "error",
      {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "only-multiline",
        exports: "only-multiline",
        functions: "only-multiline",
      },
    ],
    "linebreak-style": 0,
    "arrow-parens": ["error", "always"],
    "vue/require-default-prop": "warn",
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
