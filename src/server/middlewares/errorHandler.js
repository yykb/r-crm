const errorHandler = {
    error(app) {
        app.use(async (ctx, next) => {
            try {
                await next();
            } catch (err) {
                ctx.logger.error(err);
                ctx.status = err.status || 500
            }
        });

        app.use(async (ctx, next) => {
            await next();
            if (ctx.status === 404) {
                ctx.body = "error"
            }
        });
    }
}
export default errorHandler;