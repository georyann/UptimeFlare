// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

// 1. 页面配置 (PageConfig)
const pageConfig: PageConfig = {
  // 状态页标题
  title: "GeoRyan's Status",
  // 页面右上角的链接
  links: [
    { link: 'https://georyan.top', label: 'Homepage' },
    { link: 'mailto:i@georyan.top', label: 'Contact Me', highlight: true },
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
      timeout: 10000, //
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

  // 通知设置 (暂时留空，防止报错，你可以随时按需开启)
  notification: {
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
}

// 3. 维护配置 (MaintenanceConfig)
// 文档特别强调：即使不用，也必须保留这一行，否则部署会失败
const maintenances: MaintenanceConfig[] = []

// 4. 导出配置 (关键修复)
// 这一行必须有，否则 Next.js 会报 "not a module" 错误
export { maintenances, pageConfig, workerConfig }
