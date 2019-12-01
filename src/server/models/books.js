import SafeRequest from "@utils/SafeRequest";

/**
 * @fileoverview Books数据模型
 * @author fan
 */
class Books {

    /**
     * Books类 实现获取后台关于图书相关内容
     * @class
     */
    /**
     * @constructor
     * @param {object} app KOA2执行的上下文 
     */
    constructor(app) {}
    /**
     * 
     * 📚获取后台图书全部列表
     * @param {*} params  设置访问数据的参数
     * @return new Promise
     * @example
     * getList(params) 
     */
    getList(params) {
        const safeRequest = new SafeRequest("books/getbooklist");
        return safeRequest.get(params);
    }
}
export default Books;