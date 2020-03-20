import React from 'react';
import {
  Card,
  Typography,
  Alert,
  Icon,
  Menu,
  Spin,
  Row,
  Col,
  Badge,
  Drawer,
  Form,
  Button,
  Input,
  Select,
  DatePicker,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { connect } from 'dva';
import ToDoList from '../common-components/Todos';
import GoalList from '../common-components/Goals';

const morningIcon = 'https://i.imgur.com/h4d6GDR.png';
const afternoonIcon = 'https://i.imgur.com/Ti1XFhK.png';
const eveningIcon = 'https://i.imgur.com/ahw0hUo.png';

const hour = new Date().getHours();

const greeting = `Good ${(hour < 12 && 'morning') || (hour < 18 && 'afternoon') || 'evening'}`;
const greetingIcon = (hour < 12 && morningIcon) || (hour < 18 && afternoonIcon) || eveningIcon;
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userAsync: [], loading: true };
  }

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
  /*   componentDidMount() {
    this.getUserAsync();
  } */

  /*   async getUserAsync() {
    const response = await fetch('api/currentuser');
    const data = await response.json();
    this.setState({ userAsync: data, loading: false });
  } */

  render() {
    const {
      currentUser = {
        avatar: '',
        name: '',
      },
      menu,
    } = this.props;
    const thingsToDo = [
      {
        title: '',
        content:
          'Have you signed up for your training for your training yet yet for your training yet?',
        to: '/program/employee/career-track',
      },
      {
        title: 'Reminder',
        content: 'Have you followed up with Emmitt Dugas with his AWS training?',
        to: '/program/profile',
      },
    ];

    const goals = [
      {
        content: 'Increase the Program Staffing by 10% in 2020!',
        to: '/program/dashboard',
      },
      {
        content: 'Help each employee complete at least one certification in 2020!',
        to: '/program/dashboard',
      },
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
              fontSize: '33px',
              letterSpacing: '0.1px',
              color: 'black',
              textAlign: 'center',
            }}
          >
            {greeting}, Sidney
          </Typography>
          <Row style={{marginRight: 20}} gutter={[8, 8]}>
            <Col xs={12} span={6}>
              <ToDoList title="Alerts" list={thingsToDo} />
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

    /*     console.log('user fetch async', this.state);
    return currentUser && currentUser.name && this.state.userAsync ? (
      <PageHeaderWrapper>
        <Card>
          <h1>
            {greeting}, {currentUser.name}
          </h1>

          <p
            style={{
              textAlign: 'center',
              marginTop: 24,
            }}
          >
            We <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" spin /> {currentUser.name}
          </p>
        </Card>
      </PageHeaderWrapper>
    ) : (
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    ); */
  }
}

//const App = Form.create()(Dashboard);
/* export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(Dashboard); */

export default connect(({}) => ({}))(Form.create()(Dashboard));
