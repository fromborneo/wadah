import { Lucia } from 'lucia';
export declare const lucia: Lucia<Record<never, never>, {
    name: string | undefined;
    email: string;
    avatarUrl: string | undefined;
}>;
declare module 'lucia' {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: {
            name?: string;
            email: string;
            avatarUrl?: string;
        };
    }
}
//# sourceMappingURL=lucia.d.ts.map