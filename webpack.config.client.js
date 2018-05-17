const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const WebpackShellPlugin = require('webpack-shell-plugin');

const isDebug = process.env.NODE_ENV !== 'production' && process.argv.indexOf('-p') === -1;
const withVisualization = isDebug && process.argv.indexOf('--watch') === -1;

// const extractSass = new ExtractTextPlugin({
//     filename: 'styles/[name]-[contenthash].css'
// });

module.exports = {
    context: path.resolve(__dirname, 'client'),
    devtool: 'source-map',
    entry: {
        // styles: './Styles/main.scss',
        main: ['index.js'],
    },
    output: {
        filename: 'scripts/[name]-[chunkhash].bundle.js',
        chunkFilename: 'scripts/[name]-[chunkhash].chunk.js',
        path: path.resolve(__dirname, 'dist/client')
    },
    target: 'web',
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.scss',
            'eot',
            'svg',
            'ttf',
            'woff',
            'woff2',
            'css',
            'png',
            'jpg',
            'jpeg'
        ],
        modules: [
            path.resolve(__dirname, 'client'),
            path.resolve(__dirname, 'server'),
            path.resolve(__dirname, 'node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /^(?!.*\.test\.jsx?$).*\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // {
            //     test: /\.(sass|scss)$/,
            //     use: extractSass.extract({
            //         use: [
            //             { loader: 'css-loader', options: { sourceMap: true } },
            //             { loader: 'sass-loader', options: { sourceMap: true, outputStyle: 'compact' } },
            //             { loader: 'postcss-loader', options: { sourceMap: true } }
            //         ]
            //     })
            // },
            // {
            //     test: /\.(otf|woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: 'url-loader',
            //     options: {
            //         name: 'fonts/[name].[ext]',
            //         outputPath: './assets/',
            //         publicPath: '/'
            //     }
            // }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        // new LodashModuleReplacementPlugin({
        //     collections: true,
        //     paths: true,
        //     currying: true,
        //     chaining: true,
        //     exotics: true,
        //     guards: true,
        //     metadata: true,
        //     deburring: true,
        //     unicode: true,
        //     memoizing: true,
        //     coercions: true,
        //     flattening: true,
        //     placeholders: true
        // }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.ProvidePlugin({
            fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        }),
        /* eslint-disable no-useless-escape*/
        new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|sv)$/),
        /* eslint-enable no-useless-escape*/
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common',
        //     minChunks(module) {
        //         let { context } = module;
        //         return context && context.indexOf('node_modules') >= 0;
        //     }
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'react-build',
        //     minChunks(module) {
        //         let { context } = module;
        //         let targets = [
        //             'react',
        //             'react-dom',
        //             'react-router',
        //             'react-router-dom',
        //             'redux',
        //             'react-redux'
        //         ];
        //         return (
        //             context &&
        //             context.indexOf('node_modules') >= 0 &&
        //             targets.find(t => new RegExp('\\\\' + t + '\\\\', 'i').test(context))
        //         );
        //     }
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(isDebug ? 'development' : 'production'),
            __DEV__: isDebug
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static',
        //     defaultSizes: 'gzip',
        //     openAnalyzer: withVisualization
        // }),
        new HtmlWebpackPlugin({
            template: 'index.ejs'
        })
        // extractSass,
        // generateIndexHtml,
        // browserSync,
        // copyResourcesOnBuildComplete,
        // new WebpackNotifierPlugin()
    ]
};
