import { type ReactRenderer } from '@storybook/react';
declare const preview: {
    parameters: {
        actions: {
            argTypesRegex: string;
        };
        controls: {
            matchers: {
                color: RegExp;
                date: RegExp;
            };
        };
        viewport: {
            viewports: {
                '720p': {
                    name: string;
                    styles: {
                        width: string;
                        height: string;
                    };
                };
                '1080p': {
                    name: string;
                    styles: {
                        width: string;
                        height: string;
                    };
                };
                '2k': {
                    name: string;
                    styles: {
                        width: string;
                        height: string;
                    };
                };
                '4k': {
                    name: string;
                    styles: {
                        width: string;
                        height: string;
                    };
                };
                '21/9': {
                    name: string;
                    styles: {
                        width: string;
                        height: string;
                    };
                };
            };
        };
        docs: {
            theme: import("@storybook/theming").ThemeVars;
        };
    };
    decorators: import("@storybook/types").DecoratorFunction<ReactRenderer>[];
};
export default preview;
//# sourceMappingURL=preview.d.ts.map