// If a webpack.config.js is present, the webpack command picks it up by default. 
// We use the --config option here only to show that you can pass a configuration 
// of any name. This will be useful for more complex configurations that need to be 
// split into multiple files.

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'dist'),

    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {

                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
        
            },
        ],
    },
};