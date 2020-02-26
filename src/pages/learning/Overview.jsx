import React from 'react';
import {
  Card,
  Typography,
  Icon,
  Row,
  Col,
  Checkbox,
  Select,
  DatePicker,
  Drawer,
  Form,
  Button,
  Input,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import ToDoList from '../common-components/ToDoList';
import GoalList from '../common-components/GoalList';

const morningIcon = 'https://i.imgur.com/h4d6GDR.png';
const afternoonIcon = 'https://i.imgur.com/Ti1XFhK.png';
const eveningIcon = 'https://i.imgur.com/ahw0hUo.png';

const hour = new Date().getHours();

const greeting = `Good ${(hour < 12 && 'morning') || (hour < 18 && 'afternoon') || 'evening'}`;
const greetingIcon = (hour < 12 && morningIcon) || (hour < 18 && afternoonIcon) || eveningIcon;
class Overview extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const thingsToDo = [
      {
        title: 'Reminder',
        content:
          'Have you signed up for your training for your training yet yet for your training yet?',
      },
      {
        title: '',
        content: 'There are new job openings for your desired career track...',
      },
    ];

    const goals = [
      'Complete Splunk certification in 2020!',
      'Sign up for virtual manager training.',
      'Explore career paths in satelite networks.',
    ];

    const { getFieldDecorator } = this.props.form;
    return (
      <PageHeaderWrapper>
        <Card>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '100px' }}>
              <img style={{ width: '100%' }} src={greetingIcon} alt="" />
            </div>
          </div>
          <Typography
            style={{
              fontWeight: 600,
              fontSize: '31px',
              letterSpacing: '0.1px',
              color: 'black',
              textAlign: 'center',
            }}
          >
            {greeting}, Sidney
          </Typography>
          <Typography style={{ textAlign: 'center' }}>
            <a style={{ color: 'black', marginRight: '5px' }}>Have any questions? </a>
            <a href="#">Visit Help Center</a>
          </Typography>
          <div
            style={{
              borderRadius: 5,
              backgroundColor: 'rgb(240, 242, 245)',
              margin: 24,
              padding: 24,
            }}
          >
            <Typography
              style={{
                fontSize: '28px',
                color: 'black',
                borderWidth: '0px',
              }}
            >
              My current status is:
            </Typography>
            <div>
              <div style={{ padding: 10 }}>
                <Checkbox>
                  <span style={{ fontSize: 16, color: 'black' }}>
                    Interested in Growth (ie. New Certification and/or Training)
                  </span>
                </Checkbox>
              </div>
              <div style={{ padding: 10 }}>
                <Checkbox>
                  <span style={{ fontSize: 16, marginRight: 10, color: 'black' }}>
                    Losing Coverage:
                  </span>
                  <DatePicker size="small" format="DD/MM/YYYY" />
                </Checkbox>
              </div>
              <div style={{ padding: 10 }}>
                <Checkbox>
                  <span style={{ fontSize: 16, marginRight: 10, color: 'black' }}>
                    Location Change:
                  </span>
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a Location"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Select.Option value="0">Northern Virginia</Select.Option>
                    <Select.Option value="1">Washington D.C.</Select.Option>
                    <Select.Option value="2">Maryland</Select.Option>
                    <Select.Option value="3">Hawaii</Select.Option>
                  </Select>
                </Checkbox>
              </div>
            </div>
          </div>
          {/* <Divider
            orientation="center"
            style={{
              marginTop: '30px',
            }}
            type="horizontal"
          >
            {managementModules.map(m => (
              <Button
                style={{
                  marginLeft: '5px',
                  marginRight: '5px',
                  height: '50px',
                }}
              >
                <Link to={m.path}>
                  <Text
                    style={{
                      fontSize: '18px',
                    }}
                  >
                    {m.title}
                  </Text>
                </Link>
              </Button>
            ))}
          </Divider> */}
          <Row gutter={[8, 8]}>
            <Col xs={12} span={6}>
              <ToDoList list={thingsToDo} />
            </Col>
            <Col xs={12} span={18}>
              <GoalList list={goals} showDrawer={this.showDrawer} />
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
        <Drawer title="Set a New Goal" onClose={this.onClose} visible={this.state.visible}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Your New Goal:">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: 'Set a New Goal for Yourself!',
                      },
                    ],
                  })(<Input.TextArea rows={4} placeholder="Set a New Goal for Yourself!" />)}
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
        </Drawer>
      </PageHeaderWrapper>
    );
  }
}

export default connect(() => ({}))(Form.create()(Overview));
