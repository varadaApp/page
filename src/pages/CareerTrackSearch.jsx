import React from 'react';
import { Card, Icon, AutoComplete, Button, Table, Modal, Checkbox, Divider, Select, Row, Col } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ReactTable from 'react-table';
import { careerTrackData } from './Utils';
import HoverCard from './common-components/HoverCard';
// Import React Table
import 'react-table/react-table.css';

const autoCompleteStyle = {
  width: '100%',
  margin: '5px',
  padding: '2px',
};
const radiusStyle = {
  width: '100%',
  marginTop: '5px',
  padding: '2px',
};
class CareerTrackSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: careerTrackData(),
      hideTable: true,
      programValue: '',
      locationValue: '',
      certificationValue: '',
      clearanceValue: '',
      careerTrackValue: '',
      programValue2: 'Department of Defense Space Program',
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
    this.handleProgramSearch = this.handleProgramSearch.bind(this);
    this.handleLocationSearch = this.handleLocationSearch.bind(this);
    this.handleCertificationSearch = this.handleCertificationSearch.bind(this);
    this.handleClearanceSearch = this.handleClearanceSearch.bind(this);
    this.handleCareerTrackSearch = this.handleCareerTrackSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.showRow = this.showRow.bind(this);
    this.handleProgramChange2 = this.handleProgramChange2.bind(this);
    this.handleProgramSelect2 = this.handleProgramSelect2.bind(this);
  }

  showRow = row => {
    const { info } = Modal;
    info({
      width: 600,
      title: `${row.programName}: ${row.careerTrackName} Tier ${row.careerTrackTier}`,
      content: (
        <div>
          <p>Location: {row.locationName}</p>
          <p>Required Clearance: {row.clearanceLevel}</p>
          <div
            style={row.programName === 'AWS Technical Support Program' ? {} : { display: 'none' }}
          >
            <p>Certifications Required:</p>
            <ul>
              <li>AWS Support Certification</li>
              <li>Security+</li>
            </ul>
            <p>Trainings Required:</p>
            <ul>
              <li>IA Fundamentals</li>
            </ul>
          </div>
          <Checkbox>Make this your primary selected career track?</Checkbox>
        </div>
      ),
      onOk() {},
    });
  };

  handleClear = () => {
    this.setState({ programValue: '' });
    this.setState({ locationValue: '' });
    this.setState({ certificationValue: '' });
    this.setState({ clearanceValue: '' });
    this.setState({ careerTrackValue: '' });
    this.setState({ hideTable: true });
  };

  handleProgramChange2(value) {
    this.setState({ programValue2: value });
  }

  handleProgramSelect2(value) {
    this.setState({ programValue2: value });
  }


  handleCareerTrackSearch(value) {
    let filteredCareerTracks = careerTrackData().filter(
      careerTrack => careerTrack.careerTrackName === value,
    );
    if (this.state.programValue) {
      const selectedProgram = this.state.programValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.programName === selectedProgram,
      );
    }
    if (this.state.locationValue) {
      const selectedLocation = this.state.locationValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.locationName === selectedLocation,
      );
    }
    if (this.state.clearanceValue) {
      const selectedClearance = this.state.clearanceValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.clearanceLevel === selectedClearance,
      );
    }
    this.setState({ careerTrackValue: value });
    this.setState({ data: filteredCareerTracks });
    this.setState({ hideTable: false });
  }

  componentDidMount() {
    const names = [
      { big: '5', small: '5', index: 0, tab: 2},
    ]
    names.forEach((item, i) => {
      this.toggleShow(item.index, item.tab, `grow-class-${item.small}`, `measuringWrapper${item.big}`);
    })
  }
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

  handleClearanceSearch(value) {
    let filteredCareerTracks = careerTrackData().filter(
      careerTrack => careerTrack.clearanceLevel === value,
    );
    if (this.state.programValue) {
      const selectedProgram = this.state.programValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.programName === selectedProgram,
      );
    }
    if (this.state.locationValue) {
      const selectedLocation = this.state.locationValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.locationName === selectedLocation,
      );
    }
    if (this.state.careerTrackValue) {
      const selectedCareerTrack = this.state.careerTrackValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.careerTrackName === selectedCareerTrack,
      );
    }
    this.setState({ clearanceValue: value });
    this.setState({ data: filteredCareerTracks });
    this.setState({ hideTable: false });
  }

  handleCertificationSearch(value) {
    let filteredCareerTracks = careerTrackData();

    if (value.includes('AWS')) {
      filteredCareerTracks = careerTrackData().filter(careerTrack =>
        careerTrack.programName.includes('AWS'),
      );
    }

    if (this.state.programValue) {
      const selectedProgram = this.state.programValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.programName === selectedProgram,
      );
    }
    if (this.state.locationValue) {
      const selectedLocation = this.state.locationValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.locationName === selectedLocation,
      );
    }
    if (this.state.clearanceValue) {
      const selectedClearance = this.state.clearanceValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.clearanceLevel === selectedClearance,
      );
    }
    if (this.state.careerTrackValue) {
      const selectedCareerTrack = this.state.careerTrackValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.careerTrackName === selectedCareerTrack,
      );
    }
    this.setState({ certificationValue: value });
    this.setState({ data: filteredCareerTracks });
    this.setState({ hideTable: false });
  }

  handleLocationSearch(value) {
    let filteredCareerTracks = careerTrackData().filter(
      careerTrack => careerTrack.locationName === value,
    );
    if (this.state.programValue) {
      const selectedProgram = this.state.programValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.programName === selectedProgram,
      );
    }
    if (this.state.clearanceValue) {
      const selectedClearance = this.state.clearanceValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.clearanceLevel === selectedClearance,
      );
    }
    if (this.state.careerTrackValue) {
      const selectedCareerTrack = this.state.careerTrackValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.careerTrackName === selectedCareerTrack,
      );
    }
    this.setState({ locationValue: value });
    this.setState({ data: filteredCareerTracks });
    this.setState({ hideTable: false });
  }

  // eslint-disable-next-line class-methods-use-this
  handleOriginal(value) {
    console.log('handleOriginal', value);
  }

  handleProgramSearch(value) {
    let filteredCareerTracks = careerTrackData().filter(
      careerTrack => careerTrack.programName === value,
    );
    if (this.state.locationValue) {
      const selectedLocation = this.state.locationValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.locationName === selectedLocation,
      );
    }
    if (this.state.clearanceValue) {
      const selectedClearance = this.state.clearanceValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.clearanceLevel === selectedClearance,
      );
    }
    if (this.state.careerTrackValue) {
      const selectedCareerTrack = this.state.careerTrackValue;
      filteredCareerTracks = filteredCareerTracks.filter(
        careerTrack => careerTrack.careerTrackName === selectedCareerTrack,
      );
    }
    this.setState({ programValue: value });
    this.setState({ data: filteredCareerTracks });
    this.setState({ hideTable: false });
  }

  render() {
    const { data } = this.state;
    const dataSource4 = [
      {
        key: '1',
        training: 'System Administration Level 3 Training',
        status: (
          <span className="in-progress">
            Training Scheduled
            <Icon style={{ margin: '5px' }} type="calendar" theme="outlined" />
          </span>
        ),
      },
      {
        key: '2',
        training: 'Windows Server Administration Level 3 Training',
        status: (
          <span className="in-progress">
            Training in Progress
            <Icon style={{ margin: '5px' }} type="sync" spin />
          </span>
        ),
      },
      // {
      //   key: '3',
      //   training: 'Advanced Agile Traning',
      //   status: (
      //     <span className="completed">
      //       Training Complete
      //       <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
      //     </span>
      //   ),
      // },
    ];

    const dataSource5 = [
      {
        key: '1',
        certification: 'VMWare',
        status: (
          <span className="attention">
            Certification Recently Shown Interest, Needs Action
            <Icon style={{ margin: '5px' }} type="warning" theme="filled" />
          </span>
        ),
      },
      {
        key: '2',
        certification: 'Cloudera CDH4 Administrator',
        status: <Checkbox>Select to Show Interest in Certification</Checkbox>,
      },
    ];

    const dataSource6 = [
      {
        key: '1',
        training: 'System Administration Level 3 Training',
        status: (
          <span className="in-progress">
            Training Scheduled
            <Icon style={{ margin: '5px' }} type="calendar" theme="outlined" />
          </span>
        ),
      },
      {
        key: '2',
        training: 'Windows Server Administration Level 3 Training',
        status: (
          <span className="in-progress">
            Training in Progress
            <Icon style={{ margin: '5px' }} type="sync" spin />
          </span>
        ),
      },
      // {
      //   key: '3',
      //   training: 'Advanced Agile Traning',
      //   status: (
      //     <span className="completed">
      //       Training Complete
      //       <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
      //     </span>
      //   ),
      // },
    ];

    const dataSource7 = [
      {
        key: '1',
        certification: 'VMWare',
        status: (
          <span className="attention">
            Certification Recently Shown Interest, Needs Action
            <Icon style={{ margin: '5px' }} type="warning" theme="filled" />
          </span>
        ),
      },
      {
        key: '2',
        certification: 'AWS Administration',
        status: (
          <span style={{ margin: '5px' }} className="completed">
            Certification Complete
            <Icon style={{ margin: '5px' }} type="check-circle" theme="outlined" />
          </span>
        ),
      },
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
    const styleHide = this.state.hideTable
      ? { display: 'none' }
      : { padding: '10px', margin: '20px' };
    const NoDataComponent = () => <div className="rt-noData">No rows found</div>;
    const dataSourceProgram = [
      'AWS Technical Support Program',
      'DoD Space Program',
      'DHS Satellite Network',
      'DoJ Networks',
      'DoS Nuclear Defense System',
      'FBI Case Management System',
    ];
    const dataSourcePositionTitle = ['System Administrator', 'System Engineer'];
    const dataSourceCertification = [
      'A+',
      'Agile',
      'AWS',
      'BICSI',
      'CAP',
      'CCNA',
      'CCNE',
      'CCNP',
      'CISSP',
      'Cloudera CDH4 Administrator',
      'Cloudera CDH4 Developer',
      'CSM',
      'CTNS',
      'GSLC',
      'HDI',
      'INCOSE CSEP',
      'ISSA',
      'ITIL',
      'Lean Six Sigma',
      'MCSA',
      'MCSE',
      'Network+',
      'OCP DBA',
      'Oracle',
      'PMP',
      'Security+',
      'Sharepoint',
      'Splunk',
      'VMWare',
    ];
    const dataSourceClearance = [
      'DOJ SUITABILITY',
      'DOJ SUITABILITY/ TS',
      'EOD SUITABILITY',
      'EOD SUITABILITY / SECRET',
      'EOD SUITABILITY / TS',
      'EOD SUITABILITY / TS/SCI',
      'INTERIM SECRET',
      'INTERIM TOP SECRET',
      'NO-CLRNC',
      'PUBLIC TRUST',
      'SECRET',
      'TOP SECRET',
      'TS',
      'TS/SCI',
      'TS/SCI CI POLY',
      'TS/SCI FSP',
      'UNCLASSIFIED',
    ];
    const dataSourceCareerTrack = [
      'Cyber IA',
      'Cyber IT',
      'Database Administration',
      'Deskside/Field Services',
      'Help Desk',
      'Network Administration',
      'Network Engineering',
      'Program Ops (Technical)',
      'Program/Project Management',
      'Software Development',
      'Systems Administration',
      'Systems Engineering',
      'Telecommunications/VOIP',
    ];
    const dataSourceLocation = [
      'Washington DC',
      'National Harbor MD',
      'Chantilly VA',
      'Fort Belvoir VA',
    ];

    const headerData = [
      {
        label: 'Trending Careers',
        value: '5,312',
        items: [
          'Career #1',
          'Career #2',
          'Career #3',
          'Career #4',
        ],
        icon: <Icon type="star" style={{fontSize: 80}} theme="twoTone" twoToneColor="#fff"/>,
      },
      {
        label: 'Recommended Positions',
        value: '437',
        items: [
          'Position #1',
          'Position #2',
          'Position #3',
          'Position #4',
        ],
        icon: <Icon type="check" style={{fontSize: 80, color: "#fff"}} />,
      },
      {
        label: 'Recently Added',
        value: '24',
        items: [
          'Position #1',
          'Position #2',
          'Position #3',
          'Position #4',
        ],
        icon: <Icon type="bulb" style={{fontSize: 80}} theme="twoTone" twoToneColor="#fff"/>,
      },
    ];

    return (
      <PageHeaderWrapper>
        <Card>
          <div className="screen-header">
            <h1 className="page-title">Career Track Search</h1>
          </div>
          <div style={{ display: 'flex', margin: 20, padding: 10 }}>
            <Icon style={{ fontSize: 35 }} type="bulb" /> 
            <div style={{ width: '80%', paddingLeft: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <Divider />
          <div className="hover-cards-container">
            <HoverCard value={headerData[0].value} label={headerData[0].label} items={headerData[0].items} icon={<Icon type="star" style={{fontSize: 80}} theme="twoTone" twoToneColor="#fff"/>} />
            <HoverCard value={headerData[1].value} label={headerData[1].label} items={headerData[1].items} icon={<Icon type="check" style={{fontSize: 80, color: "#fff"}} />} />
            <HoverCard value={headerData[2].value} label={headerData[2].label} items={headerData[2].items} icon={<Icon type="bulb" style={{fontSize: 80}} theme="twoTone" twoToneColor="#fff"/>} />
          </div>
          <Row style={{ marginRight: 20 }} xs={12}>
              <div className="shadowed-box-container">
                <div>
                  <div className="customized-top-container">
                    <span
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        lineHeight: 1.5,
                        color: 'black',
                        textAlign: 'center',
                        margin: 10,
                        width: '100%',
                        textTransform: 'uppercase',
                        padding: 5,
                      }}
                    >
                      Recommended Career Track
                    </span>
                  </div>
                </div>
                <Row>
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
                    <Select
                      showSearch
                      placeholder="Program"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                      onSelect={this.handleProgramSelect2}
                      onChange={this.handleProgramChange2}
                    >
                      <Option value="Department of Defense Space Program">
                        Department of Defense Space Program
                      </Option>
                      <Option value="AWS Technical Support Program">
                        AWS Technical Support Program
                      </Option>
                    </Select>
                    <div style={{ margin: 10 }}>
                      <span style={{ fontWeight: 600, marginRight: 5 }}>Program:</span>
                      {this.state.programValue2 || 'No program selected'}
                    </div>
                  </div>
                  
                  <div>
                    <div
                      className="row-title "
                      onClick={() => this.toggleShow(0, 2, 'grow-class-5', 'measuringWrapper5')}
                    >
                      System Administration Tier 3
                      <Icon className="" type={this.state.tab2[0].show ? 'up' : 'down'} />
                    </div>
                    <div className="grow-class grow-class-5">
                      <div className="measuringWrapper5">
                        <p
                          style={{
                            color: '#525257',
                            fontSize: 13,
                          }}
                        >
                        </p>
                        <div
                          style={
                            this.state.programValue2 === 'Department of Defense Space Program'
                              ? {}
                              : { display: 'none' }
                          }
                        >
                          <div style={{ fontSize: 13 }}>
                            <Divider className="content-divider" />
                            {/* <div
                              style={{ marginTop: 10, paddingTop: 5 }}
                              onClick={this.showPositionsModal2}
                            >
                              <a>
                                <span style={{ fontWeight: 600, marginRight: 5 }}>
                                  Current Open Positions:
                                </span>
                                <span>4</span>
                              </a>
                            </div>
                            <Divider className="content-divider" /> */}
                            <div style={{ marginTop: 10, paddingTop: 5 }} onClick={this.showModal3}>
                              <a>
                                <span style={{ fontWeight: 600, marginRight: 5 }}>
                                  Current Percentage Complete:
                                </span>
                                <span>35%</span>
                              </a>
                            </div>
                            <Divider className="content-divider" />
                            <div style={{ marginTop: 10, paddingTop: 5 }}>
                              <span>
                                <span style={{ fontWeight: 600, marginRight: 5 }}>
                                  Overall Expected Completion Date:
                                </span>
                                5/1/2020
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          style={
                            this.state.programValue2 === 'AWS Technical Support Program'
                              ? {}
                              : { display: 'none' }
                          }
                        >
                          <div style={{ fontSize: 13 }}>
                            {/* <div
                              style={{ marginTop: 10, paddingTop: 5 }}
                              onClick={this.showPositionsModal2}
                            >
                              <a>
                                <span style={{ fontWeight: 600, marginRight: 5 }}>
                                  Current Open Positions:
                                </span>
                                <span>3</span>
                              </a>
                            </div> */}
                            <Divider className="content-divider" />
                            <div style={{ marginTop: 10, paddingTop: 5 }} onClick={this.showModal2}>
                              <a>
                                <span style={{ fontWeight: 600, marginRight: 5 }}>
                                  Current Percentage Complete:
                                </span>
                                <span>45%</span>
                              </a>
                            </div>
                            <Divider className="content-divider" />
                            <div style={{ marginTop: 10, paddingTop: 5 }}>
                              <span>
                                <span style={{ fontWeight: 600, marginRight: 5 }}>
                                  Overall Expected Completion Date:
                                </span>
                                5/1/2020
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      this.state.programValue2 === 'Department of Defense Space Program'
                        ? { }
                        : { display: 'none' }
                    }
                  >
                    <div
                      className="row-title "
                      onClick={() => this.toggleShow(1, 2, 'grow-class-6', 'measuringWrapper6')}
                    >
                      Trainings
                      <Icon className="" type={this.state.tab2[1].show ? 'up' : 'down'} />
                    </div>
                    <div className="grow-class grow-class-6">
                      <div className="measuringWrapper6">
                        <Table
                          className="career-track-management-table"
                          dataSource={dataSource4}
                          columns={columns}
                          size="middle"
                          pagination={false}
                          style={{ paddingBottom: 20 }}
                        />
                      </div>
                    </div>
                    
                    <div
                      className="row-title "
                      onClick={() => this.toggleShow(2, 2, 'grow-class-7', 'measuringWrapper7')}
                    >
                      Certifications
                      <Icon className="" type={this.state.tab2[2].show ? 'up' : 'down'} />
                    </div>
                    <div className="grow-class grow-class-7">
                      <div className="measuringWrapper7">
                        <Table
                          className="career-track-management-table"
                          dataSource={dataSource5}
                          columns={columns2}
                          size="middle"
                          pagination={false}
                          style={{ paddingBottom: 20 }}
                        />
                      </div>
                    </div>
                    
                  </div>
                  <div
                    style={
                      this.state.programValue2 === 'AWS Technical Support Program'
                        ? { }
                        : { display: 'none' }
                    }
                  >
                    <div
                      className="row-title "
                      onClick={() => this.toggleShow(3, 2, 'grow-class-8', 'measuringWrapper8')}
                    >
                      Trainings
                      <Icon className="" type={this.state.tab2[3].show ? 'up' : 'down'} />
                    </div>
                    <div className="grow-class grow-class-8">
                      <div className="measuringWrapper8">
                        <Table
                          className="career-track-management-table"
                          dataSource={dataSource6}
                          columns={columns}
                          size="middle"
                          pagination={false}
                          style={{ paddingBottom: 20 }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div
                        className="row-title "
                        onClick={() => this.toggleShow(4, 2, 'grow-class-9', 'measuringWrapper9')}
                      >
                        Certifications
                        <Icon className="" type={this.state.tab2[4].show ? 'up' : 'down'} />
                      </div>
                      <div className="grow-class grow-class-9">
                        <div className="measuringWrapper9">
                          <Table
                            className="career-track-management-table"
                            dataSource={dataSource7}
                            columns={columns2}
                            size="middle"
                            pagination={false}
                            style={{ paddingBottom: 20 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="filler" />
              </div>
            </Row>
          <div style={{ marginTop: 20 ,marginRight: 20, backgroundColor: '#f0f2f5', padding: '15px', paddingBottom: '50px' }}>
            <h2 style={{ fontSize: '22px', color: 'black' }}>Filter by:</h2>
            <div style={{ display: 'flex' }}>
              <AutoComplete
                style={autoCompleteStyle}
                // allowClear={true}
                dataSource={dataSourceProgram}
                placeholder="Program"
                onChange={this.handleProgramSearch}
                value={this.state.programValue}
                filterOption={(inputValue, option) =>
                  option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
              />
              <br />
              <AutoComplete
                // allowClear={true}
                style={autoCompleteStyle}
                dataSource={dataSourceLocation}
                placeholder="Location"
                onChange={this.handleLocationSearch}
                value={this.state.locationValue}
                filterOption={(inputValue, option) =>
                  option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
              />
              <br />
              <Select showSearch style={radiusStyle} placeholder="Radius">
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
              <br />
              <AutoComplete
                // allowClear={true}
                style={autoCompleteStyle}
                dataSource={dataSourceCertification}
                placeholder="Certification"
                onChange={this.handleCertificationSearch}
                value={this.state.certificationValue}
                filterOption={(inputValue, option) =>
                  option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
              />
              <br />
              <AutoComplete
                // allowClear={true}
                style={autoCompleteStyle}
                dataSource={dataSourceClearance}
                placeholder="Clearance"
                onChange={this.handleClearanceSearch}
                value={this.state.clearanceValue}
                filterOption={(inputValue, option) =>
                  option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
              />
              <br />
              <AutoComplete
                // allowClear={true}
                style={autoCompleteStyle}
                dataSource={dataSourceCareerTrack}
                placeholder="Career Track"
                onChange={this.handleCareerTrackSearch}
                value={this.state.careerTrackValue}
                filterOption={(inputValue, option) =>
                  option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
              />
            </div>
            <div style={{ margin: '10px', float: 'right' }}>
              <Button style={{ width: '100px' }} onClick={this.handleClear}>
                Clear
              </Button>
            </div>
          </div>
          <ReactTable
            data={data}
            resolveData={d => d.map(row => row)}
            // filterable
            style={styleHide}
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
            // noDataText={!this.state.loading ? 'No rows found' : ''}
            NoDataComponent={NoDataComponent}
            getTdProps={() => ({
              onClick: (e, handleOriginal) => {
                if (handleOriginal) {
                  handleOriginal();
                }
              },
            })}
            getTrProps={(state, rowInfo) => ({
              onClick: (e, handleOriginal) => {
                this.showRow(rowInfo.original);
                if (handleOriginal) {
                  handleOriginal();
                }
              },
            })}
            columns={[
              {
                Header: 'Career Track Information',
                columns: [
                  {
                    Header: 'Career Track',
                    accessor: 'careerTrackName',
                    // filterMethod: (filter, row) =>
                    //   row[filter.id].startsWith(filter.value) &&
                    //   row[filter.id].endsWith(filter.value),
                  },
                  {
                    Header: 'Tier',
                    accessor: 'careerTrackTier',
                    width: 70,
                  },
                ],
              },
              {
                Header: 'Program Information',
                columns: [
                  {
                    Header: 'Name',
                    accessor: 'programName',
                  },
                  {
                    Header: 'Clearance Required',
                    accessor: 'clearanceLevel',
                  },
                  {
                    Header: 'Location',
                    accessor: 'locationName',
                  },
                ],
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight customized-table"
          />
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

export default CareerTrackSearch;
