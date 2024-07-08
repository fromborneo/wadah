import { VariantProps } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

declare const typographyStyles: (props?: ({
    variant?: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "ul" | "ol" | "code" | "lead" | "large" | "small" | "muted" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type TypographyProps = VariantProps<typeof typographyStyles> & {
    as?: keyof JSX.IntrinsicElements;
    className?: string;
};
export declare const Typography: FC<PropsWithChildren<TypographyProps>>;
export {};
//# sourceMappingURL=index.d.ts.map