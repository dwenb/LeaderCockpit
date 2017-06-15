;(function (win) {
    win.API = {
        fetchURL: function (url, opts) {
            console.log(url)
            return fetch("../../data.json");
           // return fetch("https://www.baidu.com",opts);
        }
    };

    var baseURL = config.localServer;    //选择本地服务器


    // var prefix = "";
    // function execute(method,func,cb) {
    //     Light.ajax({
    //         type:method,
    //         url:prefix+func,
    //         success:cb
    //     })
    // }
})(window);