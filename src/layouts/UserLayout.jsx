import { DefaultFooter, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import DocumentTitle from 'react-document-title';
import Link from 'umi/link';
import React from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi-plugin-react/locale';
import { Row, Col, Divider } from 'antd';
import logo from '../assets/Varada.jpg';
import styles from './UserLayout.less';

const UserLayout = props => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { breadcrumb } = getMenuData(routes);
  return (
    <DocumentTitle
      title={getPageTitle({
        pathname: location.pathname,
        breadcrumb,
        formatMessage,
        ...props,
      })}
    >
      <Row gutter={[8, 8]}>
        <Col xs={16}>
          <img
            className={styles.loginImage}
            src="https://cdn.dribbble.com/users/1312159/screenshots/5825513/lunamik-team-work.png"
            alt=""
          />
        </Col>
        <Col xs={8}>
          <div className={styles.container}>
            <div style={{ backgroundColor: '#ffffff' }}>
              <div className={styles.logoContainer}>
                <Link to="/">
                  <img alt="logo" className={styles.logo} src={logo} />
                  <span className={styles.title}>Career Planning Automation</span>
                </Link>
              </div>
              <Divider style={{ height: '2px' }} />
              <div className={styles.content}>{children}</div>
              <DefaultFooter
                copyright="2019"
                style={{ backgroundColor: '#ffffff' }}
                links={[
                  {
                    key: 'Varada Consulting',
                    title: 'Varada Consulting',
                    href: 'https://www.varadaconsulting.com',
                    blankTarget: true,
                  },
                ]}
              />
            </div>
          </div>
        </Col>
      </Row>
    </DocumentTitle>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
