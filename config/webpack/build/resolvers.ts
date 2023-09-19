import { ResolveOptions } from "webpack";

export function buildResolvers(srcPath: string): ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [srcPath, "node_modules"],
        mainFiles: ["index"],
        alias: {
            "@": srcPath,
        },
    }
}

// Configure how modules are resolved. For example, when calling import 'lodash' in ES2015, 
// the resolve options can change where webpack goes to look for 'lodash'