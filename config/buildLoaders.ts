import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildOptions } from "./types/types";
import { css, ModuleOptions } from "webpack";

export function buildLoaders({mode}: buildOptions): ModuleOptions["rules"] {
    const isDev = mode === "development";

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
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoader,
            "sass-loader",
        ],
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
        svgrLoader,
        scssLoader,
        tsLoader,
    ]
}