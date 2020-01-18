import React from 'react';
import { Card, Typography, Alert, Icon, Form, Upload, message, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
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

export default () => (
  <PageHeaderWrapper>
    <Card>
      <h1>Sidney's Profile</h1>
      <Form {...formItemLayout}>
        <Form.Item label="Title:">
          <span className="ant-form-text">ASP.NET Developer</span>
        </Form.Item>
        <Form.Item label="Program Name:">
          <span className="ant-form-text">Department of Defense Space Program</span>
        </Form.Item>
        <Form.Item label="Program Position:">
          <span className="ant-form-text">Senior Software Engineer</span>
        </Form.Item>
        <Form.Item label="Program Location:">
          <span className="ant-form-text">Washington, D.C.</span>
        </Form.Item>
        <Form.Item label="Current Salary:">
          <span className="ant-form-text">$110,000</span>
        </Form.Item>
        <Form.Item label="Current Clearance:">
          <span className="ant-form-text">Top Secret</span>
        </Form.Item>
      </Form>
      <Upload {...props}>
        <Button type="primary">
          <Icon type="upload" /> Click to Upload Resume
        </Button>
      </Upload>
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
