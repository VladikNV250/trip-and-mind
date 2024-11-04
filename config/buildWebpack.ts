import { buildOptions } from "./types/types";
import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";

export function buildWebpack(options: buildOptions) {
    const {mode, port, paths} = options;

    const isDev = mode === "development";
    // const isProd = mode === "production";

    return {
        mode: mode ?? "development",
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: "[name].[contenthash].js",
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        // devtools: isDev && "inline-source-map",
        devServer: buildDevServer(options),
    }
}