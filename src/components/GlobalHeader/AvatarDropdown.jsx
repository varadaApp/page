import { Avatar, Icon, Menu, Spin } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

class AvatarDropdown extends React.Component {
  onMenuClick = event => {
    const { key } = event;
    if (key === 'logout') {
      const { dispatch } = this.props;

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }

    if (key === 'program') {
      router.push('program');
    }
    if (key === 'learning') {
      router.push('learning');
    }
    if (key === 'resource') {
      router.push('resource');
    }
    router.push(`/account/${key}`);
  };

  render() {
    const {
      currentUser = {
        avatar: '',
        name: 'Sidney Watkins',
      },
      menu,
    } = this.props;
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        {menu && (
          <Menu.Item key="center">
            <Icon type="user" />
            <FormattedMessage id="menu.account.center" defaultMessage="account center" />
          </Menu.Item>
        )}
        {menu && (
          <Menu.Item key="settings">
            <Icon type="setting" />
            <FormattedMessage id="menu.account.settings" defaultMessage="account settings" />
          </Menu.Item>
        )}
        {menu && <Menu.Divider />}

        <Menu.Item className={styles.menuItem} key="program">
          <Icon type="control" />
          <FormattedMessage id="menu.program" defaultMessage="program" />
        </Menu.Item>

        <Menu.Item className={styles.menuItem} key="learning">
          <Icon type="control" />
          <FormattedMessage id="menu.learning" defaultMessage="learning" />
        </Menu.Item>

        <Menu.Item className={styles.menuItem} key="resource">
          <Icon type="control" />
          <FormattedMessage id="menu.resource" defaultMessage="resource" />
        </Menu.Item>

        <Menu.Item className={styles.menuItem} key="logout">
          <Icon type="logout" />
          <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
        </Menu.Item>
      </Menu>
    );
    return currentUser && currentUser.name ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account} ${styles.userContainer}`}>
          <Avatar style={{ backgroundColor: '#592c82' }} icon="user" />
          <span className={styles.name}>{currentUser.name}</span>
        </span>
      </HeaderDropdown>
    ) : (
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    );
  }
}

/* export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(AvatarDropdown); */
export default connect(() => ({}))(AvatarDropdown);
