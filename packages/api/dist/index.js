import { helloRouter } from './routers/hello';
import { createCallerFactory, createRouter } from './trpc';
export const appRouter = createRouter({
    hello: helloRouter,
});
export const createCaller = createCallerFactory(appRouter);
export { createTRPCContext } from './trpc';
//# sourceMappingURL=index.js.map