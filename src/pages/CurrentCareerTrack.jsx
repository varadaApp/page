/* eslint-disable no-confusing-arrow */
/* eslint-disable global-require */
import {
  Card,
  Row,
  Col,
  Icon,
  Divider,
  Modal,
  Button,
  Steps,
  Checkbox,
  AutoComplete,
  Table,
  Select,
  Dropdown,
  Menu,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import Link from 'umi/link';

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
      programValue: 'Department of Homeland Security Network',
      programValue2: 'Department of Defense Space Program',
      tab1: [
        {
          show: false,
        },
        {
          show: false,
        },
        {
          show: false,
        },
        {
          show: false,
        },
        {
          show: false,
        },
      ],
      tab2: [
        {
          show: false,
        },
        {
          show: false,
        },
        {
          show: false,
        },
        {
          show: false,
        },
        {
          show: false,
        },
      ],
    };
    this.handleProgramChange = this.handleProgramChange.bind(this);
    this.handleProgramSelect = this.handleProgramSelect.bind(this);
    this.handleProgramChange2 = this.handleProgramChange2.bind(this);
    this.handleProgramSelect2 = this.handleProgramSelect2.bind(this);
  }
  
  componentDidMount() {
    const names = [
      { big: '1', small: '1', index: 0, tab: 1},
    ]
    names.forEach((item, i) => {
      this.toggleShow(item.index, item.tab, `grow-class-${item.small}`, `measuringWrapper${item.big}`);
    })
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

  toggleShow = (index, tab, cName, wrapperClass) => {
    this.setState(prevState => ({
      [`tab${tab}`]: prevState[`tab${tab}`].map((item, i) =>
        index === i ? { ...item, show: !item.show } : item,
      ),
    }));
    let growDiv = document.querySelector(`.${cName}`);
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(`.${wrapperClass}`);
      growDiv.style.height = wrapper.clientHeight + 'px';
    }
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
      'Department of Homeland Security Network',
      'AWS Technical Support Program',
    ];
    const dataSourceProgram2 = [
      'Department of Defense Space Program',
      'AWS Technical Support Program',
    ];

    const columns = [
      {
        title: 'Training',
        dataIndex: 'training',
        key: 'training',
      },
      {
        title: 'Status',
        key: 'status',
        render: props => props.status,
      },
    ];

    const columns2 = [
      {
        title: 'Certification',
        dataIndex: 'certification',
        key: 'certification',
      },
      {
        title: 'Status',
        key: 'status',
        render: props => props.status,
      },
    ];

    const dataSource1 = [
      {
        key: '1',
        training: 'Systems Engineer Training Level 2',
        status: (
          <span className="attention">
            Training Recently Shown Interest, Needs Action
            <Icon style={{ margin: '5px' }} type="warning" theme="filled" />
          </span>
        ),
      },
      {
        key: '2',
        training: 'Virtualized Servers',
        status: <Checkbox>Select to Show Interest in Training</Checkbox>,
      },
    ];

    const dataSource2 = [
      {
        key: '1',
        certification: 'Security+',
        status: (
          <span style={{ margin: '5px' }} className="completed">
            Certification Complete
            <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
          </span>
        ),
      },
      {
        key: '2',
        certification: 'Splunk',
        status: (
          <span style={{ margin: '5px' }} className="completed">
            Certification Complete
            <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
          </span>
        ),
      },
      {
        key: '3',
        certification: 'VMWare',
        status: (
          <span className="attention">
            Certification Recently Shown Interest, Needs Action
            <Icon style={{ margin: '5px' }} type="warning" theme="filled" />
          </span>
        ),
      },
    ];

    const dataSource3 = [
      {
        key: '1',
        certification: 'Security+',
        status: (
          <span style={{ margin: '5px' }} className="completed">
            Certification Complete
            <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
          </span>
        ),
      },
      {
        key: '2',
        certification: 'Splunk',
        status: (
          <span style={{ margin: '5px' }} className="completed">
            Certification Complete
            <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
          </span>
        ),
      },
      {
        key: '3',
        certification: 'AWS Administration',
        status: (
          <span style={{ margin: '5px' }} className="completed">
            Certification Complete
            <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
          </span>
        ),
      },
      {
        key: '4',
        certification: 'VMWare',
        status: (
          <span className="attention">
            Certification Recently Shown Interest, Needs Action
            <Icon style={{ margin: '5px' }} type="warning" theme="filled" />
          </span>
        ),
      },
    ];

    return (
      <PageHeaderWrapper>
        <Card className="current-career-track-main-container">
          <div className="screen-header">
              <h1 className="page-title">Sidney&apos;s Career Track</h1>
          </div>
          <div style={{ display: 'flex', margin: 20, padding: 10 }}>
            <Icon style={{ fontSize: 35 }} type="bulb" /> 
            <div style={{ width: '80%', paddingLeft: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <Divider />
          <Row style={{ margin: '20px', padding: '10px' }}>
            <Col xs={6}>
              <div className="top-container to-right">
                <div
                  style={{
                    color: 'black',
                    textAlign: 'left',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                >
                  DOD Space Program
                </div>
                <div style={{ textAlign: 'left' }}>Current Program</div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="top-container to-right">
                <div
                  style={{
                    color: 'black',
                    textAlign: 'left',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                >
                  System Administration
                </div>
                <div style={{ textAlign: 'left' }}>Current Career Track</div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="top-container to-right">
                <div
                  style={{
                    color: 'black',
                    textAlign: 'left',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                >
                  Level 2
                </div>
                <div style={{ textAlign: 'left' }}>Current Tier</div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="top-container to-right">
                <div
                  style={{
                    color: 'black',
                    textAlign: 'left',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                >
                  Level 3
                </div>
                <div style={{ textAlign: 'left' }}>Next Tier</div>
              </div>
            </Col>
          </Row>
          
          <Row gutter={[8, 8]} style={{ marginRight: 10 }}>
            <Row xs={11}>
              <div className="shadowed-box-container">
                <div>
                  <div
                    className="customized-top-container">
                    <span
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        lineHeight: 1.5,
                        textAlign: 'center',
                        color: 'black',
                        margin: 10,
                        width: '100%',
                        textTransform: 'uppercase',
                        padding: 5,
                      }}
                    >
                      Requirements for Primary Career Track
                    </span>
                  </div>
                </div>
                <Row
                  style={
                    {
                      // paddingLeft: '10px',
                      // marginLeft: '20px',
                    }
                  }
                >
                  <div
                    style={{
                      flexGrow: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                      margin: 20,
                      marginTop: 0,
                      paddingTop: 0,
                      marginBottom: 0,
                      paddingBottom: 0,
                    }}
                  >
                    <p style={{ marginTop: '15px', paddingTop: '5px' }}>
                      <h3 style={{ color: 'black', fontSize: 14 }}>Select another program</h3>
                    </p>
                    <Select
                      showSearch
                      placeholder="Program"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                      onSelect={this.handleProgramSelect}
                      onChange={this.handleProgramChange}
                    >
                      <Option value="Department of Homeland Security Network">
                        Department of Homeland Security Network
                      </Option>
                      <Option value="AWS Technical Support Program">
                        AWS Technical Support Program
                      </Option>
                    </Select>
                    <div style={{ margin: 10 }}>
                      <span>
                        <span style={{ fontWeight: 600, marginRight: 5 }}>Program:</span>
                        {this.state.programValue || 'No program selected'}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div
                      className="row-title"
                      onClick={() => this.toggleShow(0, 1, 'grow-class-1', 'measuringWrapper1')}
                    >
                      System Engineer Tier 2
                      <Icon type={this.state.tab1[0].show ? 'up' : 'down'} />
                    </div>
                    <div className="grow-class grow-class-1">
                      <div className="measuringWrapper1">
                        <div
                          style={
                            this.state.programValue === 'Department of Homeland Security Network'
                              ? { display: 'flex', justifyContent: 'space-between' }
                              : { display: 'none' }
                          }
                        >
                            <div
                              className="career-track-info"
                              onClick={this.showPositionsModal2}
                            >
                              <div className="career-track-info-label">
                                Current Open Positions
                              </div>
                              <div className="career-track-info-value" >12</div>
                            </div>
                            <div className="career-track-info" onClick={this.showModal}>
                              <div className="career-track-info-label">
                                Current Percentage Complete
                              </div>
                              <div className="career-track-info-value">25%</div>
                            </div>
                            <div className="career-track-info">
                              <div className="career-track-info-label">
                                  Overall Expected Completion Date
                              </div>
                              <div className="career-track-info-value">
                                5/1/2020
                              </div>
                            </div>
                            <div className="career-track-info">
                              <div className="career-track-info-label">
                                  Program Location
                              </div>
                            <div className="career-track-info-info">
                                Washington, D.C.
                              </div>
                            </div>
                        </div>
                        <div
                          style={
                            this.state.programValue === 'AWS Technical Support Program'
                              ? {display: 'flex', justifyContent: 'space-between'}
                              : { display: 'none' }
                          }
                        >
                          <div
                              className="career-track-info"
                              onClick={this.showPositionsModal2}
                            >
                              <div className="career-track-info-label">
                                Current Open Positions
                              </div>
                              <div className="career-track-info-value" >3</div>
                            </div>
                            <div className="career-track-info" onClick={this.showModal}>
                              <div className="career-track-info-label">
                                Current Percentage Complete
                              </div>
                              <div className="career-track-info-value">55%</div>
                            </div>
                            <div className="career-track-info">
                              <div className="career-track-info-label">
                                  Overall Expected Completion Date
                              </div>
                              <div className="career-track-info-value">
                                5/1/2020
                              </div>
                            </div>
                            <div className="career-track-info">
                              <div className="career-track-info-label">
                                  Program Location
                              </div>
                            <div className="career-track-info-info">
                                Washington, D.C.
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      this.state.programValue === 'Department of Homeland Security Network'
                        ? { }
                        : { display: 'none' }
                    }
                  >
                    <div
                      className="row-title"
                      onClick={() => this.toggleShow(1, 1, 'grow-class-2', 'measuringWrapper2')}
                    >
                      Trainings
                      <Icon className="" type={this.state.tab1[1].show ? 'up' : 'down'} />
                    </div>
                    <div className="grow-class grow-class-2">
                      <div className="measuringWrapper2">
                        <Table
                          className="career-track-management-table"
                          dataSource={dataSource1}
                          columns={columns}
                          size="middle"
                          pagination={false}
                          style={{ paddingBottom: 20 }}
                        />
                      </div>
                    </div>
                    
                    <div
                      className="row-title "
                      onClick={() => this.toggleShow(2, 1, 'grow-class-3', 'measuringWrapper3')}
                    >
                      Certifications
                      <Icon className="" type={this.state.tab1[2].show ? 'up' : 'down'} />
                    </div>
                    <div className="grow-class grow-class-3">
                      <div className="measuringWrapper3">
                        <Table
                          className="career-track-management-table"
                          dataSource={dataSource2}
                          columns={columns2}
                          size="middle"
                          pagination={false}
                          style={{ paddingBottom: 20 }}
                        />
                      </div>
                    </div>
                    
                  </div>
                  {/* {this.state.programValue && <Divider/>} */}
                  <div
                    style={
                      this.state.programValue === 'AWS Technical Support Program'
                        ? {}
                        : { display: 'none' }
                    }
                  >
                    <div
                      className="row-title "
                      onClick={() => this.toggleShow(3, 1, 'grow-class-4', 'measuringWrapper4')}
                    >
                      Certifications
                      <Icon className="" type={this.state.tab1[3].show ? 'up' : 'down'} />
                    </div>
                    <div className="grow-class grow-class-4">
                      <div className="measuringWrapper4">
                        <Table
                          className="career-track-management-table"
                          dataSource={dataSource3}
                          columns={columns2}
                          size="middle"
                          pagination={false}
                          style={{ paddingBottom: 20 }}
                        />
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="filler" />
              </div>
            </Row>
          </Row>
          <div className="divider-div" />
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
              Overall Expected Completion Date: 5/1/2020
              <br />
              Program: Department of Homeland Security Network
              <br />
              Program Location: Washington, D.C.
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <h3>Systems Engineer Training Level 2</h3>
              <Steps progressDot current={0} direction="vertical" size="small">
                <Step
                  title="Interest Showed"
                  description="2/1/2020: PM contacted. Please schedule your training"
                />
                <Step title="Scheduled" description="Expected completion date: 3/15/2020" />
                <Step title="In Progress" description="Expected completion date: 4/15/2020" />
                <Step title="Completed" description="100%" />
              </Steps>
            </Col>
            <Col span={12}>
              <h3>VMWare Certification</h3>
              <Steps progressDot current={0} direction="vertical">
                <Step title="Interest Showed" description="2/15/2020" />
                <Step title="In Progress" description="Expected completion date: 3/15/2020" />
                <Step title="Schedule Exam" description="Expected completion date: 4/15/2020" />
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
          <p>Program: Department of Homeland Security Network</p>
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
          title="System Administration Tier 3"
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
              Overall Expected Completion Date: 5/1/2020
              <br />
              Program: AWS Technical Support Program
              <br />
              Program Location: Washington, D.C.
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <h3>System Administration Level 3 Training</h3>
              <Steps progressDot current={1} direction="vertical" size="small">
                <Step
                  title="Interest Showed"
                  description="2/1/2020: PM contacted. Please schedule your training"
                />
                <Step title="Scheduled" description="Training scheduled to start on 3/15/2020" />
                <Step title="In Progress" description="Expected completion date: 4/15/2020" />
                <Step title="Completed" description="100%" />
              </Steps>
              <h3>Windows Server Administration Level 3 Training</h3>
              <Steps progressDot current={2} direction="vertical" size="small">
                <Step
                  title="Interest Showed"
                  description="2/1/2020: PM contacted. Please schedule your training"
                />
                <Step title="Scheduled" description="Training scheduled to start on 2/15/2020" />
                <Step title="In Progress" description="Expected completion date: 4/15/2020" />
                <Step title="Completed" description="100%" />
              </Steps>
            </Col>
            <Col span={12}>
              <h3>VMWare Certification</h3>
              <Steps progressDot current={0} direction="vertical">
                <Step title="Interest Showed" description="2/15/2020" />
                <Step title="In Progress" description="Expected completion date: 3/15/2020" />
                <Step title="Schedule Exam" description="Expected completion date: 4/15/2020" />
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
          <p>Program Location: Washington, D.C.</p>
          <p>Selected Career Track: System Engineer Tier 2</p>
          <div>
            <Link to="/employee/positionSearch">
              Senior Splunk System Engineer (3 Positions Available)
            </Link>
          </div>
        </Modal>
        <Modal
          visible={visible3}
          title="System Administration Tier 3 Progress"
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
              Overall Expected Completion Date: 5/1/2020
              <br />
              Program: Department of Defense Space Program
              <br />
              Program Location: Washington, D.C.
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <h3>System Administration Level 3 Training</h3>
              <Steps progressDot current={1} direction="vertical" size="small">
                <Step
                  title="Interest Showed"
                  description="2/1/2020: PM contacted. Please schedule your training"
                />
                <Step title="Scheduled" description="Training scheduled to start on 3/15/2020" />
                <Step title="In Progress" description="Expected completion date: 4/15/2020" />
                <Step title="Completed" description="100%" />
              </Steps>
              <h3>Windows Server Administration Level 3 Training</h3>
              <Steps progressDot current={2} direction="vertical" size="small">
                <Step
                  title="Interest Showed"
                  description="2/1/2020: PM contacted. Please schedule your training"
                />
                <Step title="Scheduled" description="Training scheduled to start on 2/15/2020" />
                <Step title="In Progress" description="Expected completion date: 4/15/2020" />
                <Step title="Completed" description="100%" />
              </Steps>
            </Col>
            <Col span={12}>
              <h3>VMWare Certification</h3>
              <Steps progressDot current={0} direction="vertical">
                <Step title="Interest Showed" description="2/15/2020" />
                <Step title="In Progress" description="Expected completion date: 3/15/2020" />
                <Step title="Schedule Exam" description="Expected completion date: 4/15/2020" />
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
