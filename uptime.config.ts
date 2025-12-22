import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Smyb's Status Page",
  // Links shown at the header of your status page
  links: [
    { link: 'https://link.smyb.fun/', label: 'Link' },
    { link: 'https://img.smyb.fun/', label: 'Image' },
    { link: 'https://zmail.smyb.fun/', label: 'Email' },
    { link: 'https://blog.smyb.fun/', label: 'Blog', highlight: true },
  ],
  // [OPTIONAL] Group your monitors (uncomment and customize if needed)
  // group: {
  //   '🌐 Public Services': ['blog_monitor', 'img_monitor', 'email_monitor'],
  //   '🔐 Private': ['test_tcp_monitor'],
  // },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  // passwordProtection: 'username:password',
  monitors: [
    // Blog Monitor
    {
      id: 'blog_monitor',
      name: 'Blog',
      method: 'GET',
      target: 'https://blog.smyb.fun/',
      tooltip: 'Personal blog site',
      statusPageLink: 'https://blog.smyb.fun/',
      expectedCodes: [200],
      timeout: 10000,
    },
    // Image Hosting Monitor
    {
      id: 'img_monitor',
      name: 'Image',
      method: 'GET',
      target: 'https://img.sanmu.qzz.io/',
      tooltip: 'image hosting service',
      statusPageLink: 'https://img.sanmu.qzz.io/',
      expectedCodes: [200],
      timeout: 10000,
    },
    // Email Service Monitor
    {
      id: 'email_monitor',
      name: 'Email',
      method: 'GET',
      target: 'https://zmail.smyb.fun/',
      tooltip: 'Temporary email',
      statusPageLink: 'https://zmail.smyb.fun/',
      expectedCodes: [200],
      timeout: 10000,
    },
    // Link Monitor
    {
      id: 'link_monitor',
      name: 'Link',
      method: 'GET',
      target: 'https://link.smyb.fun/',
      tooltip: 'Short link',
      statusPageLink: 'https://link.smyb.fun/',
      expectedCodes: [200],
      timeout: 10000,
    },    
  ],
  // notification: {
  //   webhook: {
  //     url: 'https://api.telegram.org/botXXX/sendMessage',
  //     method: 'POST',
  //     payloadType: 'x-www-form-urlencoded',
  //     payload: {
  //       chat_id: YOUR_CHAT_ID,
  //       text: '$MSG',
  //     },
  //   },
  //   timeZone: 'Asia/Shanghai',
  //   gracePeriod: 5,
  //   skipNotificationIds: [],
  //   skipErrorChangeNotification: true,
  // },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // Custom logic on status change
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // Custom logic during ongoing incident
    },
  },
}

// Optional: Scheduled or one-time maintenances
const maintenances: MaintenanceConfig[] = [
  // Example maintenance (you can delete or modify)
  // {
  //   monitors: ['blog_monitor'],
  //   title: 'Scheduled Blog Maintenance',
  //   body: 'Upgrading backend services.',
  //   start: '2025-12-25T02:00:00+08:00',
  //   end: '2025-12-25T04:00:00+08:00',
  //   color: 'blue',
  // },
]

export { maintenances, pageConfig, workerConfig }
