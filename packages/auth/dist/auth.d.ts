import { type Session, type User } from 'lucia';
export declare const uncachedAuth: () => Promise<{
    user: User;
    session: Session;
} | {
    user: null;
    session: null;
}>;
export declare const auth: () => Promise<{
    user: User;
    session: Session;
} | {
    user: null;
    session: null;
}>;
//# sourceMappingURL=auth.d.ts.map