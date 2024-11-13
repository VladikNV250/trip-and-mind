import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildOptions } from "./types/types";
import { css, ModuleOptions } from "webpack";

export function buildLoaders({mode, paths}: buildOptions): ModuleOptions["rules"] {
    const isDev = mode === "development";

    const videoLoader = {
        test: /\.mp4$/,
        use: [
            {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "video"
                }
            }
        ]
    }

    const imageLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            { 
                loader: '@svgr/webpack', 
                options: { 
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: "convertColors",
                                params: {
                                  currentColor: true,
                                }
                            }
                        ]
                    },
                } 
            }
        ],
    }

    const cssLoader = {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            exportLocalsConvention: 'as-is',
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
    }

    const scssLoaderWithModules = {
        test: /\.module\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoader,
            "sass-loader",
        ],
    }
    const scssLoaderNoModules = {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
    }

    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
    }

    return [
        imageLoader,
        videoLoader,
        svgrLoader,
        scssLoaderWithModules,
        scssLoaderNoModules,
        tsLoader,
    ]
}