import config from "@config";
const {
    baseUrl
} = config;
import {
    get as _get
} from "axios";

class SafeRequest {
    constructor(url) {
        this.url = url;
        this.baseUrl = baseUrl;
    }

    get(params = {}) {
        let result = {
            code: 0,
            msg: '',
            data: []
        }
        return new Promise((res, rej) => {
            _get(this.baseUrl + this.url, {
                    params
                })
                .then((response) => {
                    console.log(response.data)
                    if (response.status == 200) {
                        result.data = response.data.data;
                        result.msg = '请求成功';
                        res(result);
                    } else {
                        result.code = -1;
                        result.msg = '🍎请求失败';
                        rej(result);
                    }
                })
                .catch((err) => {
                    result.code = -1;
                    result.msg = '🍎接口报错';
                    result.error = err
                    rej(result);
                })
        })
    }
}

export default SafeRequest;