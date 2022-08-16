/**
 * 布局配置
 */

import routes from '../routes/index'
import { itemUserSchema } from './item_user'

/**
 * 目前布局这块没有权限控制逻辑
 */
export const layout = {
  routes,
  type: 'aside-layout', // 侧边栏布局
  routeTabs: {
    enable: true,
  },
  header: {
    brand: {
      // 公司品牌
      logo: '/static/images/logo_line_white.png',
      title: 'Ovine',
      link: {
        title: 'dashboard',
        href: '/',
      },
    },
    // 头部 工具项
    items: [
      {
        type: 'item-dev-code', // 查看页面JSON， release 环境不会显示。
      },
      // {
      //   type: 'head-item',
      //   faIcon: 'question-circle',
      //   tip: '查看文档',
      //   href: 'https://ovine.igroupes.com/org/',
      // },
      {
        type: 'item-search-menu', // 搜索侧边栏
      },
      itemUserSchema, // 用户头像展示扩展
      // {
      //   type: 'item-setting', // 系统设置
      //   align: 'right',
      // },
    ],
  },
}
