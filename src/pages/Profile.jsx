/* eslint-disable global-require */
import React from 'react';
import { Card, Row, Col, Divider, Icon, Form, Upload, message, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

const labelStyle = {
  fontSize: '22px',
  color: 'black',
  fontWeight: 500,
  letterSpacing: '0.5px',
  backgroundColor: '#dfdaeb',
  padding: '3px 0px 3px 20px',
};

const valueStyle = {
  marginLeft: '20px',
  color: '#525257',
  fontWeight: 600,
  fontSize: '16px',
  paddingLeft: '10px',
};

const editStyle = {
  color: '#525257',
  fontWeight: 600,
  fontSize: '16px',
  marginLeft: '5px',
};

const profileMessageHeaderStyle = {
  fontSize: '19px',
  color: '#525257',
  fontWeight: 600,
};

const profileMessageContentStyle = {
  fontSize: '14px',
  color: '#525257 ',
};

const profileMessageContainerStyle = {
  padding: '20px',
  borderRadius: '5px',
  backgroundColor: '#f0f2f5',
  borderColor: '#dcdcdc',
  borderWidth: '1px',
};

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const data = [
  {
    label: 'Position Title',
    value: 'Windows Server System Admin',
  },
  {
    label: 'Labor Category and Level',
    value: 'Server System Admin Level 2',
  },
  {
    label: 'Current Career Track',
    value: 'System Admin Level 2',
  },
  {
    label: 'Program Name',
    value: 'Department of Defense Space Program',
  },
  {
    label: 'Program Location',
    value: 'Washington, D.C.',
  },
  {
    label: 'Current Salary',
    value: '$110,000',
  },
  {
    label: 'Current Certifications',
    value: 'A+, Security+, MCSA, Splunk',
  },
  {
    label: 'Current Clearance',
    value: 'Secret',
  },
];

export default () => (
  <PageHeaderWrapper>
    <Card>
      <div className="screen-header">
        <h1 className="page-title">Your Profile</h1>
      </div>
      <div style={{ display: 'flex', margin: 20, padding: 10 }}>
        <Icon style={{ fontSize: 35 }} type="bulb" /> 
        <div style={{ width: '80%', paddingLeft: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </div>
      </div>
      <Row style={{marginRight: 20}} gutter={[8, 8]}>
        <Col>
          <Divider />
          <Form {...formItemLayout}>
            {data.map(d => (
              <Form.Item style={{ fontSize: '14px', alignItems: 'center' }}>
                <p style={labelStyle}>{d.label}</p>
                <Row>
                  <Col xs={20}>
                    <p style={valueStyle} className="ant-form-text">
                      {d.value}
                    </p>
                  </Col>
                  <Col xs={4}>
                    {/* <Icon type="edit" />
                        <span style={editStyle}>Edit</span> */}
                  </Col>
                </Row>
              </Form.Item>
            ))}
          </Form>
          <p
            style={{
              textAlign: 'center',
              marginTop: 24,
            }}
          >
            We <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" spin /> Sidney
          </p>
        </Col>
      </Row>
    </Card>
  </PageHeaderWrapper>
);
