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
    const { getFieldDecorator } = this.props.form;
    const thingsToDo = [
      {
        title: '',
        content: '10 New Employees are interested in Juniper training',
        to: '/learning/reporting/training-interest',
      },
      {
        title: '',
        content: 'An Employee completed Security+',
        to: '/learning/reporting/certification-inventory',
      },
      {
        title: '',
        content: 'Have you updated the list of trainings with the latest 2020 offerings?',
        to: '/learning/manage/trainings',
      },
    ];
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
          <Row gutter={[8, 8]}>
            <Col xs={12} span={6}>
              <ToDoList list={thingsToDo} />
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
