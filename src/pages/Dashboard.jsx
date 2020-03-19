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
  Checkbox,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { connect } from 'dva';
import Link from 'umi/link';
import moment from 'moment';

import ToDoList from './common-components/ToDos';
import GoalList from './common-components/Goals';

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
        title: 'Reminder',
        content: 'There are new job openings for your desired career track...',
        to: '/employee/positionSearch',
      },
      {
        title: '',
        content:
          'Have you signed up for your training for your training yet yet for your training yet?',
        to: '/employee/growth/trainings',
      },
    ];

    const goals = [
      {
        to: '/employee/manage',
        content: 'Prepare for and schedule VMWare Certification exam (Interest Showed).',
      },
      {
        to: '/employee/manage',
        content: 'Enroll in Systems Engineer Level 2 Training Class (Interest Showed).',
      },
      {
        to: '/employee/manage',
        content: 'Begin System Administration Level 3 Training Course (Training Scheduled).',
      },
      {
        to: '/employee/manage',
        content: 'Complete Windows Server Administration Level 3 Training (Currently in Progress).',
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
            <div style={{ width: '100px' }}>
              <img style={{ width: '100%' }} src={greetingIcon} alt="" />
            </div>
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
                fontSize: '30px',
                color: 'black',
                borderWidth: '0px',
              }}
            >
              My current status is:
            </Typography>
            <div>
              <div style={{ padding: 10 }}>
                <Checkbox>
                  <span style={{ fontSize: 18, color: 'black' }}>
                    Interested in Growth (ie. New Certification, New Training, and/or Career Track
                    Change)
                  </span>
                </Checkbox>
              </div>
              <div style={{ padding: 10 }}>
                <Checkbox defaultChecked={true}>
                  <span style={{ fontSize: 18, marginRight: 10, color: 'black' }}>
                    Losing Coverage:
                  </span>
                  <DatePicker
                    defaultValue={moment('07/23/2020', 'MM/DD/YYYY')}
                    size={'small'}
                    format={'MM/DD/YYYY'}
                  />
                </Checkbox>
              </div>
              <div style={{ padding: 10 }}>
                <Checkbox>
                  <span style={{ fontSize: 18, marginRight: 10, color: 'black' }}>
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
                    <Option value="0">Northern Virginia</Option>
                    <Option value="1">Washington D.C.</Option>
                    <Option value="2">Maryland</Option>
                    <Option value="3">Hawaii</Option>
                  </Select>
                  <Select showSearch style={{ width: 100 }} placeholder="Radius">
                    <Option value="0">&nbsp;</Option>
                    <Option value="1">5</Option>
                    <Option value="2">10</Option>
                    <Option value="3">20</Option>
                    <Option value="4">30</Option>
                    <Option value="5">40</Option>
                    <Option value="6">50</Option>
                    <Option value="7">60</Option>
                    <Option value="8">75</Option>
                    <Option value="9">100</Option>
                    <Option value="10">150</Option>
                    <Option value="11">200</Option>
                  </Select>
                </Checkbox>
              </div>
            </div>
          </div>
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
          {/* <br></br>
          <div
            class="ant-layout-sider-children"
            style={{
              backgroundColor: '#fff',
            }}
          >
            <div
              class="ant-pro-sider-menu-logo"
              id="logo"
              style={{
                backgroundColor: '#fff',
              }}
            >
              <a href="/">
                <img
                  src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABECAMAAADtEXj5AAAAYFBMVEX///9ZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFivGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFja5/1NAAAAHnRSTlMAEBAgIDAwQEBQUGBgcICAkJCgoLCwwMDQ0ODg8PC+qsEdAAACZElEQVR42qXV7ZayIBAAYCXyJcOozFwXP+7/Ll8G0pEPl90z86MjCo8wDFZkgxXkkFNFJpZlqsgEIGQCEDIBCJkAhEz8FXnwjUghjcwT7dK7i37xw43lk7nIEaa3sleVTwyuaAfQsoTtFOeD75/nCOxUTzgLFjw/jm2McjNXkxOka24p6n6cxxr9Z3cqIYS5XKeVm0ddFGKXgZZ7T8Vun7SZU52eAws2tJN8BZQOtlman9QyFE4E12RiCO5p010nFtR+9u+x5EOYak1kpXGTt0WUi4fp5dJbpc5XbYv5KHBfO3fJ/A8vHqzqCMFqa9JV0q09MkhvOoiDKpG71/Dhh1zgO6boX0PvT4ZKC7q2xOodf7UGyDbvYmFSzDvNWMc4ka1vYz827eTnsgGBtbtjGcQJM4UHTqhucO22cXdqjetidhTGdSz9Em156lC607SV0mU874h5foUl2ks/7bzRwQaV42yQjTBxiQujV1Jw+w1pWh1/XV9mlEFWAlqYknwMbBt2doSLr9Js3O+JsxniECQgJWYm02+JcUbEXK/xhLXrLNE5At/tt8xyWHc0FivQDdpyELexkDCC8rv4QwJ0/Of+Vo4EAQNus0+EyHyHm0wOqUQI2/srJGJkvH7qsveOfevqtrzPMREj87dVbIEqG1J86r68jSERIqjcTkUcl+f6HIkACTrcL/sup+sz6oHPYwRT837dIN5v24yJPIKRJRAhE4CQCUDIBCBkAhAyAQiZAIRMAEImACETgJAJQMgEIGQCEDIBCJkAhEwAQiYAIROAkAlAyAQgZAIQMgEImTDIK0v8B9rT8hs1ax/8AAAAAElFTkSuQmCC"
                  alt="logo"
                ></img>
                <h1
                  style={{
                    backgroundColor: '#fff',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: '#fff',
                      color: '#592c82',
                    }}
                  >
                    CAREER
                  </span>
                  <span
                    style={{
                      backgroundColor: '#fff',
                      color: '#54565a',
                      fontWeight: '200',
                    }}
                  >
                    SIMPLE
                  </span>
                </h1>
              </a>
            </div>
          </div>
          <br />
          <br />
          <div
            class="ant-layout-sider-children"
            style={{
              backgroundColor: '#fff',
            }}
          >
            <div
              class="ant-pro-sider-menu-logo"
              id="logo"
              style={{
                backgroundColor: '#fff',
              }}
            >
              <a href="/">
                <img
                  src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABECAMAAADtEXj5AAAAYFBMVEX///9ZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFivGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFja5/1NAAAAHnRSTlMAEBAgIDAwQEBQUGBgcICAkJCgoLCwwMDQ0ODg8PC+qsEdAAACZElEQVR42qXV7ZayIBAAYCXyJcOozFwXP+7/Ll8G0pEPl90z86MjCo8wDFZkgxXkkFNFJpZlqsgEIGQCEDIBCJkAhEz8FXnwjUghjcwT7dK7i37xw43lk7nIEaa3sleVTwyuaAfQsoTtFOeD75/nCOxUTzgLFjw/jm2McjNXkxOka24p6n6cxxr9Z3cqIYS5XKeVm0ddFGKXgZZ7T8Vun7SZU52eAws2tJN8BZQOtlman9QyFE4E12RiCO5p010nFtR+9u+x5EOYak1kpXGTt0WUi4fp5dJbpc5XbYv5KHBfO3fJ/A8vHqzqCMFqa9JV0q09MkhvOoiDKpG71/Dhh1zgO6boX0PvT4ZKC7q2xOodf7UGyDbvYmFSzDvNWMc4ka1vYz827eTnsgGBtbtjGcQJM4UHTqhucO22cXdqjetidhTGdSz9Em156lC607SV0mU874h5foUl2ks/7bzRwQaV42yQjTBxiQujV1Jw+w1pWh1/XV9mlEFWAlqYknwMbBt2doSLr9Js3O+JsxniECQgJWYm02+JcUbEXK/xhLXrLNE5At/tt8xyWHc0FivQDdpyELexkDCC8rv4QwJ0/Of+Vo4EAQNus0+EyHyHm0wOqUQI2/srJGJkvH7qsveOfevqtrzPMREj87dVbIEqG1J86r68jSERIqjcTkUcl+f6HIkACTrcL/sup+sz6oHPYwRT837dIN5v24yJPIKRJRAhE4CQCUDIBCBkAhAyAQiZAIRMAEImACETgJAJQMgEIGQCEDIBCJkAhEwAQiYAIROAkAlAyAQgZAIQMgEImTDIK0v8B9rT8hs1ax/8AAAAAElFTkSuQmCC"
                  alt="logo"
                ></img>
                <h1
                  style={{
                    backgroundColor: '#fff',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: '#fff',
                      color: '#592c82',
                    }}
                  >
                    Career
                  </span>
                  <span
                    style={{
                      backgroundColor: '#fff',
                      color: '#54565a',
                      fontWeight: '200',
                    }}
                  >
                    Simple
                  </span>
                </h1>
              </a>
            </div>
          </div>
          <br />
          <br />
          <div
            class="ant-layout-sider-children"
            style={{
              backgroundColor: '#fff',
            }}
          >
            <div
              class="ant-pro-sider-menu-logo"
              id="logo"
              style={{
                backgroundColor: '#fff',
              }}
            >
              <a href="/">
                <img
                  src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABECAMAAADtEXj5AAAAYFBMVEX///9ZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFivGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFja5/1NAAAAHnRSTlMAEBAgIDAwQEBQUGBgcICAkJCgoLCwwMDQ0ODg8PC+qsEdAAACZElEQVR42qXV7ZayIBAAYCXyJcOozFwXP+7/Ll8G0pEPl90z86MjCo8wDFZkgxXkkFNFJpZlqsgEIGQCEDIBCJkAhEz8FXnwjUghjcwT7dK7i37xw43lk7nIEaa3sleVTwyuaAfQsoTtFOeD75/nCOxUTzgLFjw/jm2McjNXkxOka24p6n6cxxr9Z3cqIYS5XKeVm0ddFGKXgZZ7T8Vun7SZU52eAws2tJN8BZQOtlman9QyFE4E12RiCO5p010nFtR+9u+x5EOYak1kpXGTt0WUi4fp5dJbpc5XbYv5KHBfO3fJ/A8vHqzqCMFqa9JV0q09MkhvOoiDKpG71/Dhh1zgO6boX0PvT4ZKC7q2xOodf7UGyDbvYmFSzDvNWMc4ka1vYz827eTnsgGBtbtjGcQJM4UHTqhucO22cXdqjetidhTGdSz9Em156lC607SV0mU874h5foUl2ks/7bzRwQaV42yQjTBxiQujV1Jw+w1pWh1/XV9mlEFWAlqYknwMbBt2doSLr9Js3O+JsxniECQgJWYm02+JcUbEXK/xhLXrLNE5At/tt8xyWHc0FivQDdpyELexkDCC8rv4QwJ0/Of+Vo4EAQNus0+EyHyHm0wOqUQI2/srJGJkvH7qsveOfevqtrzPMREj87dVbIEqG1J86r68jSERIqjcTkUcl+f6HIkACTrcL/sup+sz6oHPYwRT837dIN5v24yJPIKRJRAhE4CQCUDIBCBkAhAyAQiZAIRMAEImACETgJAJQMgEIGQCEDIBCJkAhEwAQiYAIROAkAlAyAQgZAIQMgEImTDIK0v8B9rT8hs1ax/8AAAAAElFTkSuQmCC"
                  alt="logo"
                ></img>
                <h1
                  style={{
                    backgroundColor: '#fff',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: '#fff',
                      color: '#592c82',
                    }}
                  >
                    CAREER
                  </span>
                  <span
                    style={{
                      backgroundColor: '#fff',
                      color: '#54565a',
                      fontWeight: '200',
                    }}
                  >
                    simple
                  </span>
                </h1>
              </a>
            </div>
          </div>
          <br />
          <br />
          <div
            class="ant-layout-sider-children"
            style={{
              backgroundColor: '#fff',
            }}
          >
            <div
              class="ant-pro-sider-menu-logo"
              id="logo"
              style={{
                backgroundColor: '#fff',
              }}
            >
              <a href="/">
                <img
                  src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABECAMAAADtEXj5AAAAYFBMVEX///9ZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFivGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFhZK4KvGFja5/1NAAAAHnRSTlMAEBAgIDAwQEBQUGBgcICAkJCgoLCwwMDQ0ODg8PC+qsEdAAACZElEQVR42qXV7ZayIBAAYCXyJcOozFwXP+7/Ll8G0pEPl90z86MjCo8wDFZkgxXkkFNFJpZlqsgEIGQCEDIBCJkAhEz8FXnwjUghjcwT7dK7i37xw43lk7nIEaa3sleVTwyuaAfQsoTtFOeD75/nCOxUTzgLFjw/jm2McjNXkxOka24p6n6cxxr9Z3cqIYS5XKeVm0ddFGKXgZZ7T8Vun7SZU52eAws2tJN8BZQOtlman9QyFE4E12RiCO5p010nFtR+9u+x5EOYak1kpXGTt0WUi4fp5dJbpc5XbYv5KHBfO3fJ/A8vHqzqCMFqa9JV0q09MkhvOoiDKpG71/Dhh1zgO6boX0PvT4ZKC7q2xOodf7UGyDbvYmFSzDvNWMc4ka1vYz827eTnsgGBtbtjGcQJM4UHTqhucO22cXdqjetidhTGdSz9Em156lC607SV0mU874h5foUl2ks/7bzRwQaV42yQjTBxiQujV1Jw+w1pWh1/XV9mlEFWAlqYknwMbBt2doSLr9Js3O+JsxniECQgJWYm02+JcUbEXK/xhLXrLNE5At/tt8xyWHc0FivQDdpyELexkDCC8rv4QwJ0/Of+Vo4EAQNus0+EyHyHm0wOqUQI2/srJGJkvH7qsveOfevqtrzPMREj87dVbIEqG1J86r68jSERIqjcTkUcl+f6HIkACTrcL/sup+sz6oHPYwRT837dIN5v24yJPIKRJRAhE4CQCUDIBCBkAhAyAQiZAIRMAEImACETgJAJQMgEIGQCEDIBCJkAhEwAQiYAIROAkAlAyAQgZAIQMgEImTDIK0v8B9rT8hs1ax/8AAAAAElFTkSuQmCC"
                  alt="logo"
                ></img>
                <h1
                  style={{
                    backgroundColor: '#fff',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: '#fff',
                      color: '#592c82',
                    }}
                  >
                    career
                  </span>
                  <span
                    style={{
                      backgroundColor: '#fff',
                      color: '#54565a',
                      fontWeight: '200',
                    }}
                  >
                    simple
                  </span>
                </h1>
              </a>
            </div>
          </div>
          <br />
          <br /> */}
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
