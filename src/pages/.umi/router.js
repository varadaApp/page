import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from 'D:/careerApp/src/pages/.umi/LocaleWrapper.jsx';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    redirect: '/employee/dashboard',
    exact: true,
  },
  {
    path: '/account/program',
    redirect: '/program/dashboard',
    exact: true,
  },
  {
    path: '/account/learning',
    redirect: '/learning/dashboard',
    exact: true,
  },
  {
    path: '/account/resource',
    redirect: '/resource/dashboard',
    exact: true,
  },
  {
    path: '/user',
    component: require('../../layouts/UserLayout').default,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: require('../user/login').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/employee',
    component: require('../../layouts/SecurityLayout').default,
    routes: [
      {
        path: '/employee',
        component: require('../../layouts/BasicLayout').default,
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/employee',
            redirect: '/employee/dashboard',
            exact: true,
          },
          {
            path: '/employee/dashboard',
            name: 'dashboard',
            icon: 'dashboard',
            component: require('../Dashboard').default,
            exact: true,
          },
          {
            path: '/employee/goals',
            name: 'Goals',
            icon: 'rise',
            component: require('../Goals').default,
            exact: true,
          },
          {
            path: '/employee/profile',
            name: 'profile',
            icon: 'user',
            component: require('../Profile').default,
            exact: true,
          },
          {
            path: '/employee/current',
            name: 'Current Career Track',
            icon: 'environment',
            component: require('../CurrentCareerTrack').default,
            exact: true,
          },
          {
            path: '/employee/manage',
            name: 'Career Management',
            icon: 'schedule',
            component: require('../CareerManagement').default,
            exact: true,
          },
          {
            path: '/employee/careerTrackSearch',
            name: 'Career Track Search',
            icon: 'search',
            component: require('../CareerTrackSearch').default,
            exact: true,
          },
          {
            path: '/employee/positionSearch',
            name: 'Open Positions',
            icon: 'user-add',
            component: require('../PositionSearch').default,
            exact: true,
          },
          {
            path: '/employee/careerEnhancement',
            name: 'Career Enhancement',
            icon: 'rocket',
            component: require('../CareerEnhancement').default,
            exact: true,
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
                component: require('../Skills').default,
                exact: true,
              },
              {
                path: '/employee/growth/certifications',
                name: 'Certifications',
                icon: 'file-done',
                component: require('../Certifications').default,
                exact: true,
              },
              {
                path: '/employee/growth/trainings',
                name: 'Trainings',
                icon: 'coffee',
                component: require('../Trainings').default,
                exact: true,
              },
              {
                path: '/employee/growth/strategic',
                name: 'Strategic Practice Areas',
                icon: 'cluster',
                component: require('../Strategic').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            component: require('../404').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/program',
    component: require('../../layouts/SecurityLayout').default,
    routes: [
      {
        path: '/program',
        component: require('../../layouts/BasicLayout').default,
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/program',
            redirect: '/program/dashboard',
            exact: true,
          },
          {
            path: '/program/dashboard',
            name: 'Program Dashboard',
            icon: 'dashboard',
            component: require('../Program/Dashboard').default,
            exact: true,
          },
          {
            path: '/program/reporting',
            name: 'Reporting',
            icon: 'rise',
            component: require('../Program/Reporting').default,
            exact: true,
          },
          {
            path: '/program/profile',
            name: 'Program Information',
            icon: 'cluster',
            component: require('../Program/ProgramInformation').default,
            exact: true,
          },
          {
            path: '/program/employee',
            name: 'Employee Development',
            icon: 'compass',
            routes: [
              {
                path: '/program/employee/career-track',
                name: 'Career Track',
                icon: 'environment',
                component: require('../Program/EmployeesCareerTrack').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/program/employeeSearch',
            name: 'Employee Search',
            icon: 'search',
            component: require('../Program/EmployeeSearch').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/learning',
    component: require('../../layouts/SecurityLayout').default,
    routes: [
      {
        path: '/learning',
        component: require('../../layouts/BasicLayout').default,
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/learning',
            redirect: '/learning/dashboard',
            exact: true,
          },
          {
            path: '/learning/dashboard',
            name: 'ITS Learning Dashboard',
            icon: 'dashboard',
            component: require('../Learning/Dashboard').default,
            exact: true,
          },
          {
            path: '/learning/reporting',
            name: 'ITS Reporting',
            icon: 'rise',
            component: require('../Learning/Reporting').default,
            exact: true,
          },
          {
            path: '/learning/manage',
            name: 'Manage Learning',
            icon: 'compass',
            routes: [
              {
                path: '/learning/manage/skills',
                name: 'Skills',
                icon: 'trophy',
                component: require('../Learning/Skills').default,
                exact: true,
              },
              {
                path: '/learning/manage/certifications',
                name: 'Certifications',
                icon: 'file-done',
                component: require('../Learning/Certifications').default,
                exact: true,
              },
              {
                path: '/learning/manage/trainings',
                name: 'Trainings',
                icon: 'coffee',
                component: require('../Learning/Trainings').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            component: () =>
              React.createElement(
                require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/resource',
    component: require('../../layouts/SecurityLayout').default,
    routes: [
      {
        path: '/resource',
        component: require('../../layouts/BasicLayout').default,
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/resource',
            redirect: '/resource/dashboard',
            exact: true,
          },
          {
            path: '/resource/dashboard',
            name: 'ITS Resource Dashboard',
            icon: 'dashboard',
            component: require('../Resource/Dashboard').default,
            exact: true,
          },
          {
            path: '/resource/enterpriseReporting',
            name: 'ITS Enterprise Reporting',
            icon: 'rise',
            component: require('../Resource/EnterpriseReporting').default,
            exact: true,
          },
          {
            path: '/resource/employeeSearch',
            name: 'ITS Employee Search',
            icon: 'search',
            component: require('../Resource/EmployeeSearch').default,
            exact: true,
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
                component: require('../Resource/EmployeeReporting').default,
                exact: true,
              },
              {
                path: '/resource/employee/profile',
                name: 'Profile',
                icon: 'user',
                component: require('../Resource/Profile').default,
                exact: true,
              },
              {
                path: '/resource/employee/current',
                name: 'Current Career Track',
                icon: 'environment',
                component: require('../Resource/CurrentCareerTrack').default,
                exact: true,
              },
              {
                path: '/resource/employee/manage',
                name: 'Career Management',
                icon: 'schedule',
                component: require('../Resource/CareerManagement').default,
                exact: true,
              },
              {
                path: '/resource/employee/careerTrackSearch',
                name: 'Career Track Search',
                icon: 'search',
                component: require('../Resource/CareerTrackSearch').default,
                exact: true,
              },
              {
                path: '/resource/employee/positionSearch',
                name: 'Open Positions',
                icon: 'user-add',
                component: require('../Resource/PositionSearch').default,
                exact: true,
              },
              {
                path: '/resource/employee/careerEnhancement',
                name: 'Career Enhancement',
                icon: 'rocket',
                component: require('../Resource/CareerEnhancement').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
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
                component: require('../Resource/ProgramReporting').default,
                exact: true,
              },
              {
                path: '/resource/program/profile',
                name: 'Program Information',
                icon: 'profile',
                component: require('../Resource/ProgramInformation').default,
                exact: true,
              },
              {
                path: '/resource/program/career-track',
                name: 'Employee Career Track',
                icon: 'environment',
                component: require('../Resource/EmployeesCareerTrack').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            component: () =>
              React.createElement(
                require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: require('../404').default,
    exact: true,
  },
  {
    component: () =>
      React.createElement(
        require('D:/careerApp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
