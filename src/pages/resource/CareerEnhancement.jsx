/* eslint-disable class-methods-use-this */
import React from 'react';
import { Card, Icon, Row, Col, AutoComplete, Button, Radio, Modal, Checkbox } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

// Import React Table
import ReactTable from 'react-table';
import { enhancementSearchData } from '../Utils';
import 'react-table/react-table.css';

class CareerEnhancement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: enhancementSearchData(),
      enhancementType: 1,
      hideTable: true,
      programValue: '',
      locationValue: '',
      certificationValue: '',
      clearanceValue: '',
      careerTrackValue: '',
      showDuration: true,
      showFutureDate: true,
    };
    this.handleProgramSearch = this.handleProgramSearch.bind(this);
    this.handleLocationSearch = this.handleLocationSearch.bind(this);
    this.handleCertificationSearch = this.handleCertificationSearch.bind(this);
    this.handleClearanceSearch = this.handleClearanceSearch.bind(this);
    this.handleCareerTrackSearch = this.handleCareerTrackSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.showRow = this.showRow.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  handleOriginal(value) {
    console.log('handleOriginal', value);
  }

  radioChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      enhancementType: e.target.value,
    });

    if (e.target.value === 1) {
      this.setState({
        showDuration: true,
        showFutureDate: true,
      });
    }
    if (e.target.value === 2) {
      this.setState({
        showDuration: true,
        showFutureDate: false,
      });
    }
    if (e.target.value === 3) {
      this.setState({
        showDuration: false,
        showFutureDate: true,
      });
    }
    if (e.target.value === 4) {
      this.setState({
        showDuration: true,
        showFutureDate: true,
      });
    }
  };

  handleProgramSearch(value) {
    let filteredCareerTracks = enhancementSearchData().filter(
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

  handleLocationSearch(value) {
    let filteredCareerTracks = enhancementSearchData().filter(
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

  handleCertificationSearch(value) {
    let filteredCareerTracks = enhancementSearchData();
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

  handleClearanceSearch(value) {
    let filteredCareerTracks = enhancementSearchData().filter(
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

  handleCareerTrackSearch(value) {
    let filteredCareerTracks = enhancementSearchData().filter(
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

  handleClear = () => {
    this.setState({ programValue: '' });
    this.setState({ locationValue: '' });
    this.setState({ certificationValue: '' });
    this.setState({ clearanceValue: '' });
    this.setState({ careerTrackValue: '' });
    this.setState({ hideTable: true });
  };

  // eslint-disable-next-line class-methods-use-this
  showRow(row) {
    const { info } = Modal;
    console.log('modalrow', row);
    info({
      width: 600,
      title: row.positionTitle,
      content: (
        <div>
          <p>
            {row.programName}: {row.careerTrackName} Tier {row.careerTrackTier}
          </p>
          <p>Location: {row.locationName}</p>
          <p>Required Clearance: {row.clearanceLevel}</p>
          <p>Program Manager: {row.programManagerName}</p>
          <Checkbox>
            Are you interested in this career enhancement? Checking the box will send a notfication
            to the program manager: {row.programManagerName}
          </Checkbox>
        </div>
      ),
      onOk() {},
    });
  }

  render() {
    const { data } = this.state;
    const styleHide = this.state.hideTable ? { display: 'none' } : {};
    const NoDataComponent = () => <div className="rt-noData">No rows found</div>;
    const dataSourceProgram = [
      'AWS Technical Support Program',
      'DoD Space Program',
      'DHS Satellite Network',
      'DoJ Networks',
      'DoS Nuclear Defense System',
      'FBI Case Management System',
    ];
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
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    const autoCompleteStyle = {
      width: '100%',
      margin: '5px',
      padding: '2px',
    };
    return (
      <PageHeaderWrapper>
        <Card>
          <Row gutter={[4, 4]}>
            <Col style={{ paddingRight: '5px' }} xs={4}>
              <div style={{ height: '700px', backgroundColor: '#f0f2f5', padding: '15px' }}>
                <h2 style={{ fontSize: '24px', color: 'black' }}>
                  What kind of career enhancement opportunity are you looking for?
                </h2>
                <Radio.Group onChange={this.radioChange} value={this.state.enhancementType}>
                  <Radio style={radioStyle} value={1}>
                    All
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    Temporary/Short-Term Coverage
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    Future Open Position
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                    Proposal Position
                  </Radio>
                </Radio.Group>
                <h2 style={{ fontSize: '24px', color: 'black' }}>Filter by:</h2>
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
                  style={autoCompleteStyle}
                  // allowClear={true}
                  dataSource={dataSourceLocation}
                  placeholder="Location"
                  onChange={this.handleLocationSearch}
                  value={this.state.locationValue}
                  filterOption={(inputValue, option) =>
                    option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
                />
                <br />
                <AutoComplete
                  style={autoCompleteStyle}
                  // allowClear={true}
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
                  style={autoCompleteStyle}
                  // allowClear={true}
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
                  style={autoCompleteStyle}
                  // allowClear={true}
                  dataSource={dataSourceCareerTrack}
                  placeholder="Career Track"
                  onChange={this.handleCareerTrackSearch}
                  value={this.state.careerTrackValue}
                  filterOption={(inputValue, option) =>
                    option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
                />
                <br />
                <div style={{ float: 'right' }}>
                  <Button style={{ width: '100px' }} onClick={this.handleClear}>
                    Clear
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={20}>
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
                    Header: 'Career Enhancement Information',
                    columns: [
                      {
                        Header: 'Position Title',
                        accessor: 'positionTitle',
                      },
                      {
                        Header: 'Career Track',
                        accessor: 'careerTrackName',
                      },
                      {
                        Header: 'Career Track Tier',
                        accessor: 'careerTrackTier',
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
                        Header: 'Program Manager',
                        accessor: 'programManagerName',
                      },
                      {
                        Header: 'Clearance Required',
                        accessor: 'clearanceLevel',
                      },
                      {
                        Header: 'Location',
                        accessor: 'locationName',
                      },
                      {
                        Header: 'Future Date',
                        accessor: 'futureDate',
                        show: this.state.showFutureDate,
                      },
                      {
                        Header: 'Duration',
                        accessor: 'duration',
                        show: this.state.showDuration,
                      },
                    ],
                  },
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
              />
            </Col>
          </Row>
          <br />
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

export default CareerEnhancement;
