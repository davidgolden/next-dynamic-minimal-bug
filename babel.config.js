const path = require("path");

module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            "@babel/preset-env",
            ["@babel/preset-react", {
                runtime: "automatic",
            }],
        ],
        plugins: [
            // path.resolve(__dirname, "./node_modules/next/dist/build/babel/plugins/react-loadable-plugin.js"),
        ]
    }
}