/* eslint-disable react/no-unused-state */
import React from 'react';
import { Card, Alert, Icon, Divider } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { trainingData } from './Utils';

import 'react-table/react-table.css';

class Strategic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: trainingData(),
    };
  }

  render() {
    return (
      <PageHeaderWrapper>
        <Card>
          <div className="screen-header">
            <h1 className="page-title">Your Strategic Practice Areas</h1>
          </div>
          <div style={{ display: 'flex', margin: 20, padding: 10 }}>
            <Icon style={{ fontSize: 35 }} type="bulb" /> 
            <div style={{ width: '80%', paddingLeft: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <Divider />
          <Alert
            message="Articles. Business Development. Mentorship. Market Capture."
            type="success"
            showIcon
            banner
            style={{
              margin: -12,
              marginBottom: 24,
            }}
          />

          <p
            style={{
              textAlign: 'center',
              marginTop: 24,
            }}
          >
            We <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" spin /> Sidney
          </p>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Strategic;
