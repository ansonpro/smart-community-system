import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: () => import('@/views/login.vue')
};

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
  path: '/403',
  meta: {
    title: '403-权限不足'
  },
  name: 'error-403',
  component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: () => import('@/views/error-page/500.vue')
};

export const preview = {
  path: '/preview',
  name: 'preview',
  component: () => import('@/views/form/article-publish/preview.vue')
};

export const locking = {
  path: '/locking',
  name: 'locking',
  component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Main,
  children: [
    {path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue')},
    {
      path: 'ownspace',
      title: '个人中心',
      name: 'ownspace_index',
      component: () => import('@/views/own-space/own-space.vue')
    },
  ]
};

// residentInfoManager
export const appRouter = [
  {
    path: '/resident',
    icon: 'person',
    name: 'resident',
    title: '住户信息管理',
    component: Main,
    children: [
      {
        path: 'index',
        title: '住户信息管理',
        name: 'resident_index',
        component: () => import('@/views/resident-manager/Resident.vue')
      }
    ]
  },
  {
    path: '/house',
    icon: 'home',
    name: 'house',
    title: '房屋信息管理',
    component: Main,
    children: [
      {
        path: 'index',
        title: '房屋信息管理',
        name: 'house_index',
        component: () => import('@/views/house-manager/House.vue')
      }
    ]
  },
  {
    path: '/finance',
    icon: 'android-list',
    name: 'finance',
    title: '财务管理',
    component: Main,
    children: [
      {
        path: 'property',
        title: '物业费用管理',
        name: 'property',
        icon: 'flag',
        component: () => import('@/views/finance-manager/Property.vue')
      },
      {
        path: 'park',
        title: '停车费用管理',
        name: 'park',
        icon: 'android-car',
        component: () => import('@/views/finance-manager/Park.vue')
      },
      {
        path: 'expense',
        title: '支出费用管理',
        name: 'expense',
        icon: 'android-list',
        component: () => import('@/views/finance-manager/Expense.vue')
      }
    ]
  },
  {
    path: '/facility',
    icon: 'gear-b',
    name: 'facilities',
    title: '公共设施管理',
    component: Main,
    children: [
      {
        path: 'info',
        title: '设施信息管理',
        name: 'info',
        icon: 'information-circled',
        component: () => import('@/views/communal-facility/InfoManager.vue')
      },
      {
        path: 'maintain',
        title: '设施维护管理',
        name: 'maintain',
        icon: 'wrench',
        component: () => import('@/views/communal-facility/MaintainManager.vue')
      }
    ]
  },
  {
    path: '/event',
    icon: 'android-favorite',
    name: 'event',
    title: '社区事件处理',
    component: Main,
    children: [
      {
        path: 'index',
        title: '社区事件处理',
        name: 'event_index',
        component: () => import('@/views/event-handle/EventHandle.vue')
      }
    ]
  },
  {
    path: '/register',
    icon: 'compose',
    name: 'register',
    title: '外来人员登记',
    component: Main,
    children: [
      {
        path: 'index',
        title: '外来人员登记',
        name: 'register_index',
        component: () => import('@/views/foreign-person-register/ForeignRegister.vue')
      }
    ]
  },
  {
    path: '/notice',
    icon: 'android-checkbox-outline',
    name: 'notice',
    title: '发布公告',
    component: Main,
    children: [
      {
        path: 'index',
        title: '发布公告',
        name: 'notice_index',
        component: () => import('@/views/publish-notice/PublishNotice.vue')
      }
    ]
  },
  {
    path: '/person',
    icon: 'android-contact',
    name: 'person',
    title: '工作人员管理',
    access: 0,
    component: Main,
    children: [
      {
        path: 'index',
        title: '工作人员管理',
        name: 'person_index',
        access: 0,
        component: () => import('@/views/person-manager/PersonManager.vue')
      }
    ]
  },
];
// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const myRouter = [
  {
    path: '/access',
    icon: 'key',
    name: 'access',
    title: '权限管理',
    component: Main,
    children: [
      {path: 'index', title: '权限管理', name: 'access_index', component: () => import('@/views/access/access.vue')}
    ]
  },
  {
    path: '/access-test',
    icon: 'lock-combination',
    title: '权限测试页',
    name: 'accesstest',
    access: 0,
    component: Main,
    children: [
      {
        path: 'index',
        title: '权限测试页',
        name: 'accesstest_index',
        access: 0,
        component: () => import('@/views/access/access-test.vue')
      }
    ]
  },
  {
    path: '/international',
    icon: 'earth',
    title: {i18n: 'international'},
    name: 'international',
    component: Main,
    children: [
      {
        path: 'index',
        title: {i18n: 'international'},
        name: 'international_index',
        component: () => import('@/views/international/international.vue')
      }
    ]
  },
  {
    path: '/component',
    icon: 'social-buffer',
    name: 'component',
    title: '组件',
    component: Main,
    children: [
      {
        path: 'text-editor',
        icon: 'compose',
        name: 'text-editor',
        title: '富文本编辑器',
        component: () => import('@/views/my-components/text-editor/text-editor.vue')
      },
      {
        path: 'md-editor',
        icon: 'pound',
        name: 'md-editor',
        title: 'Markdown编辑器',
        component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
      },
      {
        path: 'image-editor',
        icon: 'crop',
        name: 'image-editor',
        title: '图片预览编辑',
        component: () => import('@/views/my-components/image-editor/image-editor.vue')
      },
      {
        path: 'draggable-list',
        icon: 'arrow-move',
        name: 'draggable-list',
        title: '可拖拽列表',
        component: () => import('@/views/my-components/draggable-list/draggable-list.vue')
      },
      {
        path: 'area-linkage',
        icon: 'ios-more',
        name: 'area-linkage',
        title: '城市级联',
        component: () => import('@/views/my-components/area-linkage/area-linkage.vue')
      },
      {
        path: 'file-upload',
        icon: 'android-upload',
        name: 'file-upload',
        title: '文件上传',
        component: () => import('@/views/my-components/file-upload/file-upload.vue')
      },
      {
        path: 'scroll-bar',
        icon: 'android-upload',
        name: 'scroll-bar',
        title: '滚动条',
        component: () => import('@/views/my-components/scroll-bar/scroll-bar-page.vue')
      },
      {
        path: 'count-to',
        icon: 'arrow-graph-up-right',
        name: 'count-to',
        title: '数字渐变',
        // component: () => import('@/views/my-components/count-to/count-to.vue')
        component: () => import('@/views/my-components/count-to/count-to.vue')
      },
      {
        path: 'split-pane-page',
        icon: 'ios-pause',
        name: 'split-pane-page',
        title: 'split-pane',
        component: () => import('@/views/my-components/split-pane/split-pane-page.vue')
      }
    ]
  },
  {
    path: '/form',
    icon: 'android-checkbox',
    name: 'form',
    title: '表单编辑',
    component: Main,
    children: [
      {
        path: 'artical-publish',
        title: '文章发布',
        name: 'artical-publish',
        icon: 'compose',
        component: () => import('@/views/form/article-publish/article-publish.vue')
      },
      {
        path: 'workflow',
        title: '工作流',
        name: 'workflow',
        icon: 'arrow-swap',
        component: () => import('@/views/form/work-flow/work-flow.vue')
      }

    ]
  },
  {
    path: '/tables',
    icon: 'ios-grid-view',
    name: 'tables',
    title: '表格',
    component: Main,
    children: [
      {
        path: 'dragableTable',
        title: '可拖拽排序',
        name: 'dragable-table',
        icon: 'arrow-move',
        component: () => import('@/views/tables/dragable-table.vue')
      },
      {
        path: 'editableTable',
        title: '可编辑表格',
        name: 'editable-table',
        icon: 'edit',
        component: () => import('@/views/tables/editable-table.vue')
      },
      {
        path: 'searchableTable',
        title: '可搜索表格',
        name: 'searchable-table',
        icon: 'search',
        component: () => import('@/views/tables/searchable-table.vue')
      },
      {
        path: 'exportableTable',
        title: '表格导出数据',
        name: 'exportable-table',
        icon: 'code-download',
        component: () => import('@/views/tables/exportable-table.vue')
      },
      {
        path: 'table2image',
        title: '表格转图片',
        name: 'table-to-image',
        icon: 'images',
        component: () => import('@/views/tables/table-to-image.vue')
      }
    ]
  },
  {
    path: '/advanced-router',
    icon: 'ios-infinite',
    name: 'advanced-router',
    title: '高级路由',
    component: Main,
    children: [
      {
        path: 'mutative-router',
        title: '动态路由',
        name: 'mutative-router',
        icon: 'link',
        component: () => import('@/views/advanced-router/mutative-router.vue')
      },
      {
        path: 'argument-page',
        title: '带参页面',
        name: 'argument-page',
        icon: 'android-send',
        component: () => import('@/views/advanced-router/argument-page.vue')
      }
    ]
  },
  {
    path: '/error-page',
    icon: 'android-sad',
    title: '错误页面',
    name: 'errorpage',
    component: Main,
    children: [
      {
        path: 'index',
        title: '错误页面',
        name: 'errorpage_index',
        component: () => import('@/views/error-page/error-page.vue')
      }
    ]
  }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  otherRouter,
  preview,
  locking,
  ...appRouter,
  page500,
  page403,
  page404
];
