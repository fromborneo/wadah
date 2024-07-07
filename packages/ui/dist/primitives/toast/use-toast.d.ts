import { ToastActionElement, ToastProps } from './toast';
import * as React from 'react';
type ToasterToast = ToastProps & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
};
declare const actionTypes: {
    readonly ADD_TOAST: "ADD_TOAST";
    readonly UPDATE_TOAST: "UPDATE_TOAST";
    readonly DISMISS_TOAST: "DISMISS_TOAST";
    readonly REMOVE_TOAST: "REMOVE_TOAST";
};
type ActionType = typeof actionTypes;
type Action = {
    type: ActionType['ADD_TOAST'];
    toast: ToasterToast;
} | {
    type: ActionType['UPDATE_TOAST'];
    toast: Partial<ToasterToast>;
} | {
    type: ActionType['DISMISS_TOAST'];
    toastId?: ToasterToast['id'] | undefined;
} | {
    type: ActionType['REMOVE_TOAST'];
    toastId?: ToasterToast['id'] | undefined;
};
interface State {
    toasts: ToasterToast[];
}
export declare const reducer: (state: State, action: Action) => State;
export type ToastArgs = Omit<ToasterToast, 'id'>;
/**
 * A function that creates and displays a toast.
 * @param args The props for the toast.
 * @returns An object with the id of the toast and functions to dismiss or update the toast.
 */
declare function toast({ ...props }: ToastArgs): {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};
/**
 * A hook that provides the current state of the toasts and functions to create and dismiss toasts.
 * @returns The current state of the toasts, the toast function and a dismiss function.
 */
declare function useToast(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};
export { useToast, toast };
//# sourceMappingURL=use-toast.d.ts.map