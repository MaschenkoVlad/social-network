import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "../types";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: "@svgr/webpack",
            options: {
                // Replace SVG width and height by a custom value. If value is omitted, 
                // it uses 1em in order to make SVG size inherits from text size.
                icon: true,
                svgoConfig: {
                    plugins: [{
                        name: "convertColors",
                        params: {
                            currentColor: true,
                        }
                    }]
                }
            }
        }],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [{
            loader: "file-loader",
        }],
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader"
        ]
    }

    const babelLoader = {
        test: /\.(js|ts)/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                cacheDirectory: true,
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "@babel/plugin-transform-typescript",
                        {
                            isTsx: false,
                        }
                    ],
                    "@babel/plugin-transform-runtime"
                ]
            }
        },
    }

    const tsxBabelLoader = {
        test: /\.(jsx|tsx)/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                cacheDirectory: true,
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "@babel/plugin-transform-typescript",
                        {
                            isTsx: true,
                        }
                    ],
                    "@babel/plugin-transform-runtime"
                ]
            }
        },
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        tsxBabelLoader,
        cssLoader,
    ]
}