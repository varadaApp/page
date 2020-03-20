import React from 'react';
import { Card, Icon, AutoComplete, Button, Modal, Checkbox, Divider, Select } from 'antd';
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
    };
    this.handleProgramSearch = this.handleProgramSearch.bind(this);
    this.handleLocationSearch = this.handleLocationSearch.bind(this);
    this.handleCertificationSearch = this.handleCertificationSearch.bind(this);
    this.handleClearanceSearch = this.handleClearanceSearch.bind(this);
    this.handleCareerTrackSearch = this.handleCareerTrackSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.showRow = this.showRow.bind(this);
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

    return (
      <PageHeaderWrapper>
        <Card>
          <div className="screen-header">
            <h1 className="page-title">Career Track Search</h1>
          </div>
          <Divider />
          <div className="hover-cards-container">
            <HoverCard icon={<Icon type="star" style={{fontSize: 80}} theme="twoTone" twoToneColor="#fff"/>} />
            <HoverCard icon={<Icon type="check" style={{fontSize: 80, color: "#fff"}} />} />
            <HoverCard icon={<Icon type="bulb" style={{fontSize: 80}} theme="twoTone" twoToneColor="#fff"/>} />
          </div>
          <div style={{ backgroundColor: '#f0f2f5', padding: '15px', paddingBottom: '50px' }}>
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
