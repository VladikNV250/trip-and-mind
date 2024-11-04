export type buildPaths = {
    entry: string;
    output: string;
    public: string;
    src: string;
}

export type buildMode = "development" | "production";


export interface buildOptions {
    mode: buildMode,
    port: number,
    paths: buildPaths,
    analyzer: boolean,
}