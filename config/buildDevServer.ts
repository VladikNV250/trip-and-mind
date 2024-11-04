import { Configuration } from "webpack";
import { buildOptions } from "./types/types";

export function buildDevServer({port}: buildOptions): Configuration["devServer"] {
    return {
        port: port,
        open: true,
        historyApiFallback: true
    }
}