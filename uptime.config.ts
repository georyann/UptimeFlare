const workerConfig: WorkerConfig = {
  monitors: [
    // 1. 监控 NAS (CasaOS)
    {
      id: 'nas_casaos',
      name: 'CasaOS Dashboard',
      method: 'GET',
      target: 'https://nas.georyan.top/',
      tooltip: 'CasaOS Home',
      statusPageLink: 'https://nas.georyan.top/',
      timeout: 10000,
      responseKeyword: 'CasaOS', 
    },

    // 2. 监控 Immich 相册
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

    // 3. 监控网盘 (OpenList)
    {
      id: 'nas_openlist',
      name: 'OpenList Drive',
      method: 'GET',
      target: 'https://cloud.georyan.top/',
      tooltip: 'Web Disk Login',
      statusPageLink: 'https://cloud.georyan.top/',
      timeout: 10000,
      responseKeyword: 'Login', 
    },
  ],

  notification: {
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
}
