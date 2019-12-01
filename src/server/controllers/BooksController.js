import Controller from "./Controller";
import Books from "@models/books.js";

class BooksController extends Controller {
    constructor() {
        super();
    }
    async actionIndex(ctx, next) {
        const model = new Books;
        const result = await model.getList();
        // console.log("index",result);

        ctx.body = await ctx.render('books/pages/list', {
            result
        });
    }

    async actionCreate(ctx, next) {
        ctx.body = await ctx.render('books/pages/create');
    }

    async actionList(ctx, next) {}
}
export default BooksController;