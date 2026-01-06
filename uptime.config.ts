// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

// 1. 页面配置 (PageConfig)
const pageConfig: PageConfig = {
  // 你的状态页标题
  title: "GeoRyan's Status",
  // 页面右上角的链接
  links: [
    { link: 'https://georyan.top', label: 'Homepage' },
    { link: 'mailto:i@georyan.top', label: 'Email Me', highlight: true },
  ],
}

// 2. 监控配置 (WorkerConfig)
const workerConfig: WorkerConfig = {
  monitors: [
    // ------------------------------------------------
    // 监控项 1: NAS (CasaOS)
    // ------------------------------------------------
    {
      id: 'nas_casaos',
      name: 'CasaOS Dashboard',
      method: 'GET',
      target: 'https://nas.georyan.top/',
      tooltip: 'CasaOS Home',
      statusPageLink: 'https://nas.georyan.top/',
      timeout: 10000,
      // [关键] 只有响应包含 'CasaOS' 才算正常
      responseKeyword: 'CasaOS',
    },

    // ------------------------------------------------
    // 监控项 2: Immich 相册
    // ------------------------------------------------
    {
      id: 'immich_gallery',
      name: 'Immich Photos',
      method: 'GET',
      target: 'https://immich.georyan.top/',
      tooltip: 'Immich Login Page',
      statusPageLink: 'https://immich.georyan.top/',
      timeout: 10000,
      // [关键] Immich 登录页通常包含 'Immich'
      responseKeyword: 'Immich',
    },

    // ------------------------------------------------
    // 监控项 3: NAS 网盘 (OpenList/AList)
    // ------------------------------------------------
    {
      id: 'nas_openlist',
      name: 'Cloud Drive',
      method: 'GET',
      target: 'https://cloud.georyan.top/',
      tooltip: 'Web Disk Login',
      statusPageLink: 'https://cloud.georyan.top/',
      timeout: 10000,
      // [关键] 检测通用登录关键词 'Login'
      responseKeyword: 'Login',
    },
  ],

  // 通知设置
  notification: {
    // 这里设置时区，这会影响状态页上显示的“最后检查时间”
    timeZone: 'Asia/Shanghai',
    // 宽限期：连续失败 5 次后才会视为掉线（防止网络抖动误报）
    gracePeriod: 5,
    
    // 如果你以后想加 Telegram 通知，可以在这里把 webhook 的注释解开并填入 Token
    // webhook: {
    //   url: 'https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage',
    //   payloadType: 'json',
    //   payload: {
    //     chat_id: '<YOUR_CHAT_ID>',
    //     text: '$MSG',
    //   },
    // },
  },
}

// 3. 维护配置 (MaintenanceConfig)
// 我把你原文件里的 "Test Maintenance" 删掉了，改成了空数组
// 这样你的状态页才会显示 "All Systems Operational" (所有系统正常)
const maintenances: MaintenanceConfig[] = []

// 4. 导出配置 (关键修复)
// 这一行绝对不能少，否则会报 "not a module" 错误
export { maintenances, pageConfig, workerConfig }
