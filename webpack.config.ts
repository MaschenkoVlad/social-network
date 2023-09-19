import webpack from "webpack";
import path from "path";
import { BuildEnv, BuildPaths } from "./config/webpack/types";
import { buildWebpackConfig } from "./config/webpack/build/webpackConfig";

export default (env: BuildEnv) => {

    console.log("env", env);

    const mode = env?.mode ?? "development";
    const port = env?.port ?? 3000;
    const isDev = mode === "development";

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
        locales: path.resolve(__dirname, "public", "locales"),
        buildLocales: path.resolve(__dirname, "build", "locales"),
    }
    
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        port,
        isDev,
        paths,
        apiUrl: "",
    });

    return config;
}