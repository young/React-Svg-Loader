require('jsx-loader');
module.exports = {
    entry: "./src/test.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.js$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
            { test: /\.json$/, loader: 'json' },
        ]
    },
    target: 'node'
};
