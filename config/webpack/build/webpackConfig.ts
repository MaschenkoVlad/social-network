import webpack from "webpack";
import { BuildOptions } from "../types";
import { buildDevServer } from "./devServer";
import { buildLoaders } from "./loaders";
import { buildResolvers } from "./resolvers";
import { buildPlugins } from "./plugins";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
            publicPath: "/",
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(paths.src),
        devtool: isDev ? "eval-cheap-module-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}