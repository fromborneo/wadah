declare const config: {
    stories: string[];
    addons: (string | {
        name: string;
        options: {
            backgrounds: boolean;
        };
    })[];
    framework: {
        name: "@storybook/react-vite";
        options: {
            strictMode: true;
        };
    };
    staticDirs: string[];
    docs: {
        autodocs: "tag";
    };
};
export default config;
//# sourceMappingURL=react-vite.d.ts.map