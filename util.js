let request = require('request');

module.exports = (function () {
    return {
        get: async function (url) {
            return new Promise(function (resolve, reject) {
                request(url,function(error,response,body){
                    if(!error && response.statusCode == 200){
                        //输出返回的内容
                        resolve(body);
                    }else{
                        reject(error);
                    }
                });
            })
        }
    }
}())