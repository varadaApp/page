/* eslint-disable global-require */
import React from 'react';
import { Card, Typography, Icon, Row, Col, Input, Form, Divider, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import GoalList from './common-components/GoalList';

const { Text } = Typography;

const newGoalContainerStyle = {
  backgroundColor: '#f0f2f5',
  padding: '20px',
};

const newGoalHeaderStyle = {
  fontSize: '19px',
  fontWeight: 600,
  color: '#525257',
  paddingTop: '10px',
};
class Goals extends React.Component {
  state = { visible: false };

  render() {
    console.log(this.state.visible);
    return (
      <PageHeaderWrapper>
        <Card>
          <div className="screen-header">
            <h1 className="page-title">Your Goals</h1>
          </div>
          <div style={{ display: 'flex', margin: 20, padding: 10 }}>
            <Icon style={{ fontSize: 35 }} type="bulb" /> 
            <div style={{ width: '80%', paddingLeft: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <Divider />
          <Row gutter={[18, 18]}>
            <Col xs={16}>
              <Card
                title={
                  <Text
                    style={{
                      fontSize: '16px',
                      color: 'black',
                    }}
                  >
                    Overarching Fiscal Year Goals:
                  </Text>
                }
                hoverable
                type="inner"
                headStyle={{
                  borderWidth: '0px',
                  backgroundColor: '#fef4d2',
                  marginBottom: '-20px',
                }}
                style={{
                  backgroundColor: '#fef4d2',
                  borderRadius: '10px',
                  margin: '15px',
                  width: '100%',
                }}
                bodyStyle={{
                  borderWidth: '0px',
                  color: 'black',
                  fontSize: '13px',
                }}
              >
                <ul>
                  <li>Apply to new position, your current program ends July 2020.</li>
                  <li>Career track change to System Engineer from System Administration.</li>
                </ul>
              </Card>
              <h1 style={{ marginTop: '20px' }}>Quarterly Goals:</h1>
              <GoalList
                list={[
                  'Complete Splunk certification in 2020!',
                  'Sign up for virtual manager training.',
                  'Explore career paths in satelite networks.',
                ]}
              />
            </Col>
            <Col xs={7}>
              <div style={newGoalContainerStyle}>
                <div className="goals-right-container">
                  <p style={newGoalHeaderStyle}>Set a new goal</p>
                  <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Form.Item label="Your New Goal:">
                          <Input.TextArea rows={5} placeholder="Set a New Goal for Yourself!" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                        Cancel
                      </Button>
                      <Button onClick={this.onClose} type="primary">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
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

export default connect(() => ({}))(Form.create()(Goals));
