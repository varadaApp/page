import React from 'react';
import { Card, Row, Col, Icon, Divider, Modal, Button, Steps, Checkbox, AutoComplete } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

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
      programValue: 'AWS Technical Support Program',
      programValue2: 'Department of Defense Space Program',
    };
    this.handleProgramChange = this.handleProgramChange.bind(this);
    this.handleProgramSelect = this.handleProgramSelect.bind(this);
    this.handleProgramChange2 = this.handleProgramChange2.bind(this);
    this.handleProgramSelect2 = this.handleProgramSelect2.bind(this);
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
          <div style={{ fontSize: '32px', color: 'black', fontWeight: 600 }}>
            Sidney&apos;s Career Track
          </div>
          <Row style={{ margin: '20px', padding: '10px' }}>
            <Col xs={6}>
              <Row
                style={{ color: 'black', textAlign: 'center', fontSize: '16px', fontWeight: 600 }}
              >
                Department of Defense Space Program
              </Row>
              <Row style={{ textAlign: 'center' }}>Current Program</Row>
            </Col>
            <Col xs={6}>
              <Row
                style={{ color: 'black', textAlign: 'center', fontSize: '16px', fontWeight: 600 }}
              >
                Software Developer
              </Row>
              <Row style={{ textAlign: 'center' }}>Current Career Track</Row>
            </Col>
            <Col xs={6}>
              <Row
                style={{ color: 'black', textAlign: 'center', fontSize: '16px', fontWeight: 600 }}
              >
                Level 2
              </Row>
              <Row style={{ textAlign: 'center' }}>Current Tier</Row>
            </Col>
            <Col xs={6}>
              <Row
                style={{ color: 'black', textAlign: 'center', fontSize: '16px', fontWeight: 600 }}
              >
                Level 3
              </Row>
              <Row style={{ textAlign: 'center' }}>Next Tier</Row>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col xs={12}>
              <h2>Requirements for Primary Selected Career Track</h2>
              <h3 style={{ color: '#525257', marginLeft: '20px', paddingLeft: '10px' }}>
                Network Engineer Tier 2 (Program: {this.state.programValue || 'none'})
              </h3>
              <div style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <p style={{ marginTop: '15px', paddingTop: '5px' }}>
                  <h3 style={{ color: '#525257' }}>Select another program:</h3>
                </p>
                <AutoComplete
                  style={{ width: 350 }}
                  allowClear
                  dataSource={dataSourceProgram}
                  placeholder="Program"
                  onSelect={this.handleProgramSelect}
                  onChange={this.handleProgramChange}
                  filterOption={(inputValue, option) =>
                    option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
                />
              </div>
              <div
                style={
                  this.state.programValue === 'Department of Homeland Security Satellite Network'
                    ? { marginTop: '10px', paddingTop: '5px' }
                    : { display: 'none' }
                }
              >
                <Row>
                  <Col xs={8}>
                    <a onClick={this.showPositionsModal2}>Current Open Positions: 12</a>
                  </Col>
                  <Col xs={8}>
                    <a onClick={this.showModal2}>Current Percentage Complete: 25%</a>
                  </Col>
                </Row>
                <p style={{ marginTop: '10px', paddingTop: '5px' }}>
                  Overall Expected Completion Date: 2/1/2020
                </p>
              </div>
              <div
                style={
                  this.state.programValue === 'AWS Technical Support Program'
                    ? { marginTop: '10px', paddingTop: '5px' }
                    : { display: 'none' }
                }
              >
                <Row>
                  <Col xs={8}>
                    <a onClick={this.showPositionsModal2}>Current Open Positions: 3</a>
                  </Col>
                  <Col xs={8}>
                    <a onClick={this.showModal2}>Current Percentage Complete: 85%</a>
                  </Col>
                </Row>
                <p style={{ marginTop: '10px', paddingTop: '5px' }}>
                  Overall Expected Completion Date: 2/1/2020
                </p>
              </div>
            </Col>
            <Col xs={12}>
              <br />
              <div
                style={
                  this.state.programValue === 'Department of Homeland Security Satellite Network'
                    ? {}
                    : { display: 'none' }
                }
              >
                <div style={{ backgroundColor: '#f0f2f5', padding: '10px' }}>
                  <h3>Trainings</h3>
                </div>
                <Row style={{ marginLeft: '15px', padding: '10px' }}>
                  <Col xs={12}>
                    <h3 style={{ color: '#525257' }}>Advanced Networking</h3>
                  </Col>
                  <Col xs={12}>
                    <span className="attention">
                      Training Recently Shown Interest, Needs Action
                      <Icon style={{ margin: '5px' }} type="warning" theme="filled" />
                    </span>
                  </Col>
                </Row>
                <Row style={{ marginLeft: '15px', padding: '10px' }}>
                  <Col xs={12}>
                    <h3 style={{ color: '#525257' }}>Networking Circuits</h3>
                  </Col>
                  <Col xs={12}>
                    <Checkbox>Select to Show Interest in Training</Checkbox>
                  </Col>
                </Row>
                <div style={{ backgroundColor: '#f0f2f5', padding: '10px' }}>
                  <h3>Certifications</h3>
                </div>
                <Row style={{ marginLeft: '15px', padding: '10px' }}>
                  <Col xs={12}>
                    <h3 style={{ color: '#525257' }}>CCNA</h3>
                  </Col>
                  <Col xs={12}>
                    <span className="in-progress">
                      Certification Test Scheduled
                      <Icon style={{ margin: '5px' }} type="calendar" theme="outlined" />
                    </span>
                  </Col>
                </Row>
                <Row style={{ marginLeft: '15px', padding: '10px' }}>
                  <Col xs={12}>
                    <h3 style={{ color: '#525257' }}>CCNP</h3>
                  </Col>
                  <Col xs={12}>
                    <Checkbox>Select to Show Interest in Certification</Checkbox>
                  </Col>
                </Row>
              </div>
              <div
                style={
                  this.state.programValue === 'AWS Technical Support Program'
                    ? { marginTop: '10px', paddingTop: '5px' }
                    : { display: 'none' }
                }
              >
                <div style={{ backgroundColor: '#f0f2f5', padding: '10px' }}>
                  <h3>Certifications</h3>
                </div>
                <Row style={{ marginLeft: '15px', padding: '10px' }}>
                  <Col xs={12}>
                    <h3 style={{ color: '#525257' }}>Security+</h3>
                  </Col>
                  <Col xs={12}>
                    <span style={{ margin: '5px' }} className="in-progress">
                      Certification Test Scheduled
                      <Icon style={{ margin: '5px' }} type="calendar" theme="outlined" />
                    </span>
                  </Col>
                </Row>
                <Row style={{ marginLeft: '15px', padding: '10px' }}>
                  <Col xs={12}>
                    <h3 style={{ color: '#525257' }}>AWS Developer</h3>
                  </Col>
                  <Col xs={12}>
                    <span style={{ margin: '5px' }} className="completed">
                      Certification Complete
                      <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
                    </span>
                  </Col>
                </Row>
              </div>
              <br />
            </Col>
          </Row>
          {/* EDIT HERE */}
          <Divider />
          <Row>
            <Col xs={12}>
              <h2>Recommended Career Track</h2>
              <h3 style={{ color: '#525257', marginLeft: '20px', paddingLeft: '10px' }}>
                Software Developer Level 3 (Program: {this.state.programValue2 || 'none'})
              </h3>
              <div style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <p style={{ marginTop: '15px', paddingTop: '5px' }}>
                  <h3 style={{ color: '#525257' }}>Select another program:</h3>
                  <AutoComplete
                    style={{ width: 350 }}
                    allowClear
                    dataSource={dataSourceProgram2}
                    placeholder="Program"
                    onSelect={this.handleProgramSelect2}
                    onChange={this.handleProgramChange2}
                    filterOption={(inputValue, option) =>
                      option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                  />
                </p>
              </div>
              <div
                style={
                  this.state.programValue2 === 'Department of Defense Space Program'
                    ? {}
                    : { display: 'none' }
                }
              >
                <Row>
                  <Col xs={8}>
                    <a onClick={this.showPositionsModal3}>Current Open Positions: 4</a>
                  </Col>
                  <Col xs={8}>
                    <a onClick={this.showModal3}>Current Percentage Complete: 35%</a>
                  </Col>
                </Row>
                <p style={{ marginTop: '10px', paddingTop: '5px' }}>
                  Overall Expected Completion Date: 2/1/2020
                </p>
              </div>
              <div
                style={
                  this.state.programValue2 === 'AWS Technical Support Program'
                    ? {}
                    : { display: 'none' }
                }
              >
                <Row>
                  <Col xs={8}>
                    <a onClick={this.showPositionsModal2}>Current Open Positions: 3</a>
                  </Col>
                  <Col xs={8}>
                    <a onClick={this.showModal2}>Current Percentage Complete: 85%</a>
                  </Col>
                </Row>
                <p style={{ marginTop: '10px', paddingTop: '5px' }}>
                  Overall Expected Completion Date: 2/1/2020
                </p>
              </div>
            </Col>
            {/* DIVIDER | */}
            <Col xs={12}>
              <div
                style={
                  this.state.programValue2 === 'Department of Defense Space Program'
                    ? {}
                    : { display: 'none' }
                }
              >
                <div style={{ backgroundColor: '#f0f2f5', padding: '10px' }}>
                  <h3>Trainings</h3>
                </div>
                <Row style={{ marginLeft: '15px', padding: '10px' }}>
                  <Col xs={12}>
                    <h3 style={{ color: '#525257' }}>Programming Level 3 Training</h3>
                  </Col>
                  <Col xs={12}>
                    <span className="in-progress">
                      Training Scheduled
                      <Icon style={{ margin: '5px' }} type="calendar" theme="outlined" />
                    </span>
                  </Col>
                </Row>
                <Row style={{ marginLeft: '15px', padding: '10px' }}>
                  <Col xs={12}>
                    <h3 style={{ color: '#525257' }}>Database Level 3 Training</h3>
                  </Col>
                  <Col xs={12}>
                    <span className="in-progress">
                      Training in Progress
                      <Icon style={{ margin: '5px' }} type="sync" spin />
                    </span>
                  </Col>
                </Row>
                <Row style={{ marginLeft: '15px', padding: '10px' }}>
                  <Col xs={12}>
                    <h3 style={{ color: '#525257' }}>Advanced Agile Training</h3>
                  </Col>
                  <Col xs={12}>
                    <span className="completed">
                      Training Complete
                      <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
                    </span>
                  </Col>
                </Row>
                <div style={{ backgroundColor: '#f0f2f5', padding: '10px' }}>
                  <h3>Certifications</h3>
                </div>
                <Row style={{ marginLeft: '15px', padding: '10px' }}>
                  <Col xs={12}>
                    <h3 style={{ color: '#525257' }}>CCISP</h3>
                  </Col>
                  <Col xs={12}>
                    <span className="attention">
                      Certification Recently Shown Interest, Needs Action
                      <Icon style={{ margin: '5px' }} type="warning" theme="filled" />
                    </span>
                  </Col>
                </Row>
                <Row style={{ marginLeft: '15px', padding: '10px' }}>
                  <Col xs={12}>
                    <h3 style={{ color: '#525257' }}>AWS Developer</h3>
                  </Col>
                  <Col xs={12}>
                    <span className="completed">
                      Certification Complete
                      <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
                    </span>
                  </Col>
                </Row>
              </div>
              <div
                style={
                  this.state.programValue2 === 'AWS Technical Support Program'
                    ? { marginTop: '10px', paddingTop: '5px' }
                    : { display: 'none' }
                }
              >
                <div style={{ backgroundColor: '#f0f2f5', padding: '10px' }}>
                  <h3>Certifications</h3>
                </div>
                <Row style={{ marginLeft: '15px', padding: '10px' }}>
                  <Col xs={12}>
                    <h3 style={{ color: '#525257' }}>Security+</h3>
                  </Col>
                  <Col xs={12}>
                    <span style={{ margin: '5px' }} className="in-progress">
                      Certification Test Scheduled
                      <Icon style={{ margin: '5px' }} type="calendar" theme="outlined" />
                    </span>
                  </Col>
                </Row>
                <Row style={{ marginLeft: '15px', padding: '10px' }}>
                  <Col xs={12}>
                    <h3 style={{ color: '#525257' }}>AWS Developer</h3>
                  </Col>
                  <Col xs={12}>
                    <span style={{ margin: '5px' }} className="completed">
                      Certification Complete
                      <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
                    </span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
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
            <Col span={24}>
              Overall Expected Completion Date: 2/1/2020
              <br />
              Program: Department of Homeland Security Satellite Network
            </Col>
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
            <Col span={24}>
              Overall Expected Completion Date: 2/1/2020
              <br />
              Program: AWS Technical Support Program
            </Col>
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
            <Col span={24}>
              Overall Expected Completion Date: 2/1/2020
              <br />
              Program: Department of Defense Space Program
            </Col>
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
