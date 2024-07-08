import type { LibraryOptions } from 'vite';
import type { PluginOptions as DtsPluginOptions } from 'vite-plugin-dts';
import type { Options as ExternalPluginOptions } from 'vite-plugin-external';
/**
 * A vite config preset for bundling packages in lib mode.
 * @param params The parameters that the function takes.
 * @param params.lib override vite's `build.lib` options.
 * @param params.dts override the `vite-plugin-dts` options.
 * @param params.external override the `vite-plugin-external` options.
 * @returns a vite configuration object
 */
export declare function buildConfig({ lib, dts, external, }: {
    lib: LibraryOptions & {
        entry: string[] | string;
    };
    dts?: DtsPluginOptions;
    external?: ExternalPluginOptions;
}): import("vite").UserConfig;
//# sourceMappingURL=build.d.ts.map