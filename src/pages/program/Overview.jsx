import React from 'react';
import {
  Card,
  Typography,
  Icon,
  Row,
  Col,
  Drawer,
  Checkbox,
  DatePicker,
  Select,
  Form,
  Button,
  Input,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import ToDoList from '../common-components/ToDoList';
import GoalList from '../common-components/GoalList';
import Alerts from '../common-components/Alerts';
import ProgramGoalList from '../common-components/ProgramGoalList';

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
    const alerts = [
      {
        title: '',
        content: 'Employee Sharyn Ballard has selected a new primary desired career track...',
      },
      {
        title: '',
        content: 'Reminder: Have you followed up with Emmitt Dugas with his AWS training?',
      },
    ];

    const goals = [
      'Increase the Program Staffing by 10% in 2020!',
      'Help each employee complete at least one certification in 2020!',
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
          <Row gutter={[8, 8]}>
            <Col xs={12} span={6}>
              <Alerts list={alerts} />
            </Col>
            <Col xs={12} span={18}>
              <ProgramGoalList list={goals} showDrawer={this.showDrawer} />
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
