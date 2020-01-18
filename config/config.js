import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import slash from 'slash2';
import webpackPlugin from './plugin.config';
const { pwa, primaryColor } = defaultSettings; // preview.pro.ant.design only do not use in your production ;

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';
const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      // dynamicImport: {
      //   loadingComponent: './components/PageLoading/index',
      //   webpackChunkName: true,
      //   level: 3,
      // },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];

if (isAntDesignProPreview) {
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push([
    'umi-plugin-pro',
    {
      serverUrl: 'https://ant-design-pro.netlify.com',
    },
  ]);
}

export default {
  /*   base: '/testing/',
  publicPath: '/testing/', */
  plugins,
  block: {
    defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
  },
  hash: true,
  targets: {
    ie: 11,
  },
  devtool: isAntDesignProPreview ? 'source-map' : false,
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/',
      redirect: '/employee/dashboard',
    },
    {
      path: '/account/program',
      redirect: '/program/dashboard',
    },
    {
      path: '/account/learning',
      redirect: '/learning/dashboard',
    },
    {
      path: '/account/resource',
      redirect: '/resource/dashboard',
    },
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/employee',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/employee',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/employee',
              redirect: '/employee/dashboard',
            },
            {
              path: '/employee/dashboard',
              name: 'dashboard',
              icon: 'dashboard',
              component: './Dashboard',
            },
            {
              path: '/employee/goals',
              name: 'Goals',
              icon: 'rise',
              component: './Goals',
            },
            {
              path: '/employee/profile',
              name: 'profile',
              icon: 'user',
              component: './Profile',
            },
            {
              path: '/employee/current',
              name: 'Current Career Track',
              icon: 'environment',
              component: './CurrentCareerTrack',
            },
            {
              path: '/employee/manage',
              name: 'Career Management',
              icon: 'schedule',
              component: './CareerManagement',
            },
            {
              path: '/employee/careerTrackSearch',
              name: 'Career Track Search',
              icon: 'search',
              component: './CareerTrackSearch',
            },
            {
              path: '/employee/positionSearch',
              name: 'Open Positions',
              icon: 'user-add',
              component: './PositionSearch',
            },
            {
              path: '/employee/careerEnhancement',
              name: 'Career Enhancement',
              icon: 'rocket',
              component: './CareerEnhancement',
            },
            {
              path: '/employee/growth',
              name: 'Growth & Learning',
              icon: 'compass',
              routes: [
                {
                  path: '/employee/growth/skills',
                  name: 'Skills',
                  icon: 'trophy',
                  component: './Skills',
                },
                {
                  path: '/employee/growth/certifications',
                  name: 'Certifications',
                  icon: 'file-done',
                  component: './Certifications',
                },
                {
                  path: '/employee/growth/trainings',
                  name: 'Trainings',
                  icon: 'coffee',
                  component: './Trainings',
                },
                {
                  path: '/employee/growth/strategic',
                  name: 'Strategic Practice Areas',
                  icon: 'cluster',
                  component: './Strategic',
                },
              ],
            },

            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      path: '/program',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/program',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/program',
              redirect: '/program/dashboard',
            },
            {
              path: '/program/dashboard',
              name: 'Program Dashboard',
              icon: 'dashboard',
              component: './Program/Dashboard',
            },
            {
              path: '/program/reporting',
              name: 'Reporting',
              icon: 'rise',
              component: './Program/Reporting',
            },
            {
              path: '/program/profile',
              name: 'Program Information',
              icon: 'cluster',
              component: './Program/ProgramInformation',
            },
            // {
            //   path: '/program/manage',
            //   name: 'Program Management',
            //   icon: 'schedule',
            //   routes: [
            //     {
            //       path: '/program/manage/open',
            //       name: 'Open Positions',
            //       icon: 'user-add',
            //       component: './Program/OpenPositions',
            //     },
            //     {
            //       path: '/program/manage/enhancement',
            //       name: 'Career Enhancements',
            //       icon: 'rocket',
            //       component: './Program/CareerEnhancements',
            //     },
            //   ],
            // },
            {
              path: '/program/employee',
              name: 'Employee Development',
              icon: 'compass',
              routes: [
                {
                  path: '/program/employee/career-track',
                  name: 'Career Track',
                  icon: 'environment',
                  component: './Program/EmployeesCareerTrack',
                },
                // {
                //   path: '/program/employee/open-positions',
                //   name: 'Open Positions',
                //   icon: 'user-add',
                //   component: './Certifications',
                // },
                // {
                //   path: '/program/employee/career-enhancement',
                //   name: 'Career Enhancement',
                //   icon: 'rocket',
                //   component: './Trainings',
                // },
                // {
                //   path: '/program/employee/skills',
                //   name: 'Skills',
                //   icon: 'trophy',
                //   component: './Skills',
                // },
                // {
                //   path: '/program/employee/certifications',
                //   name: 'Certifications',
                //   icon: 'file-done',
                //   component: './Certifications',
                // },
                // {
                //   path: '/program/employee/trainings',
                //   name: 'Trainings',
                //   icon: 'coffee',
                //   component: './Trainings',
                // },
              ],
            },
            {
              path: '/program/employeeSearch',
              name: 'Employee Search',
              icon: 'search',
              component: './Program/EmployeeSearch',
            },
            // {
            //   component: './404',
            // },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      path: '/learning',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/learning',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/learning',
              redirect: '/learning/dashboard',
            },
            {
              path: '/learning/dashboard',
              name: 'ITS Learning Dashboard',
              icon: 'dashboard',
              component: './Learning/Dashboard',
            },
            {
              path: '/learning/reporting',
              name: 'ITS Reporting',
              icon: 'rise',
              component: './Learning/Reporting',
            },
            // {
            //   path: '/learning/employee',
            //   name: 'Employee Inventory',
            //   icon: 'team',
            //   component: './Learning/employee',
            // },
            {
              path: '/learning/manage',
              name: 'Manage Learning',
              icon: 'compass',
              routes: [
                {
                  path: '/learning/manage/skills',
                  name: 'Skills',
                  icon: 'trophy',
                  component: './Learning/Skills',
                },
                {
                  path: '/learning/manage/certifications',
                  name: 'Certifications',
                  icon: 'file-done',
                  component: './Learning/Certifications',
                },
                {
                  path: '/learning/manage/trainings',
                  name: 'Trainings',
                  icon: 'coffee',
                  component: './Learning/Trainings',
                },
              ],
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      path: '/resource',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/resource',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/resource',
              redirect: '/resource/dashboard',
            },
            {
              path: '/resource/dashboard',
              name: 'ITS Resource Dashboard',
              icon: 'dashboard',
              component: './Resource/Dashboard',
            },
            {
              path: '/resource/enterpriseReporting',
              name: 'ITS Enterprise Reporting',
              icon: 'rise',
              component: './Resource/EnterpriseReporting',
            },
            {
              path: '/resource/employeeSearch',
              name: 'ITS Employee Search',
              icon: 'search',
              component: './Resource/EmployeeSearch',
            },
            {
              path: '/resource/employee',
              name: 'ITS Employees',
              icon: 'contacts',
              routes: [
                {
                  path: '/resource/employee/reporting',
                  name: 'Reporting',
                  icon: 'rise',
                  component: './Resource/EmployeeReporting',
                },
                {
                  path: '/resource/employee/profile',
                  name: 'Profile',
                  icon: 'user',
                  component: './Resource/Profile',
                },
                {
                  path: '/resource/employee/current',
                  name: 'Current Career Track',
                  icon: 'environment',
                  component: './Resource/CurrentCareerTrack',
                },
                {
                  path: '/resource/employee/manage',
                  name: 'Career Management',
                  icon: 'schedule',
                  component: './Resource/CareerManagement',
                },
                {
                  path: '/resource/employee/careerTrackSearch',
                  name: 'Career Track Search',
                  icon: 'search',
                  component: './Resource/CareerTrackSearch',
                },
                {
                  path: '/resource/employee/positionSearch',
                  name: 'Open Positions',
                  icon: 'user-add',
                  component: './Resource/PositionSearch',
                },
                {
                  path: '/resource/employee/careerEnhancement',
                  name: 'Career Enhancement',
                  icon: 'rocket',
                  component: './Resource/CareerEnhancement',
                },
              ],
            },
            {
              path: '/resource/program',
              name: 'ITS Programs',
              icon: 'cluster',
              routes: [
                {
                  path: '/resource/program/reporting',
                  name: 'Reporting',
                  icon: 'rise',
                  component: './Resource/ProgramReporting',
                },
                {
                  path: '/resource/program/profile',
                  name: 'Program Information',
                  icon: 'profile',
                  component: './Resource/ProgramInformation',
                },
                {
                  path: '/resource/program/career-track',
                  name: 'Employee Career Track',
                  icon: 'environment',
                  component: './Resource/EmployeesCareerTrack',
                },
              ],
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
  },
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, _, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackPlugin,
  /*
  proxy: {
    '/server/api/': {
      target: 'https://preview.pro.ant.design/',
      changeOrigin: true,
      pathRewrite: { '^/server': '' },
    },
  },
  */
};
