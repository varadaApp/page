import React from 'react';
import { Card, Row, Col, Divider, Icon, Form, Upload, message, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

const titleStyle = {
  fontSize: '32px',
  color: 'black',
  fontWeight: 600,
  lineHeight: '40px',
  marginBottom: '20px',
  paddingBottom: '10px',
};

const labelStyle = {
  fontSize: '24px',
  color: 'black',
  fontWeight: 500,
  letterSpacing: '0.5px',
};

const valueStyle = {
  marginLeft: '20px',
  color: '#525257',
  fontWeight: 600,
  fontSize: '18px',
  paddingLeft: '10px',
};

const editStyle = {
  color: '#525257',
  fontWeight: 600,
  fontSize: '18px',
  marginLeft: '5px',
};

const profileMessageHeaderStyle = {
  fontSize: '21px',
  color: '#525257',
  fontWeight: 600,
};

const profileMessageContentStyle = {
  fontSize: '16px',
  color: '#525257 ',
};

const profileMessageContainerStyle = {
  padding: '20px',
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
    label: 'Title',
    value: 'ASP.NET Developer',
  },
  {
    label: 'Program Name',
    value: 'Department of Defense Space Program',
  },
  {
    label: 'Program Position',
    value: 'Senior Software Engineer',
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
    label: 'Current Clearance',
    value: 'Top Secret',
  },
];

export default () => (
  <PageHeaderWrapper>
    <Card>
      <Row gutter={[8, 8]}>
        <Col xs={1} />
        <Col xs={22}>
          <h1 style={titleStyle}>Profile details</h1>
          <Divider />
          <Form {...formItemLayout}>
            <Row gutter={[8, 8]}>
              <Col xs={16}>
                {data.map(d => (
                  <Form.Item style={{ fontSize: '16px', alignItems: 'center' }}>
                    <p style={labelStyle}>{d.label}</p>
                    <Row>
                      <Col xs={20}>
                        <p style={valueStyle} className="ant-form-text">
                          {d.value}
                        </p>
                      </Col>
                      <Col xs={4}>
                        <Icon type="edit" />
                        <span style={editStyle}>Edit</span>
                      </Col>
                    </Row>
                  </Form.Item>
                ))}
              </Col>
              <Col xs={8}>
                <div style={{ width: '100%' }}>
                  <img
                    style={{ width: '100%' }}
                    src="https://cdn.dribbble.com/users/79571/screenshots/4407347/swingvy_all_illustrations.png"
                    alt=""
                  />
                </div>
                <div style={profileMessageContainerStyle}>
                  <p style={profileMessageHeaderStyle}>Your profile document</p>
                  <p style={profileMessageContentStyle}>
                    Depending on your industry and the type of job you are interested, a resume can
                    be a great way to highlight your skills and experience in a manner that is more
                    visually appealing and engaging.
                  </p>
                  <Upload {...props}>
                    <Button type="primary">
                      <Icon type="upload" /> Click to Upload Resume
                    </Button>
                  </Upload>
                </div>
              </Col>
            </Row>
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
        <Col xs={1} />
      </Row>
    </Card>
  </PageHeaderWrapper>
);
