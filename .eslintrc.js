module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
    parserOptions: {
        parser: "@babel/eslint-parser",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/multi-word-component-names": "off",
        "no-unused-vars": "off",
        "no-mixed-spaces-and-tabs": "off",
        "vue/no-unused-components": "warn",
        "vue/return-in-computed-property": "warn",
    },
};
