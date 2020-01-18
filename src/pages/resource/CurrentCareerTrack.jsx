import React from 'react';
import {
  Card,
  Typography,
  Alert,
  Descriptions,
  Row,
  Col,
  Icon,
  Divider,
  Modal,
  Button,
  Steps,
  Checkbox,
  AutoComplete,
  Select,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';

class CurrentCareerTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      positionsLoading: false,
      positionsVisible: false,
      loading2: false,
      visible2: false,
      positionsLoading2: false,
      positionsVisible2: false,
      loading3: false,
      visible3: false,
      positionsLoading3: false,
      positionsVisible3: false,
      programValue: 'Department of Homeland Security Satellite Network',
      loading4: false,
      visible4: false,
      positionsLoading4: false,
      positionsVisible4: false,
      loading5: false,
      visible5: false,
      positionsLoading5: false,
      positionsVisible5: false,
      programValue2: 'Department of Defense Space Program',
    };
    this.handleProgramChange = this.handleProgramChange.bind(this);
    this.handleProgramSelect = this.handleProgramSelect.bind(this);
    this.handleProgramChange2 = this.handleProgramChange2.bind(this);
    this.handleProgramSelect2 = this.handleProgramSelect2.bind(this);
  }

  handleProgramChange(value) {
    this.setState({ programValue: value });
  }
  handleProgramSelect(value) {
    this.setState({ programValue: value });
  }
  handleProgramChange2(value) {
    this.setState({ programValue2: value });
  }
  handleProgramSelect2(value) {
    this.setState({ programValue2: value });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 500);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  showPositionsModal = () => {
    this.setState({
      positionsVisible: true,
    });
  };

  handlePositionsOk = () => {
    this.setState({ positionsLoading: true });
    setTimeout(() => {
      this.setState({ positionsLoading: false, positionsVisible: false });
    }, 500);
  };

  handlePositionsCancel = () => {
    this.setState({ positionsVisible: false });
  };

  showModal2 = () => {
    this.setState({
      visible2: true,
    });
  };

  handleOk2 = () => {
    this.setState({ loading2: true });
    setTimeout(() => {
      this.setState({ loading2: false, visible2: false });
    }, 500);
  };

  handleCancel2 = () => {
    this.setState({ visible2: false });
  };

  showPositionsModal2 = () => {
    this.setState({
      positionsVisible2: true,
    });
  };

  handlePositionsOk2 = () => {
    this.setState({ positionsLoading2: true });
    setTimeout(() => {
      this.setState({ positionsLoading2: false, positionsVisible2: false });
    }, 500);
  };

  handlePositionsCancel2 = () => {
    this.setState({ positionsVisible2: false });
  };

  showModal3 = () => {
    this.setState({
      visible3: true,
    });
  };

  handleOk3 = () => {
    this.setState({ loading3: true });
    setTimeout(() => {
      this.setState({ loading3: false, visible3: false });
    }, 500);
  };

  handleCancel3 = () => {
    this.setState({ visible3: false });
  };

  showPositionsModal3 = () => {
    this.setState({
      positionsVisible3: true,
    });
  };

  handlePositionsOk3 = () => {
    this.setState({ positionsLoading3: true });
    setTimeout(() => {
      this.setState({ positionsLoading3: false, positionsVisible3: false });
    }, 500);
  };

  handlePositionsCancel3 = () => {
    this.setState({ positionsVisible3: false });
  };

  showModal4 = () => {
    this.setState({
      visible4: true,
    });
  };

  handleOk4 = () => {
    this.setState({ loading4: true });
    setTimeout(() => {
      this.setState({ loading4: false, visible4: false });
    }, 500);
  };

  handleCancel4 = () => {
    this.setState({ visible4: false });
  };

  showPositionsModal4 = () => {
    this.setState({
      positionsVisible4: true,
    });
  };

  handlePositionsOk4 = () => {
    this.setState({ positionsLoading4: true });
    setTimeout(() => {
      this.setState({ positionsLoading4: false, positionsVisible4: false });
    }, 500);
  };

  handlePositionsCancel4 = () => {
    this.setState({ positionsVisible4: false });
  };

  showModal5 = () => {
    this.setState({
      visible5: true,
    });
  };

  handleOk5 = () => {
    this.setState({ loading5: true });
    setTimeout(() => {
      this.setState({ loading5: false, visible5: false });
    }, 500);
  };

  handleCancel5 = () => {
    this.setState({ visible5: false });
  };

  showPositionsModal5 = () => {
    this.setState({
      positionsVisible5: true,
    });
  };

  handlePositionsOk5 = () => {
    this.setState({ positionsLoading5: true });
    setTimeout(() => {
      this.setState({ positionsLoading5: false, positionsVisible5: false });
    }, 500);
  };

  handlePositionsCancel5 = () => {
    this.setState({ positionsVisible5: false });
  };

  render() {
    const {
      visible,
      loading,
      positionsVisible,
      positionsLoading,
      visible2,
      loading2,
      positionsVisible2,
      positionsLoading2,
      visible3,
      loading3,
      positionsVisible3,
      positionsLoading3,
      visible4,
      loading4,
      positionsVisible4,
      positionsLoading4,
      visible5,
      loading5,
      positionsVisible5,
      positionsLoading5,
    } = this.state;
    const { Step } = Steps;
    const dataSourceProgram = [
      'Department of Homeland Security Satellite Network',
      'AWS Technical Support Program',
    ];
    const dataSourceProgram2 = [
      'Department of Defense Space Program',
      'AWS Technical Support Program',
    ];
    return (
      <PageHeaderWrapper>
        <Card>
          <h1>Sidney's Career Track</h1>
          <Row type="flex" justify="start">
            <Col span={4}>Current Program</Col>
            <Col span={6}>Department of Defense Space Program</Col>
          </Row>
          <Row type="flex" justify="start">
            <Col span={4}>Current Career Track</Col>
            <Col span={4}>Software Developer</Col>
          </Row>
          <Row type="flex" justify="start">
            <Col span={4}>Current Tier</Col>
            <Col span={4}>Level 2</Col>
          </Row>
          <Row type="flex" justify="start" style={{ paddingBottom: 20 }}>
            <Col span={4}>Next Tier </Col>
            <Col span={4}>Level 3</Col>
          </Row>
          <Divider orientation="left">
            <strong>
              Requirements for Primary Selected Career Track: Network Engineer Tier 2 (Program:{' '}
              {this.state.programValue})
            </strong>
          </Divider>
          Select another program:
          <AutoComplete
            style={{ width: 350 }}
            allowClear={true}
            dataSource={dataSourceProgram}
            placeholder="Program"
            onSelect={this.handleProgramSelect}
            onChange={this.handleProgramChange}
            //value={this.state.programValue}
            filterOption={(inputValue, option) =>
              option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          />
          <br />
          <div
            style={
              this.state.programValue === 'Department of Homeland Security Satellite Network'
                ? {}
                : { display: 'none' }
            }
          >
            <a onClick={this.showPositionsModal}>Current Open Positions: 12</a>
            <p>
              <a onClick={this.showModal}>Current Percentage Complete: 25%</a>
            </p>
            <Descriptions
              layout="vertical"
              bordered
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              size="small"
            >
              <Descriptions.Item label="Trainings">
                Advanced Networking -{' '}
                <span class="attention">
                  Training Recently Shown Interest, Needs Action
                  <Icon type="warning" theme="filled" />
                </span>
                <br />
                Networking Circuits <Checkbox>Select to Show Interest in Training</Checkbox>
              </Descriptions.Item>
              <Descriptions.Item label="Certifications">
                CCNA -{' '}
                <span class="in-progress">
                  Certification Test Scheduled
                  <Icon type="calendar" theme="outlined" />
                </span>
                <br />
                CCNP <Checkbox>Select to Show Interest in Certification</Checkbox>
              </Descriptions.Item>
            </Descriptions>
          </div>
          <div
            style={
              this.state.programValue === 'AWS Technical Support Program' ? {} : { display: 'none' }
            }
          >
            <a onClick={this.showPositionsModal2}>Current Open Positions: 3</a>
            <p>
              <a onClick={this.showModal2}>Current Percentage Complete: 85%</a>
            </p>
            <Descriptions
              layout="vertical"
              bordered
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              size="small"
            >
              <Descriptions.Item label="Certifications">
                Security+ -{' '}
                <span class="in-progress">
                  Certification Test Scheduled
                  <Icon type="calendar" theme="outlined" />
                </span>
                <br />
                AWS Developer -{' '}
                <span class="completed">
                  Certification Complete
                  <Icon type="check-circle" theme="outlined" />
                </span>
              </Descriptions.Item>
            </Descriptions>{' '}
          </div>
          <br />
          <Divider orientation="left">
            <strong>
              Recommended Career Track: Software Developer Level 3 (Program: Department of Defense
              Space Program)
            </strong>
          </Divider>
          Select another program:
          <AutoComplete
            style={{ width: 350 }}
            allowClear={true}
            dataSource={dataSourceProgram2}
            placeholder="Program"
            onSelect={this.handleProgramSelect2}
            onChange={this.handleProgramChange2}
            //value={this.state.programValue}
            filterOption={(inputValue, option) =>
              option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          />
          <br />
          <div
            style={
              this.state.programValue2 === 'Department of Defense Space Program'
                ? {}
                : { display: 'none' }
            }
          >
            <a onClick={this.showPositionsModal3}>Current Open Positions: 4</a>
            <p>
              <a onClick={this.showModal3}>Current Percentage Complete: 35%</a>
            </p>
            <Descriptions
              layout="vertical"
              bordered
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              size="small"
            >
              <Descriptions.Item label="Trainings">
                Programming Level 3 Training -{' '}
                <span class="in-progress">
                  Training Scheduled
                  <Icon type="calendar" theme="outlined" />
                </span>
                <br />
                Database Level 3 Training -{' '}
                <span class="in-progress">
                  Training in Progress
                  <Icon type="sync" spin />
                </span>
                <br />
                Advanced Agile Training-{' '}
                <span class="completed">
                  Training Complete
                  <Icon type="check-circle" theme="outlined" />
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Certifications">
                CCISP -{' '}
                <span class="attention">
                  Certification Recently Shown Interest, Needs Action
                  <Icon type="warning" theme="filled" />
                </span>
                <br />
                AWS Developer -{' '}
                <span class="completed">
                  Certification Complete
                  <Icon type="check-circle" theme="outlined" />
                </span>
              </Descriptions.Item>
            </Descriptions>
          </div>
          <div
            style={
              this.state.programValue2 === 'AWS Technical Support Program'
                ? {}
                : { display: 'none' }
            }
          >
            <a onClick={this.showPositionsModal2}>Current Open Positions: 3</a>
            <p>
              <a onClick={this.showModal2}>Current Percentage Complete: 85%</a>
            </p>
            <Descriptions
              layout="vertical"
              bordered
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              size="small"
            >
              <Descriptions.Item label="Certifications">
                Security+ -{' '}
                <span class="in-progress">
                  Certification Test Scheduled
                  <Icon type="calendar" theme="outlined" />
                </span>
                <br />
                AWS Developer -{' '}
                <span class="completed">
                  Certification Complete
                  <Icon type="check-circle" theme="outlined" />
                </span>
              </Descriptions.Item>
            </Descriptions>{' '}
          </div>
        </Card>
        <Modal
          visible={visible}
          title="Network Engineer Tier 2 Progress"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={700}
          footer={[
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Close
            </Button>,
          ]}
        >
          <Row gutter={[8, 8]}>
            <Col span={24}>Program: Department of Homeland Security Satellite Network</Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <h3>Advanced Networking Training</h3>
              <Steps progressDot current={0} direction="vertical" size="small">
                <Step
                  title="Interest Showed"
                  description="11/1/2019: PM contacted. Please schedule your training"
                />
                <Step title="Scheduled" description="Expected completion date: 11/15/2019" />
                <Step title="In Progress" description="Expected completion date: 12/15/2019" />
                <Step title="Completed" description="100%" />
              </Steps>
            </Col>
            <Col span={12}>
              <h3>CCNA Certification</h3>
              <Steps progressDot current={2} direction="vertical">
                <Step title="Interest Showed" description="10/15/2019" />
                <Step title="In Progress" description="Ready to schedule exame" />
                <Step title="Schedule Exam" description="Exam date scheduled on 12/1/2019" />
                <Step title="Exam Passed" description="100%" />
              </Steps>
            </Col>
          </Row>
        </Modal>
        <Modal
          visible={positionsVisible}
          title="Current Open Positions"
          onOk={this.handlePositionsOk}
          onCancel={this.handlePositionsCancel}
          width={700}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={positionsLoading}
              onClick={this.handlePositionsOk}
            >
              Close
            </Button>,
          ]}
        >
          <p>Program: Department of Homeland Security Satellite Network</p>
          <p>Selected Career Track: Network Engineer Tier 2</p>
          <div>
            <Checkbox>Senior Network Engineer (10 Positions Available)</Checkbox>
          </div>
          <div>
            <Checkbox>Senior Network Manager (2 Positions Available)</Checkbox>
          </div>
        </Modal>
        <Modal
          visible={visible2}
          title="Network Engineer Tier 2 Progress"
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
          width={700}
          footer={[
            <Button key="submit" type="primary" loading={loading2} onClick={this.handleOk2}>
              Close
            </Button>,
          ]}
        >
          <Row gutter={[8, 8]}>
            <Col span={24}>Program: AWS Technical Support Program</Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <h3>Security+ Certification</h3>
              <Steps progressDot current={2} direction="vertical">
                <Step title="Interest Showed" description="10/15/2019" />
                <Step title="In Progress" description="Ready to schedule exame" />
                <Step title="Schedule Exam" description="Exam date scheduled on 12/1/2019" />
                <Step title="Exam Passed" description="100%" />
              </Steps>
            </Col>
          </Row>
        </Modal>
        <Modal
          visible={positionsVisible2}
          title="Current Open Positions"
          onOk={this.handlePositionsOk2}
          onCancel={this.handlePositionsCancel2}
          width={700}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={positionsLoading2}
              onClick={this.handlePositionsOk2}
            >
              Close
            </Button>,
          ]}
        >
          <p>Program: AWS Technical Support Program</p>
          <p>Selected Career Track: Network Engineer Tier 2</p>
          <div>
            <Checkbox>Senior Network Engineer (3 Positions Available)</Checkbox>
          </div>
        </Modal>
        <Modal
          visible={visible3}
          title="Software Developer Tier 3 Progress"
          onOk={this.handleOk3}
          onCancel={this.handleCancel3}
          width={700}
          footer={[
            <Button key="submit" type="primary" loading={loading3} onClick={this.handleOk3}>
              Close
            </Button>,
          ]}
        >
          <Row gutter={[8, 8]}>
            <Col span={24}>Program: Department of Defense Space Program</Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <h3>Security+ Certification</h3>
              <Steps progressDot current={2} direction="vertical">
                <Step title="Interest Showed" description="10/15/2019" />
                <Step title="In Progress" description="Ready to schedule exame" />
                <Step title="Schedule Exam" description="Exam date scheduled on 12/1/2019" />
                <Step title="Exam Passed" description="100%" />
              </Steps>
            </Col>
          </Row>
        </Modal>
        <Modal
          visible={positionsVisible3}
          title="Current Open Positions"
          onOk={this.handlePositionsOk3}
          onCancel={this.handlePositionsCancel3}
          width={700}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={positionsLoading3}
              onClick={this.handlePositionsOk3}
            >
              Close
            </Button>,
          ]}
        >
          <p>Program: Department of Defense Space Program</p>
          <p>Career Track: Software Developer Tier 3</p>
          <div>
            <Checkbox>Senior Software Developer (4 Positions Available)</Checkbox>
          </div>
        </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default CurrentCareerTrack;
