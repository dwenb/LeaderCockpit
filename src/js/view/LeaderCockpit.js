;(function () {
    App.defineViewModel("#LeaderCockpit", {
        data: {
            access_token: null,
            ticket: null,

            //report
            reportList: [],            //报表列表查询，接口按页查询和按ID查询
            deleteReportStatus: "",   //报表删除返回状态，"datas": “success/fail”
            addReportStatus: "",      //新增报表返回状态  "datas": “1/fail”，1为新增报表id
            updateReportStatus: "",   //修改报表返回状态 "datas": “success/fail”

            //theme
            themeList: [],             //主题列表查询，分页查询和ID查询
            deleteThemeStatus: "",    //删除主题返回状态，"datas": “success/fail”
            addThemeStatus: "",       //新增主题返回状态，"datas": “1/fail”  1为新增报表id
            updateThemeStatus: "",   //修改报表返回状态 "datas": “success/fail”
        },
        watch: {},
        methods: {
            //报表操作
            getReportList: function () {
                var that = this;
                //查询报表列表
                alert("你点击了查询报表");
                var opts={
                    method:'GET',
                    mode:'no-cors',
                    headers:{
                        "Content-Type":"application/json"
                    },
                }
                var path = "/dashbord/report/getReportListByPage?page=1&size=50";
                API.fetchURL(path, opts)
                    .then(function (res) {
                        console.log(res);

                        return res.json();
                    }).then(function (opt) {
                        console.log(opt);
                        that.reportList=opt.datas;
                        console.log(that.reportList)
                        return opt;
                    }).catch(function (e) {
                    console.log(e)
                })
            },
            addReport: function () {
                //新增报表
                alert("你点击了新建报表");
                Light.navigate("addReportPage")
            },
            updateReport: function () {
                //修改报表
                alert("你点击了修改报表");
            },
            deleteReport: function () {
                //删除报表
                alert("你点击了删除报表");
            },

            //主题操作
            getThemeList: function () {
                //查询主题列表
                alert("你点击了查询主题");
            },
            addTheme: function () {
                //新增主题
                alert("你点击了新增主题");
                Light.navigate("addThemePage")
            },
            updateTheme: function () {
                //修改主题
                alert("你点击了修改主题");
            },
            deleteTheme: function () {
                //删除主题
                alert("你点击了删除主题");
            }


        }
    }, {
        ready: function () {
        },
        beforeRender: function (params) {
        },
        afterRender: function (params) {
        },
        beforeUnRender: function () {
        },
        afterUnRender: function () {
        }
    });
})();
