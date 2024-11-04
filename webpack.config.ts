import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { buildWebpack } from './config/buildWebpack';
import { buildMode, buildPaths } from './config/types/types';

interface envVariables {
    mode: buildMode,
    port: number,
    analyzer: boolean,
}

export default (env: envVariables) => {
    const paths: buildPaths = {
        entry: path.resolve(__dirname, "src/index.tsx"),
        output: path.resolve(__dirname, "build"),
        public: path.resolve(__dirname, "public"),
        src: path.resolve(__dirname, "src"),
    }

    const config: webpack.Configuration = buildWebpack({
        mode: env.mode ?? "development",
        port: env.port ?? 3000,
        paths: paths,
        analyzer: env.analyzer ?? false,
    });
    return config; 
}