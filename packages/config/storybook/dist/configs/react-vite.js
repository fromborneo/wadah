import { getAbsolutePath } from '@orbitkit/utils/filesystem';
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        getAbsolutePath('@storybook/addon-links'),
        {
            name: getAbsolutePath('@storybook/addon-essentials'),
            options: {
                backgrounds: false,
            },
        },
        getAbsolutePath('@storybook/addon-onboarding'),
        getAbsolutePath('@storybook/addon-interactions'),
        getAbsolutePath('@storybook/addon-themes'),
        getAbsolutePath('@storybook/addon-a11y'),
    ],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {
            strictMode: true,
        },
    },
    staticDirs: [getAbsolutePath('@orbitkit/assets')],
    docs: {
        autodocs: 'tag',
    },
};
export default config;
//# sourceMappingURL=react-vite.js.map