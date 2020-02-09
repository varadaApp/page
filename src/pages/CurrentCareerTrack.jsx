import { Card, Row, Col, Icon, Divider, Modal, Button, Steps, Checkbox, AutoComplete } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';

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
      programValue2: 'Department of Defense Space Program',
      items: [
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

  toggleShow = index =>
    this.setState(prevState => ({
      items: prevState.items.map((item, i) => (index === i ? { ...item, show: !item.show } : item)),
    }));

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
      items,
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
          <div style={{ fontSize: '27px', color: 'black', fontWeight: 600 }}>
            Sidney&apos;s Career Track
          </div>
          <Divider />
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
          <div style={{ border: '1.5px solid #919197', borderRadius: 5 }}>
            <div onClick={() => this.toggleShow(0)} className="hover-div">
              <div style={{ alignItems: 'center', height: 49 }}>
                <Icon
                  style={{
                    fontSize: 16,
                    color: '#525257',
                    marginTop: 10,
                    marginLeft: 10,
                    marginBottom: 10,
                    paddingTop: 10,
                    paddingLeft: 10,
                    paddingBottom: 10,
                    fontWeight: 'bolder',
                    padding: 5,
                  }}
                  type={items[0].show ? 'up' : 'down'}
                />
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: 1.5,
                    color: '#525257',
                    // margin: 10,
                    // padding: 5,
                  }}
                >
                  Requirements for Primary Selected Career Track
                </span>
              </div>
            </div>
            <div
              style={{
                width: '100%',
                height: `${items[0].show ? '2px' : 0}`,
                background: '#919197',
              }}
            />
            <Row
              style={{
                display: items[0].show ? 'block' : 'none',
                // paddingLeft: '10px',
                // marginLeft: '20px',
              }}
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
                  <h3 style={{ color: 'black' }}>Select another program</h3>
                </p>
                <AutoComplete
                  style={{ width: 350, marginLeft: '10px', paddingLeft: '5px' }}
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
              <Divider />
              <div
                style={{
                  marginLeft: '20px',
                  paddingLeft: '10px',
                  marginRight: '20px',
                  paddingRight: '10px',
                }}
              >
                <p
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Network Engineer Tier
                </p>
                <Divider />
                <p
                  style={{
                    color: '#525257',
                    fontSize: 15,
                    marginLeft: '20px',
                    paddingLeft: '10px',
                    marginRight: '20px',
                    paddingRight: '10px',
                  }}
                >
                  <span>
                    <span style={{ fontWeight: 600, marginRight: 5 }}>Program:</span>
                    {this.state.programValue || 'No program selected'}
                  </span>
                </p>
                <div
                  style={
                    this.state.programValue === 'Department of Homeland Security Satellite Network'
                      ? {
                          marginLeft: '20px',
                          paddingLeft: '10px',
                          marginRight: '20px',
                          paddingRight: '10px',
                        }
                      : { display: 'none' }
                  }
                >
                  <div style={{ fontSize: 15 }}>
                    <Divider className="content-divider" />
                    <div
                      style={{ marginTop: 10, paddingTop: 5 }}
                      onClick={this.showPositionsModal2}
                    >
                      <a>
                        <span style={{ fontWeight: 600, marginRight: 5 }}>
                          Current Open Positions:
                        </span>
                        <span>12</span>
                      </a>
                    </div>
                    <Divider className="content-divider" />
                    <div style={{ marginTop: 10, paddingTop: 5 }} onClick={this.showModal2}>
                      <a>
                        <span style={{ fontWeight: 600, marginRight: 5 }}>
                          Current Percentage Complete:
                        </span>
                        <span>25%</span>
                      </a>
                    </div>
                    <Divider className="content-divider" />
                    <div style={{ marginTop: 10, paddingTop: 5 }}>
                      <span>
                        <span style={{ fontWeight: 600, marginRight: 5 }}>
                          Overall Expected Completion Date:
                        </span>
                        2/1/2020
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={
                    this.state.programValue === 'AWS Technical Support Program'
                      ? {
                          marginLeft: '20px',
                          paddingLeft: '10px',
                          marginRight: '20px',
                          paddingRight: '10px',
                        }
                      : { display: 'none' }
                  }
                >
                  <div style={{ fontSize: 15 }}>
                    <Divider className="content-divider" />
                    <div
                      style={{ marginTop: 10, paddingTop: 5 }}
                      onClick={this.showPositionsModal2}
                    >
                      <a>
                        <span style={{ fontWeight: 600, marginRight: 5 }}>
                          Current Open Positions:
                        </span>
                        <span>3</span>
                      </a>
                    </div>
                    <Divider className="content-divider" />
                    <div style={{ marginTop: 10, paddingTop: 5 }} onClick={this.showModal2}>
                      <a>
                        <span style={{ fontWeight: 600, marginRight: 5 }}>
                          Current Percentage Complete:
                        </span>
                        <span>85%</span>
                      </a>
                    </div>
                    <Divider className="content-divider" />
                    <div style={{ marginTop: 10, paddingTop: 5 }}>
                      <span>
                        <span style={{ fontWeight: 600, marginRight: 5 }}>
                          Overall Expected Completion Date:
                        </span>
                        2/1/2020
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {this.state.programValue && <Divider />}
              <div
                style={
                  this.state.programValue === 'Department of Homeland Security Satellite Network'
                    ? { marginLeft: 20, paddingLeft: 10, marginRight: 20, paddingRight: 10 }
                    : { display: 'none' }
                }
              >
                <p style={{ fontSize: 16, fontWeight: 600 }}>Trainings</p>
                <Divider />
                <div
                  style={{
                    marginBottom: '10px',
                    paddingBottom: '5px',
                    marginLeft: '20px',
                    paddingLeft: '10px',
                  }}
                >
                  <div
                    style={{
                      marginLeft: '20px',
                      paddingLeft: '10px',
                      flexDirection: 'row',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        width: '50%',
                        color: '#525257',
                        textAlign: 'left',
                        fontSize: 15,
                        fontWeight: 600,
                      }}
                    >
                      Advanced Networking
                    </div>
                    <div style={{ width: '50%', textAlign: 'left' }}>
                      <span className="attention">
                        Training Recently Shown Interest, Needs Action
                        <Icon style={{ margin: '5px' }} type="warning" theme="filled" />
                      </span>
                    </div>
                  </div>
                  <Divider className="content-divider" />
                  <div
                    style={{
                      marginLeft: '20px',
                      paddingLeft: '10px',
                      flexDirection: 'row',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        width: '50%',
                        color: '#525257',
                        textAlign: 'left',
                        fontSize: 15,
                        fontWeight: 600,
                      }}
                    >
                      Networking Circuits
                    </div>
                    <div style={{ width: '50%', textAlign: 'left' }}>
                      <Checkbox>Select to Show Interest in Training</Checkbox>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: 16, fontWeight: 600 }}>Certifications</p>
                <Divider />
                <div
                  style={{
                    marginBottom: '10px',
                    paddingBottom: '5px',
                    marginLeft: '20px',
                    paddingLeft: '10px',
                  }}
                >
                  <div
                    style={{
                      marginLeft: '20px',
                      paddingLeft: '10px',
                      flexDirection: 'row',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        width: '50%',
                        color: '#525257',
                        textAlign: 'left',
                        fontSize: 15,
                        fontWeight: 600,
                      }}
                    >
                      CCNA
                    </div>
                    <div style={{ width: '50%', textAlign: 'left' }}>
                      <span className="in-progress">
                        Certification Test Scheduled
                        <Icon style={{ margin: '5px' }} type="calendar" theme="outlined" />
                      </span>
                    </div>
                  </div>
                  <Divider className="content-divider" />
                  <div
                    style={{
                      marginLeft: '20px',
                      paddingLeft: '10px',
                      flexDirection: 'row',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        width: '50%',
                        color: '#525257',
                        textAlign: 'left',
                        fontSize: 15,
                        fontWeight: 600,
                      }}
                    >
                      CCNP
                    </div>
                    <div style={{ width: '50%', textAlign: 'left' }}>
                      <Checkbox>Select to Show Interest in Certification</Checkbox>
                    </div>
                  </div>
                </div>
              </div>
              {/* {this.state.programValue && <Divider/>} */}
              <div
                style={
                  this.state.programValue === 'AWS Technical Support Program'
                    ? {
                        marginLeft: '20px',
                        paddingLeft: '10px',
                        marginRight: '20px',
                        paddingRight: '10px',
                      }
                    : { display: 'none' }
                }
              >
                <p style={{ fontSize: 16, fontWeight: 600, color: 'black' }}>Certifications</p>
                <Divider />
                <div
                  style={{
                    marginLeft: '20px',
                    paddingLeft: '10px',
                    marginRight: '20px',
                    paddingRight: '10px',
                    flexDirection: 'row',
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      width: '50%',
                      color: '#525257',
                      textAlign: 'left',
                      fontSize: 15,
                      fontWeight: 600,
                    }}
                  >
                    Security+
                  </div>
                  <div style={{ width: '50%', textAlign: 'left' }}>
                    <span style={{ margin: '5px' }} className="in-progress">
                      Certification Test Scheduled
                      <Icon style={{ margin: '5px' }} type="calendar" theme="outlined" />
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: '20px',
                    paddingLeft: '10px',
                    marginRight: '20px',
                    paddingRight: '10px',
                  }}
                >
                  <Divider className="content-divider" />
                </div>
                <div
                  style={{
                    marginLeft: '20px',
                    padding: '10px',
                    flexDirection: 'row',
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      width: '50%',
                      color: '#525257',
                      textAlign: 'left',
                      fontSize: 15,
                      fontWeight: 600,
                    }}
                  >
                    AWS Developer
                  </div>
                  <div style={{ width: '50%', textAlign: 'left' }}>
                    <span style={{ margin: '5px' }} className="completed">
                      Certification Complete
                      <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
                    </span>
                  </div>
                </div>
              </div>
            </Row>
          </div>
          <Divider />
          <div style={{ border: '1.5px solid #919197', borderRadius: 5 }}>
            <div onClick={() => this.toggleShow(1)} className="hover-div">
              <div style={{ alignItems: 'center' }}>
                <Icon
                  style={{
                    fontSize: 16,
                    color: '#525257',
                    marginTop: 10,
                    marginLeft: 10,
                    marginBottom: 10,
                    paddingTop: 10,
                    paddingLeft: 10,
                    paddingBottom: 10,
                    fontWeight: 'bolder',
                    padding: 5,
                  }}
                  type={items[1].show ? 'up' : 'down'}
                />
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: 1.5,
                    color: '#525257',
                    margin: 10,
                    padding: 5,
                  }}
                >
                  Recommended Career Track
                </span>
              </div>
            </div>
            <div
              style={{
                width: '100%',
                height: `${items[1].show ? '2px' : 0}`,
                background: '#919197',
              }}
            />
            <Row
              style={{
                display: items[1].show ? 'block' : 'none',
                paddingLeft: '10px',
                marginLeft: '20px',
              }}
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
                  <h3 style={{ color: '#525257' }}>Select another program</h3>
                </p>
                <AutoComplete
                  style={{ width: 350, marginLeft: '10px', paddingLeft: '5px' }}
                  allowClear
                  dataSource={dataSourceProgram2}
                  placeholder="Program"
                  onSelect={this.handleProgramSelect2}
                  onChange={this.handleProgramChange2}
                  filterOption={(inputValue, option) =>
                    option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
                />
              </div>
              <Divider />
              <div
                style={{
                  padding: '10px',
                  margin: '20px',
                }}
              >
                <p
                  style={{
                    color: '#525257',
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Software Developer Level 3
                </p>
                <p
                  style={{
                    color: '#525257',
                    fontSize: 15,
                    marginLeft: '20px',
                    paddingLeft: '10px',
                  }}
                >
                  Program: {this.state.programValue2 || 'No program selected'}
                </p>
                <div
                  style={
                    this.state.programValue2 === 'Department of Defense Space Program'
                      ? { marginLeft: '10px', paddingLeft: '5px' }
                      : { display: 'none' }
                  }
                >
                  <div style={{ fontSize: 15, textAlign: 'center' }}>
                    <a style={{ margin: 10, padding: 5 }} onClick={this.showPositionsModal2}>
                      Current Open Positions: 4
                    </a>
                    <Divider type="vertical" />
                    <a style={{ margin: 10, padding: 5 }} onClick={this.showModal2}>
                      Current Percentage Complete: 35%
                    </a>
                    <Divider type="vertical" />
                    <span style={{ margin: 10, padding: 5 }}>
                      Overall Expected Completion Date: 2/1/2020
                    </span>
                  </div>
                </div>
                <div
                  style={
                    this.state.programValue2 === 'AWS Technical Support Program'
                      ? { marginLeft: '10px', paddingLeft: '5px' }
                      : { display: 'none' }
                  }
                >
                  <div style={{ fontSize: 15, textAlign: 'center' }}>
                    <a style={{ margin: 10, padding: 5 }} onClick={this.showPositionsModal2}>
                      Current Open Positions: 3
                    </a>
                    <Divider type="vertical" />
                    <a style={{ margin: 10, padding: 5 }} onClick={this.showModal2}>
                      Current Percentage Complete: 85%
                    </a>
                    <Divider type="vertical" />
                    <span style={{ margin: 10, padding: 5 }}>
                      Overall Expected Completion Date: 2/1/2020
                    </span>
                  </div>
                </div>
                <Divider />
                <div
                  style={
                    this.state.programValue2 === 'Department of Defense Space Program'
                      ? { marginLeft: 20, paddingLeft: 10, marginRight: 20, paddingRight: 10 }
                      : { display: 'none' }
                  }
                >
                  <div style={{ marginBottom: '10px', paddingBottom: '5px' }}>
                    <p style={{ fontSize: 16, fontWeight: 600 }}>Trainings</p>
                    <div
                      style={{
                        marginLeft: '20px',
                        padding: '10px',
                        flexDirection: 'row',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          width: '50%',
                          color: '#525257',
                          textAlign: 'left',
                          fontSize: 15,
                          fontWeight: 600,
                        }}
                      >
                        Programming Level 3 Training
                      </div>
                      <div style={{ width: '50%', textAlign: 'left' }}>
                        <span className="in-progress">
                          Training Scheduled
                          <Icon style={{ margin: '5px' }} type="calendar" theme="outlined" />
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        marginLeft: '20px',
                        padding: '10px',
                        flexDirection: 'row',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          width: '50%',
                          color: '#525257',
                          textAlign: 'left',
                          fontSize: 15,
                          fontWeight: 600,
                        }}
                      >
                        Database Level 3 Traning
                      </div>
                      <div style={{ width: '50%', textAlign: 'left' }}>
                        <span className="in-progress">
                          Training in Progress
                          <Icon style={{ margin: '5px' }} type="sync" spin />
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        marginLeft: '20px',
                        padding: '10px',
                        flexDirection: 'row',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          width: '50%',
                          color: '#525257',
                          textAlign: 'left',
                          fontSize: 15,
                          fontWeight: 600,
                        }}
                      >
                        Advanced Agile Traning
                      </div>
                      <div style={{ width: '50%', textAlign: 'left' }}>
                        <span className="completed">
                          Training Complete
                          <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
                        </span>
                      </div>
                    </div>
                    <Divider />
                    <p style={{ fontSize: 16, fontWeight: 600 }}>Certifications</p>
                    <div
                      style={{
                        marginLeft: '20px',
                        padding: '10px',
                        flexDirection: 'row',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          width: '50%',
                          color: '#525257',
                          textAlign: 'left',
                          fontSize: 15,
                          fontWeight: 600,
                        }}
                      >
                        CCISP
                      </div>
                      <div style={{ width: '50%', textAlign: 'left' }}>
                        <span className="attention">
                          Certification Recently Shown Interest, Needs Action
                          <Icon style={{ margin: '5px' }} type="warning" theme="filled" />
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        marginLeft: '20px',
                        padding: '10px',
                        flexDirection: 'row',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          width: '50%',
                          color: '#525257',
                          textAlign: 'left',
                          fontSize: 15,
                          fontWeight: 600,
                        }}
                      >
                        AWS Developer
                      </div>
                      <div style={{ width: '50%', textAlign: 'left' }}>
                        <span className="completed">
                          Certification Complete
                          <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={
                    this.state.programValue2 === 'AWS Technical Support Program'
                      ? { marginLeft: 20, paddingLeft: 10, marginRight: 20, paddingRight: 10 }
                      : { display: 'none' }
                  }
                >
                  <div style={{ marginBottom: '10px', paddingBottom: '5px' }}>
                    <p style={{ fontSize: 16, fontWeight: 600 }}>Certifications</p>
                    <div
                      style={{
                        marginLeft: '20px',
                        padding: '10px',
                        flexDirection: 'row',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          width: '50%',
                          color: '#525257',
                          textAlign: 'left',
                          fontSize: 15,
                          fontWeight: 600,
                        }}
                      >
                        Security++
                      </div>
                      <div style={{ width: '50%', textAlign: 'left' }}>
                        <span style={{ margin: '5px' }} className="in-progress">
                          Certification Test Scheduled
                          <Icon style={{ margin: '5px' }} type="calendar" theme="outlined" />
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        marginLeft: '20px',
                        padding: '10px',
                        flexDirection: 'row',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          width: '50%',
                          color: '#525257',
                          textAlign: 'left',
                          fontSize: 15,
                          fontWeight: 600,
                        }}
                      >
                        AWS Developer
                      </div>
                      <div style={{ width: '50%', textAlign: 'left' }}>
                        <span style={{ margin: '5px' }} className="completed">
                          Certification Complete
                          <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
            </Row>
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
