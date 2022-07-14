const data = require("./data");
const axios = require("axios");
const { camelCase, find } = require("loadsh")
const async = require('async');
const fs = require("fs");
const path = require("path");
// 彩色控制台
const chalk = require("chalk");

const log = console.log;



// { text: '任务处置', fanyi: 'Task disposal' }
// { text: '一企一档', fanyi: 'An enterprise with a' }
// { text: '治污设施监控', fanyi: 'Pollution treatment facilities to monitor' }
// { text: '大气污染管控', fanyi: 'Air pollution control' }
// { text: '企业级产污设施', fanyi: 'Enterprise production facilities' }
// { text: '分析预警', fanyi: 'Analysis of early warning' }
// { text: '数据质量', fanyi: 'Data quality' }
// { text: '政策法规', fanyi: 'Policies and regulations' }
// { text: '园区概述', fanyi: 'Summary of park' }
// { text: '生态环境', fanyi: 'The ecological environment' }
// { text: '环境管理', fanyi: 'Environmental management' }
// { text: '设施事件', fanyi: 'Facilities for events' }
// { text: '溯源分析', fanyi: 'Back analysis' }
// { text: '碳排放', fanyi: 'Carbon emissions' }
// { text: '报表管理', fanyi: 'Report management' }
// { text: '在线监控', fanyi: 'Online monitoring' }
// [
//     'taskDisposal',
//     'anEnterpriseWithA',
//     'pollutionTreatmentFacilitiesToMonitor',
//     'airPollutionControl',
//     'enterpriseProductionFacilities',
//     'analysisOfEarlyWarning',
//     'dataQuality',
//     'policiesAndRegulations',
//     'summaryOfPark',
//     'theEcologicalEnvironment',
//     'environmentalManagement',
//     'facilitiesForEvents',
//     'backAnalysis',
//     'carbonEmissions',
//     'reportManagement',
//     'onlineMonitoring'
// ]

const getZh = async (key) => {
    const res = await axios("https://api.vvhan.com/api/fy", {
        methods: "POST",
        params: {
            text: key
        },
    });
    console.log(res.data?.data)
    return camelCase(res.data?.data?.fanyi);
}

async function main() {
    let arr = [
        {
            key: "enterpriseSideRouter",
            title: '企业端路由',
            list: [
                { key: 'policiesAndRegulations', title: '政策法规' },
                { key: 'statisticalReports', title: '统计报表' },
                { key: 'onlineMonitoring', title: '在线监控' },
                { key: 'carbonEmissions', title: '碳排放' },
                { key: 'electrical', title: '分路用电' },
                { key: 'peakProductionManagement', title: '错峰生产管理' },
                { key: 'rightsManagement', title: '权限管理' },
                { key: 'pollutionControlAnalysis', title: '污染治理分析' },
                { key: 'theEnterpriseManagement', title: '企业管理' },
                { key: 'environmentalManagement', title: '环境管理' },
                { key: 'electricityMonitoring', title: '用电监控' },
                { key: 'facilitiesForEvents', title: '设施事件' }
            ]
        },
        {
            key: "managementEndRouter",
            title: '管理端路由',
            list: [
                { key: 'dataQuality', title: '数据质量' },
                { key: 'policiesAndRegulations', title: '政策法规' },
                { key: 'summaryOfPark', title: '园区概述' },
                { key: 'environmentalManagement', title: '环境管理' },
                { key: 'taskDisposal', title: '任务处置' },
                { key: 'pollutionTreatmentFacilitiesToMonitor', title: '治污设施监控' },
                { key: 'theEcologicalEnvironment', title: '生态环境' },
                { key: 'enterpriseProductionFacilities', title: '企业级产污设施' },
                { key: 'backAnalysis', title: '溯源分析' },
                { key: 'onlineMonitoring', title: '在线监控' },
                { key: 'facilitiesForEvents', title: '设施事件' },
                { key: 'reportManagement', title: '报表管理' },
                { key: 'airPollutionControl', title: '大气污染管控' },
                { key: 'carbonEmissions', title: '碳排放' },
                { key: 'anEnterpriseWithA', title: '一企一档' },
                { key: 'analysisOfEarlyWarning', title: '分析预警' }
            ]
        }
    ];
    // 翻译并写入文件
    // async.mapLimit(data, 1000123, async (el) => {
    //     let res = await getZh(el.title);
    //     arr.push({
    //         key: res,
    //         title: el.title
    //     })
    //     return res
    // }, (err) => {
    //     console.log(arr)
    //     // fs.stat("./router", (err, stats) => {
    //     //     if (err) {
    //     //         log(chalk.red("文件夹不存在"));
    //     //     } else {
    //     //         fs.rmdirSync(path.resolve(__dirname, "./router"), { recursive: true });
    //     //         log(chalk.yellow("文件夹已删除"))
    //     //     }
    //     //     mkdir(arr);
    //     // })
    // })
    fs.stat("./router", (err, stats) => {
        if (err) {
            log(chalk.red("文件夹不存在"));
        } else {
            fs.rmdirSync(path.resolve(__dirname, "./router"), { recursive: true });
            log(chalk.yellow("文件夹已删除"))
        }
        mkdir(arr);
    })
}

function mkdir(arr) {
    fs.mkdir(path.resolve(__dirname, "./router"), { recursive: true }, () => {
        arr.forEach(el => {
            // mkdirs(el);
            mkdirse(el);
        })
        getImport(arr);
    });
}

function mkdirse(el) {
    fs.mkdir(path.resolve(__dirname, "./router/" + el.key), { recursive: true }, () => {
        el.list.forEach(els => {
            mkdirs(els, el);
        })
        getImport(el.list, el.key);
    })
}

function mkdirs(el, router) {
    fs.mkdir(path.resolve(__dirname, `./router/${router.key}/${el.key}`), { recursive: true }, () => {
        let str =
            `
// ${el.title} 路由组件
export default [
`;
        let datas = find(data, ["key", router.key])?.list?.find(els => els.title === el.title)?.children;
        datas?.forEach(els => {
            str += `
    // ${els.title}
    {
        path: '${els.route}',
        name: '${els.title}',
        // component: () => import('@/views/${el.key}/index.vue')
    },
`
        })
        str += `]`
        fs.writeFile(path.resolve(__dirname, `./router/${router.key}/${el.key}/index.ts`), str, (err) => {
            if (err) {
                log(chalk.red(err));
            } else {
                log(chalk.green(`${el.key}文件已创建`));
            }
        }
        )
    });
}

function getImport(arr, key) {
    let str = ``
    arr.forEach(el => {
        str += `
// ${el.title}
import ${el.key} from './${el.key}'
        `
    })
    str += `
export default [`
    arr.forEach(el => {
        str += `
    ...${el.key},`
    })
    str += `
]`
    if (key) {
        fs.writeFile(path.resolve(__dirname, `./router/${key}/index.ts`), str, () => {
            log(chalk.green(`index引入文件创建完成文件已创建`));
        })
    } else {
        fs.writeFile(path.resolve(__dirname, `./router/index.ts`), str, () => {
            log(chalk.green(`index引入文件创建完成文件已创建`));
        })
    }
}

main()