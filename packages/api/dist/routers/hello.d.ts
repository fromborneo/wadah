export declare const helloRouter: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
    ctx: {
        headers: Headers;
        db: import("drizzle-orm/neon-http").NeonHttpDatabase<typeof import("@orbitkit/db/schema")>;
        session: import("lucia").Session | null;
        user: import("lucia").User | null;
    };
    meta: object;
    errorShape: {
        data: {
            zodError: import("zod").typeToFlattenedError<any, string> | null;
            code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_KEY;
            httpStatus: number;
            path?: string;
            stack?: string;
        };
        message: string;
        code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: true;
}, {
    protected: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            message: string;
        };
    }>;
}>;
//# sourceMappingURL=hello.d.ts.map