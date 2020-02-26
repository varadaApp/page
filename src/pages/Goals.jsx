/* eslint-disable global-require */
import React from 'react';
import { Card, Typography, Icon, Row, Col, Input, Form, Divider, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import GoalList from './common-components/GoalList';

const { Text } = Typography;

const newGoalContainerStyle = {
  backgroundColor: '#f0f2f5',
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
          <Divider />
          <Card
            title={
              <Text
                style={{
                  fontSize: '16px',
                  color: 'black',
                }}
              >
                NOTIFICATION:
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
              width: '50%',
            }}
            bodyStyle={{
              borderWidth: '0px',
              color: 'black',
              fontSize: '13px',
            }}
          >
            Apply to new position, your current program ends July 2020
          </Card>
          {/* <div style={headerContainerStyle}>
            <div style={headerContentContainerStyle}>
              <div>
                <p style={subHeaderStyle}>
                  Apply to new position, your current program ends July 2020
                </p>
              </div>
            </div>
          </div> */}
          <Row gutter={[8, 8]}>
            <Col xs={16} span={18}>
              <GoalList
                list={[
                  'Complete Splunk certification in 2020!',
                  'Sign up for virtual manager training.',
                  'Explore career paths in satelite networks.',
                ]}
              />
            </Col>
            <Col xs={1} />
            <Col xs={7}>
              <div style={newGoalContainerStyle}>
                <div style={{ width: '100%' }}>
                  <img
                    style={{ width: '100%' }}
                    src={require('../assets/varada-goals.png')}
                    alt=""
                  />
                </div>
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
                  </Form>
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      width: '100%',
                      borderTop: '1px solid #e9e9e9',
                      padding: '10px 16px',
                      background: '#fff',
                      textAlign: 'right',
                    }}
                  >
                    <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                      Cancel
                    </Button>
                    <Button onClick={this.onClose} type="primary">
                      Submit
                    </Button>
                  </div>
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
