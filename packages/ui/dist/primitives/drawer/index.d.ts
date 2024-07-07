import { Drawer as DrawerPrimitive } from 'vaul';
import * as React from 'react';
declare const Drawer: {
    ({ shouldScaleBackground, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DrawerTrigger: typeof DrawerPrimitive.Trigger;
declare const DrawerPortal: typeof DrawerPrimitive.Portal;
declare const DrawerClose: typeof DrawerPrimitive.Close;
declare const DrawerOverlay: typeof DrawerPrimitive.Overlay;
declare const DrawerContent: typeof DrawerPrimitive.Content;
declare const DrawerHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DrawerFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DrawerTitle: typeof DrawerPrimitive.Title;
declare const DrawerDescription: typeof DrawerPrimitive.Description;
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, };
//# sourceMappingURL=index.d.ts.map