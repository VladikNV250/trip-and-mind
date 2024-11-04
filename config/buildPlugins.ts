import webpack, { Configuration } from "webpack";
import { buildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
// import CopyPlugin from "copy-webpack-plugin";
import path from "path";

export function buildPlugins({mode, paths, analyzer}: buildOptions): Configuration["plugins"] {
    const isDev = mode === "development";
    const isProd = mode === "production";

    
    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({ 
            template: path.resolve(paths.public, "index.html"), 
            favicon: path.resolve(paths.public, "favicon.ico"),
        }),
        new ForkTsCheckerWebpackPlugin(),
    ];
 
    // plugins for dev mode
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());  
    } 

    // plugins for production mode
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin());
        // plugins.push(new CopyPlugin({ patterns: [] }))
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins.length !== 0 ? plugins : undefined;
}