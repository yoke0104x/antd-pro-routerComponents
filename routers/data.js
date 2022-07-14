const data = [
    {
        key: "enterpriseSideRouter",
        title: '企业端路由',
        list: [
            {
                menuId: "1545325671636840450",
                title: "企业管理",
                children: [
                    {
                        menuId: "1545672847600676866",
                        title: "全生命周期",
                        route: "/e/ep/profile/overview",
                    },
                    {
                        menuId: "1545672847642619905",
                        title: "基本信息",
                        route: "/e/ep/profile/info",
                    },
                    {
                        menuId: "1545672847709728770",
                        title: "绿色管理",
                        route: "/e/ep/profile/green-arch",
                    },
                ],
            },
            {
                menuId: "1545325524752314370",
                title: "环境管理",
                children: [
                    {
                        menuId: "1545672847781031937",
                        title: "环评审批",
                        route: "/e/ep/env/eia",
                    },
                    {
                        menuId: "1545672847848140801",
                        title: "排污许可",
                        route: "/e/ep/env/pollutant-permit",
                    },
                    {
                        menuId: "1545672847911055361",
                        title: "应急预案",
                        route: "/e/ep/env/erp",
                    },
                    {
                        menuId: "1545672847973969921",
                        title: "监测报告",
                        route: "/e/ep/env/mon-report",
                    },
                    {
                        menuId: "1545672848041078786",
                        title: "监察记录",
                        route: "/e/ep/env/supervision",
                    },
                    {
                        menuId: "1545672848108187649",
                        title: "立案处罚",
                        route: "/e/ep/env/case-pun",
                    },
                ],
            },
            {
                menuId: "1545325462810832897",
                title: "碳排放",
                children: [
                    { menuId: "1545672848175296513", title: "排放核算" },
                    { menuId: "1545672848242405377", title: "数据分析" },
                ],
            },
            {
                menuId: "1545322243946754049",
                title: "在线监控",
                children: [
                    {
                        menuId: "1545672848309514242",
                        title: "气监控",
                        route: "/e/ep/mon/air",
                    },
                    {
                        menuId: "1545672848376623106",
                        title: "气警告",
                        route: "/e/ep/mon/air-warning",
                    },
                    {
                        menuId: "1545672848443731970",
                        title: "水监控",
                        route: "/e/ep/mon/water",
                    },
                    {
                        menuId: "1545672848577949698",
                        title: "水警告",
                        route: "/e/ep/mon/water-warning",
                    },
                ],
            },
            {
                menuId: "1545325789043798017",
                title: "用电监控",
                children: [
                    { menuId: "1545672848577949699", title: "总体监控情况" },
                    { menuId: "1545672848645058561", title: "用电数据对比" },
                    { menuId: "1545672848712167425", title: "工况数据" },
                    { menuId: "1545672848779276289", title: "异常信息" },
                    { menuId: "1545672848846385154", title: "企业档案" },
                ],
            },
            {
                menuId: "1545325885953191937",
                title: "分路用电",
                children: [
                    { menuId: "1545675104278859777", title: "实时用电数据" },
                    { menuId: "1545675104316608513", title: "日用电数据" },
                    { menuId: "1545675104383717378", title: "月用电数据" },
                ],
            },
            {
                menuId: "1545325976252362753",
                title: "污染治理分析",
                children: [
                    { menuId: "1545675104455020545", title: "异常申报" },
                    { menuId: "1545675104522129409", title: "企业申报" },
                ],
            },
            {
                menuId: "1545326036931358721",
                title: "统计报表",
                children: [
                    { menuId: "1545675104585043969", title: "抄见电量日报表" },
                    { menuId: "1545675104719261698", title: "抄见电量小时报表" },
                    { menuId: "1545675104719261699", title: "短信统计报表" },
                ],
            },
            {
                menuId: "1545325258497896449",
                title: "设施事件",
                children: [
                    { menuId: "1545675104786370561", title: "事件订阅" },
                    { menuId: "1545675104853479426", title: "事件查询" },
                    { menuId: "1545675104987697153", title: "断上电事件查询" },
                ],
            },
            {
                menuId: "1545326129222823938",
                title: "错峰生产管理",
                children: [
                    { menuId: "1545675104987697154", title: "限产分析" },
                    { menuId: "1545675105054806017", title: "方案执行记录" },
                ],
            },
            {
                menuId: "1545325588488957953",
                title: "政策法规",
                children: [
                    {
                        menuId: "1545654638189277185",
                        title: "法律法规",
                        route: "/m/ep/doc/law",
                    },
                    {
                        menuId: "1545654638252191746",
                        title: "规范文件",
                        route: "/m/ep/doc/spec",
                    },
                    {
                        menuId: "1545654638319300609",
                        title: "清洁能源",
                        route: "/m/ep/doc/clean-energy",
                    },
                    {
                        menuId: "1545654638386409474",
                        title: "碳排放政策",
                        route: "/m/ep/doc/cer",
                    },
                ],
            },
            {
                menuId: "1545326246206156802",
                title: "权限管理",
                children: [
                    {
                        menuId: "1545675105453264897",
                        title: "用户管理",
                        route: "/e/ep/admin/user",
                    },
                    {
                        menuId: "1545675105520373762",
                        title: "菜单管理",
                        route: "/e/ep/admin/menu",
                    },
                ],
            },
        ]
    },
    {
        key: "managementEndRouter",
        title: '管理端路由',
        list: [
            {
                menuId: "1545321548464041986",
                title: "园区概述",
                children: [
                    {
                        menuId: "1545326891373998082",
                        title: "绿色概览",
                        route: "/m/ep/profile/overview",
                    },
                    {
                        menuId: "1545326996919463938",
                        title: "企业分布",
                        route: "/m/ep/profile/ent-dist",
                    },
                    {
                        menuId: "1545336359490990081",
                        title: "指标总览",
                        route: "/m/ep/profile/indicator",
                    },
                    { menuId: "1545337743468703745", title: "总体监控情况" },
                ],
            },
            {
                menuId: "1545321605280083969",
                title: "生态环境",
                children: [
                    {
                        menuId: "1545338786659217410",
                        title: "大气环境",
                        route: "/m/ep/map/air",
                    },
                    {
                        menuId: "1545338929395576834",
                        title: "水环境",
                        route: "/m/ep/map/water",
                    },
                    {
                        menuId: "1545339330102603777",
                        title: "土壤环境",
                        route: "/m/ep/map/soil",
                    },
                ],
            },
            {
                menuId: "1545321685831692289",
                title: "一企一档",
                children: [
                    {
                        menuId: "1545642616324173826",
                        title: "列表管理",
                        route: "/m/ep/ent/list",
                    },
                    {
                        menuId: "1545644828660150274",
                        title: "绿色档案",
                        route: "/m/ep/ent/green-arch",
                    },
                ],
            },
            {
                menuId: "1545322243946754049",
                title: "在线监控",
                children: [
                    {
                        menuId: "1545645211902095361",
                        title: "水监控",
                        route: "/m/ep/mon/water",
                    },
                    {
                        menuId: "1545645351505309697",
                        title: "气监控",
                        route: "/m/ep/mon/air",
                    },
                    {
                        menuId: "1545645488675827713",
                        title: "土壤监控",
                        route: "/m/ep/mon/soil",
                    },
                    {
                        menuId: "1545645705856888833",
                        title: "视频监控",
                        route: "/m/ep/mon/video",
                    },
                ],
            },
            {
                menuId: "1545322312779476993",
                title: "溯源分析",
                children: [
                    { menuId: "1545645800438444034", title: "分析报告" },
                    { menuId: "1545645888351055873", title: "气象污染物融合分析" },
                    { menuId: "1545645980676075522", title: "TVOC监测分析" },
                    { menuId: "1545646120451256322", title: "空气质量分析" },
                    { menuId: "1545647967232610305", title: "浓度趋势分析" },
                    { menuId: "1545648796123549698", title: "趋势相似度分析" },
                    { menuId: "1545648796165492737", title: "污染相关性分析" },
                    { menuId: "1545648796232601601", title: "浓度突变分析" },
                    { menuId: "1545648796303904769", title: "企业排放量分析" },
                    { menuId: "1545648796371013634", title: "企业停限产分析" },
                    { menuId: "1545648796433928193", title: "报警统计分析" },
                    { menuId: "1545648796501037058", title: "投诉规律分析" },
                    { menuId: "1545648796568145921", title: "专业分析服务" },
                ],
            },
            {
                menuId: "1545322366164578305",
                title: "分析预警",
                children: [
                    { menuId: "1545648796635254786", title: "预警总览" },
                    { menuId: "1545648796702363649", title: "废气分级预警" },
                    { menuId: "1545648796769472513", title: "微站分级预警" },
                    { menuId: "1545648796836581378", title: "大气分级预警" },
                    { menuId: "1545648796903690241", title: "废水分级预警" },
                    { menuId: "1545648796970799105", title: "地表水分级预警" },
                ],
            },
            {
                menuId: "1545322417754517505",
                title: "任务处置",
                children: [
                    { menuId: "1545648797037907969", title: "报警任务管理" },
                    { menuId: "1545648797105016833", title: "投诉任务管理" },
                    { menuId: "1545648797239234561", title: "日常任务管理" },
                    { menuId: "1545648797239234562", title: "运维任务管理" },
                ],
            },
            {
                menuId: "1545322528433811457",
                title: "企业级产污设施",
                children: [
                    { menuId: "1545648797302149121", title: "企业级产污设施统计" },
                    { menuId: "1545648797369257986", title: "企业明细" },
                    { menuId: "1545652486410604546", title: "企业地图" },
                ],
            },
            {
                menuId: "1545322651482107905",
                title: "治污设施监控",
                children: [
                    { menuId: "1545652486473519105", title: "运行状况分析" },
                    { menuId: "1545652486544822273", title: "事前申报情况" },
                    { menuId: "1545652486611931137", title: "异常申报情况" },
                    { menuId: "1545652486674845698", title: "现场执法核查" },
                    { menuId: "1545652486741954561", title: "异常企业统计" },
                    { menuId: "1545652486809063426", title: "设备启停分析" },
                    { menuId: "1545652486871977986", title: "治理设施运行分析" },
                ],
            },
            {
                menuId: "1545325203321827329",
                title: "大气污染管控",
                children: [
                    { menuId: "1545652486939086850", title: "管控类型" },
                    { menuId: "1545652487006195714", title: "预案配置" },
                    { menuId: "1545652487073304577", title: "企业管控措施" },
                    { menuId: "1545652487140413441", title: "执行情况分析" },
                    { menuId: "1545652487207522306", title: "异常企业统计" },
                ],
            },
            {
                menuId: "1545325258497896449",
                title: "设施事件",
                children: [
                    { menuId: "1545652487274631169", title: "事件订阅" },
                    { menuId: "1545652487341740033", title: "事件查询" },
                    { menuId: "1545652487408848898", title: "预告警查询" },
                    { menuId: "1545652487475957761", title: "断上电事件查询" },
                ],
            },
            {
                menuId: "1545325351699525634",
                title: "数据质量",
                children: [
                    { menuId: "1545652487610175489", title: "采集率统计" },
                    { menuId: "1545652487610175490", title: "档案配置及数据质量" },
                ],
            },
            {
                menuId: "1545325413393543169",
                title: "报表管理",
                children: [{ menuId: "1545654637530771457", title: "企业电量报表" }],
            },
            {
                menuId: "1545325462810832897",
                title: "碳排放",
                children: [
                    { menuId: "1545654637593686018", title: "园区碳排放总量" },
                    { menuId: "1545654637660794882", title: "企业碳排放概览" },
                    { menuId: "1545654637727903746", title: "企业碳排放" },
                ],
            },
            {
                menuId: "1545325524752314370",
                title: "环境管理",
                children: [
                    {
                        menuId: "1545654637790818306",
                        title: "环评审批",
                        route: "/m/ep/env/eia",
                    },
                    {
                        menuId: "1545654637857927169",
                        title: "排污许可",
                        route: "/m/ep/env/pollutant-permit",
                    },
                    {
                        menuId: "1545654637925036033",
                        title: "监察记录",
                        route: "/m/ep/env/supervision",
                    },
                    {
                        menuId: "1545654637992144898",
                        title: "立案处罚",
                        route: "/m/ep/env/case-pun",
                    },
                    {
                        menuId: "1545654638059253762",
                        title: "应急预案",
                        route: "/m/ep/env/erp",
                    },
                    {
                        menuId: "1545654638122168321",
                        title: "监测报告",
                        route: "/m/ep/env/mon-report",
                    },
                ],
            },
            {
                menuId: "1545325588488957953",
                title: "政策法规",
                children: [
                    {
                        menuId: "1545654638189277185",
                        title: "法律法规",
                        route: "/m/ep/doc/law",
                    },
                    {
                        menuId: "1545654638252191746",
                        title: "规范文件",
                        route: "/m/ep/doc/spec",
                    },
                    {
                        menuId: "1545654638319300609",
                        title: "清洁能源",
                        route: "/m/ep/doc/clean-energy",
                    },
                    {
                        menuId: "1545654638386409474",
                        title: "碳排放政策",
                        route: "/m/ep/doc/cer",
                    },
                ],
            },
        ]
    },
];

module.exports = data;
