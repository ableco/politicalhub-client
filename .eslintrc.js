module.exports = {
  parser: "babel-eslint",
  extends: [
    "@ableco",
    "plugin:jsx-a11y/recommended",
    "plugin:unicorn/recommended",
  ],
  plugins: ["jsx-a11y", "unicorn"],
  globals: {
    fixture: "readonly",
    test: "readonly",
    React: true,
    $: true,
    jQuery: true,
    _: true,
  },
  rules: {
    "import/no-anonymous-default-export": [
      "error",
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    "no-underscore-dangle": ["off"],
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/no-danger": ["warn"],
    "react/jsx-no-undef": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "unicorn/filename-case": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-fn-reference-in-iterator": "off",
    "unicorn/no-null": "off",
    "import/no-unresolved": "error",
    "func-style": ["error", "declaration"],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: false }],
    "arrow-body-style": ["error", "as-needed"],
    "no-param-reassign": "error",
    camelcase: [
      "error",
      {
        properties: "never",
        ignoreDestructuring: false,
        allow: ["^UNSAFE_"],
      },
    ],
    yoda: [
      "error",
      "never",
      {
        exceptRange: true,
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["app/javascript"],
        extensions: [".js"],
      },
    },
  },
};
