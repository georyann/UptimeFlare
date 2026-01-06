import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

// 1. 页面头部配置
const pageConfig: PageConfig = {
  title: "GeoRyan's Status",
  links: [
    { link: 'https://georyan.top', label: 'Homepage' },
    { link: 'mailto:i@georyan.top', label: 'Contact Me', highlight: true },
  ],
}

// 2. 监控核心配置
const workerConfig: WorkerConfig = {
  monitors: [
    // === 监控项 1: NAS (CasaOS) ===
    {
      id: 'nas_casaos',
      name: 'CasaOS Dashboard',
      method: 'GET',
      target: 'https://nas.georyan.top/',
      tooltip: 'CasaOS Home',
      statusPageLink: 'https://nas.georyan.top/',
      timeout: 10000,
      responseKeyword: 'CasaOS', // 只有网页里有 CasaOS 字样才算正常
    },
    // === 监控项 2: Immich 相册 ===
    {
      id: 'immich_gallery',
      name: 'Immich Photos',
      method: 'GET',
      target: 'https://immich.georyan.top/',
      tooltip: 'Immich Login Page',
      statusPageLink: 'https://immich.georyan.top/',
      timeout: 10000,
      responseKeyword: 'Immich',
    },
    // === 监控项 3: NAS 网盘 ===
    {
      id: 'nas_openlist',
      name: 'Cloud Drive',
      method: 'GET',
      target: 'https://cloud.georyan.top/',
      tooltip: 'Web Disk Login',
      statusPageLink: 'https://cloud.georyan.top/',
      timeout: 10000,
      responseKeyword: 'OpenList', // 检测通用的 Login 关键字
    },
  ],
  notification: {
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
}

// 3. 维护公告配置
// 这里必须留空数组，这样那个蓝色的“Test Maintenance”条就会消失了
const maintenances: MaintenanceConfig[] = []

// 4. 导出配置 (必须保留)
export { maintenances, pageConfig, workerConfig }
