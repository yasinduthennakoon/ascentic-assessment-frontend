const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const DEV = 'development';
const PROD = 'production';

let rootConfig = {};

// babel
let babelConfig = {};
const babelPlugins = [];
const babelPresets = [];

module.exports = function ({ env }) {
    console.log('NODE Env => ', env);
    if (env === DEV) {
        // rootConfig = {
        //     webpack: {
        //         plugins: [
        //             new BundleAnalyzerPlugin({
        //                 analyzerPort: 3010,
        //             }),
        //         ],
        //     },
        // };
        return rootConfig;
    } else {
        rootConfig = {
            webpack: {
                alias: {},
                plugins: [
                    new webpack.SourceMapDevToolPlugin({
                        publicPath: 'https://localhost:5000/',
                        filename: '[file].map',
                    }),
                    // new BundleAnalyzerPlugin({
                    //     analyzerMode: 'static',
                    //     openAnalyzer: false,
                    // }),
                ],
                configure: (webpackConfig, { env, paths }) => {
                    const terserPlugin = webpackConfig.optimization.minimizer[0];
                    const terserOptions = terserPlugin.options.terserOptions;
                    let compress = terserOptions.compress;

                    webpackConfig.devtool = false; // turning devtools off and letting SourceMapDevToolPlugin do the work
                    webpackConfig.optimization.minimizer[0].options.terserOptions.compress = {
                        ...compress,
                        drop_console: true,
                        dead_code: true,
                    }; // adding new terser compress options
                    return webpackConfig;
                },
            },
        };
        return rootConfig;
    }
};
