//Inbuilt node method  called path.resolve
//call the path module in node JS
const path = require('path');
//__dirname gives us the absolute path to the root directory
module.exports = {
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'main.js'
    },
    devServer : {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/'
    },
    module : {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use : {
                loader : 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }

}

//run npm install webpack webpack-cli
//run npm install webpack-dev-server --save-dev