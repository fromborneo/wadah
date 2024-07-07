import { TRPCError } from '@trpc/server';
import superjson from 'superjson';
export declare const createTRPCContext: (opts: {
    headers: Headers;
}) => Promise<{
    headers: Headers;
    db: import("drizzle-orm/neon-http").NeonHttpDatabase<typeof import("@orbitkit/db/schema")>;
    session: import("lucia").Session | null;
    user: import("lucia").User | null;
}>;
export declare const createCallerFactory: <TRecord extends import("@trpc/server").RouterRecord>(router: Pick<import("@trpc/server/unstable-core-do-not-import").Router<{
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
}, TRecord>, "_def">) => import("@trpc/server/unstable-core-do-not-import").RouterCaller<{
    ctx: {
        headers: Headers;
        db: import("drizzle-orm/neon-http").NeonHttpDatabase<typeof import("@orbitkit/db/schema")>;
        session: import("lucia").Session | null;
        user: import("lucia").User | null;
    };
    meta: object;
    errorShape: undefined extends ({ shape, error }: {
        error: TRPCError;
        type: import("@trpc/server").TRPCProcedureType | "unknown";
        path: string | undefined;
        input: unknown;
        ctx: {
            headers: Headers;
            db: import("drizzle-orm/neon-http").NeonHttpDatabase<typeof import("@orbitkit/db/schema")>;
            session: import("lucia").Session | null;
            user: import("lucia").User | null;
        } | undefined;
        shape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
    }) => {
        data: {
            zodError: import("zod").typeToFlattenedError<any, string> | null;
            code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_KEY;
            httpStatus: number;
            path?: string;
            stack?: string;
        };
        message: string;
        code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_NUMBER;
    } ? import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape : {
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
    transformer: undefined extends typeof superjson ? false : true;
}, TRecord>;
export declare const createRouter: {
    <TInput extends import("@trpc/server").RouterRecord>(input: TInput): import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
        ctx: {
            headers: Headers;
            db: import("drizzle-orm/neon-http").NeonHttpDatabase<typeof import("@orbitkit/db/schema")>;
            session: import("lucia").Session | null;
            user: import("lucia").User | null;
        };
        meta: object;
        errorShape: undefined extends ({ shape, error }: {
            error: TRPCError;
            type: import("@trpc/server").TRPCProcedureType | "unknown";
            path: string | undefined;
            input: unknown;
            ctx: {
                headers: Headers;
                db: import("drizzle-orm/neon-http").NeonHttpDatabase<typeof import("@orbitkit/db/schema")>;
                session: import("lucia").Session | null;
                user: import("lucia").User | null;
            } | undefined;
            shape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
        }) => {
            data: {
                zodError: import("zod").typeToFlattenedError<any, string> | null;
                code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_KEY;
                httpStatus: number;
                path?: string;
                stack?: string;
            };
            message: string;
            code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_NUMBER;
        } ? import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape : {
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
        transformer: undefined extends typeof superjson ? false : true;
    }, TInput>;
    <TInput extends import("@trpc/server/unstable-core-do-not-import").CreateRouterOptions>(input: TInput): import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
        ctx: {
            headers: Headers;
            db: import("drizzle-orm/neon-http").NeonHttpDatabase<typeof import("@orbitkit/db/schema")>;
            session: import("lucia").Session | null;
            user: import("lucia").User | null;
        };
        meta: object;
        errorShape: undefined extends ({ shape, error }: {
            error: TRPCError;
            type: import("@trpc/server").TRPCProcedureType | "unknown";
            path: string | undefined;
            input: unknown;
            ctx: {
                headers: Headers;
                db: import("drizzle-orm/neon-http").NeonHttpDatabase<typeof import("@orbitkit/db/schema")>;
                session: import("lucia").Session | null;
                user: import("lucia").User | null;
            } | undefined;
            shape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
        }) => {
            data: {
                zodError: import("zod").typeToFlattenedError<any, string> | null;
                code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_KEY;
                httpStatus: number;
                path?: string;
                stack?: string;
            };
            message: string;
            code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_NUMBER;
        } ? import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape : {
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
        transformer: undefined extends typeof superjson ? false : true;
    }, import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<TInput>>;
};
export declare const publicProcedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<{
    headers: Headers;
    db: import("drizzle-orm/neon-http").NeonHttpDatabase<typeof import("@orbitkit/db/schema")>;
    session: import("lucia").Session | null;
    user: import("lucia").User | null;
}, object, object, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, false>;
export declare const protectedProcedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<{
    headers: Headers;
    db: import("drizzle-orm/neon-http").NeonHttpDatabase<typeof import("@orbitkit/db/schema")>;
    session: import("lucia").Session | null;
    user: import("lucia").User | null;
}, object, {
    session: {
        id: string;
        expiresAt: Date;
        fresh: boolean;
        userId: import("lucia").UserId;
    };
    user: {
        id: import("lucia").UserId;
        name: string | undefined;
        email: string;
        avatarUrl: string | undefined;
    };
}, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, false>;
//# sourceMappingURL=trpc.d.ts.map