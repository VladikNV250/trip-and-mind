import { Configuration } from "webpack";
import { buildOptions } from "./types/types";

export function buildResolvers({paths}: buildOptions): Configuration["resolve"] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@": paths.src
        }
    }
}