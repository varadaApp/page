import React from 'react';
import { Card, Icon, AutoComplete, Button, Modal, Checkbox, Divider } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ReactTable from 'react-table';
import { employeeSearch } from '../Utils';

// Import React Table
import 'react-table/react-table.css';

const autoCompleteStyle = {
  width: '100%',
  margin: '5px',
  padding: '2px',
};

class EmployeeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: employeeSearch(),
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

  handleClear = () => {
    this.setState({ programValue: '' });
    this.setState({ locationValue: '' });
    this.setState({ certificationValue: '' });
    this.setState({ clearanceValue: '' });
    this.setState({ careerTrackValue: '' });
    this.setState({ hideTable: true });
  };

  handleProgramSearch(value) {
    // var filteredCareerTracks = careerTrackData().filter(function(careerTrack) {
    //   return careerTrack.programName == value;
    // });
    // if (this.state.locationValue) {
    //   var selectedLocation = this.state.locationValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.locationName == selectedLocation;
    //   });
    // }
    // if (this.state.clearanceValue) {
    //   var selectedClearance = this.state.clearanceValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.clearanceLevel == selectedClearance;
    //   });
    // }
    // if (this.state.careerTrackValue) {
    //   var selectedCareerTrack = this.state.careerTrackValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.careerTrackName == selectedCareerTrack;
    //   });
    // }
    this.setState({ programValue: value });
    this.setState({ data: employeeSearch() });
    this.setState({ hideTable: false });
  }

  handleLocationSearch(value) {
    // var filteredCareerTracks = careerTrackData().filter(function(careerTrack) {
    //   return careerTrack.locationName == value;
    // });
    // if (this.state.programValue) {
    //   var selectedProgram = this.state.programValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.programName == selectedProgram;
    //   });
    // }
    // if (this.state.clearanceValue) {
    //   var selectedClearance = this.state.clearanceValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.clearanceLevel == selectedClearance;
    //   });
    // }
    // if (this.state.careerTrackValue) {
    //   var selectedCareerTrack = this.state.careerTrackValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.careerTrackName == selectedCareerTrack;
    //   });
    // }
    this.setState({ locationValue: value });
    this.setState({ data: employeeSearch() });
    this.setState({ hideTable: false });
  }

  handleCertificationSearch(value) {
    // var filteredCareerTracks = careerTrackData();
    // if (this.state.programValue) {
    //   var selectedProgram = this.state.programValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.programName == selectedProgram;
    //   });
    // }
    // if (this.state.locationValue) {
    //   var selectedLocation = this.state.locationValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.locationName == selectedLocation;
    //   });
    // }
    // if (this.state.clearanceValue) {
    //   var selectedClearance = this.state.clearanceValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.clearanceLevel == selectedClearance;
    //   });
    // }
    // if (this.state.careerTrackValue) {
    //   var selectedCareerTrack = this.state.careerTrackValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.careerTrackName == selectedCareerTrack;
    //   });
    // }
    this.setState({ certificationValue: value });
    this.setState({ data: employeeSearch() });
    this.setState({ hideTable: false });
  }

  handleClearanceSearch(value) {
    // var filteredCareerTracks = careerTrackData().filter(function(careerTrack) {
    //   return careerTrack.clearanceLevel == value;
    // });
    // if (this.state.programValue) {
    //   var selectedProgram = this.state.programValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.programName == selectedProgram;
    //   });
    // }
    // if (this.state.locationValue) {
    //   var selectedLocation = this.state.locationValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.locationName == selectedLocation;
    //   });
    // }
    // if (this.state.careerTrackValue) {
    //   var selectedCareerTrack = this.state.careerTrackValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.careerTrackName == selectedCareerTrack;
    //   });
    // }
    this.setState({ clearanceValue: value });
    this.setState({ data: employeeSearch() });
    this.setState({ hideTable: false });
  }

  handleCareerTrackSearch(value) {
    // var filteredCareerTracks = careerTrackData().filter(function(careerTrack) {
    //   return careerTrack.careerTrackName == value;
    // });
    // if (this.state.programValue) {
    //   var selectedProgram = this.state.programValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.programName == selectedProgram;
    //   });
    // }
    // if (this.state.locationValue) {
    //   var selectedLocation = this.state.locationValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.locationName == selectedLocation;
    //   });
    // }
    // if (this.state.clearanceValue) {
    //   var selectedClearance = this.state.clearanceValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.clearanceLevel == selectedClearance;
    //   });
    // }
    this.setState({ careerTrackValue: value });
    this.setState({ data: employeeSearch() });
    this.setState({ hideTable: false });
  }

  // eslint-disable-next-line class-methods-use-this
  handleOriginal(value) {
    console.log('handleOriginal', value);
  }

  // eslint-disable-next-line class-methods-use-this
  showRow(row) {
    const { info } = Modal;
    console.log('modalrow', row);
    info({
      width: 600,
      title: `${row.programName}: ${row.careerTrackName} Tier ${row.careerTrackTier}`,
      content: (
        <div>
          <p>Location: {row.locationName}</p>
          <p>Required Clearance: {row.clearanceLevel}</p>
          <p>Certifications:</p>
          <p>Trainings:</p>
          <p>Skills:</p>
          <Checkbox>Make this your primary selected career track?</Checkbox>
        </div>
      ),
      onOk() {},
    });
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
            <h1 className="page-title">Employee Search</h1>
          </div>
          <Divider />
          <div style={{ backgroundColor: '#f0f2f5', padding: '15px' }}>
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
            getTdProps={(state, rowInfo, column, instance) => ({
              onClick: (e, handleOriginal) => {
                console.log('A Td Element was clicked!');
                console.log('it produced this event:', e);
                console.log('It was in this column:', column);
                console.log('It was in this row:', rowInfo);
                console.log('It was in this table instance:', instance);
                console.log('handleOriginal', handleOriginal);
                // IMPORTANT! React-Table uses onClick internally to trigger
                // events like expanding SubComponents and pivots.
                // By default a custom 'onClick' handler will override this functionality.
                // If you want to fire the original onClick handler, call the
                // 'handleOriginal' function.
                if (handleOriginal) {
                  handleOriginal();
                }
              },
            })}
            getTrProps={(state, rowInfo, column) => ({
              onClick: (e, handleOriginal) => {
                console.log('A TR Element was clicked!');
                console.log('it produced this event:', e);
                console.log('It was in this column:', column);
                console.log('It was in this row:', rowInfo);
                // console.log('It was in this table instance:', instance);
                console.log('handleOriginal', handleOriginal);
                // IMPORTANT! React-Table uses onClick internally to trigger
                // events like expanding SubComponents and pivots.
                // By default a custom 'onClick' handler will override this functionality.
                // If you want to fire the original onClick handler, call the
                // 'handleOriginal' function.
                this.showRow(rowInfo.original);
                if (handleOriginal) {
                  handleOriginal();
                }
              },
            })}
            columns={[
              {
                Header: 'Employee Information',
                columns: [
                  {
                    Header: 'Employee',
                    accessor: 'employeeName',
                  },
                  {
                    Header: 'Clearance',
                    accessor: 'clearanceLevel',
                  },
                  {
                    Header: 'Career Track',
                    accessor: 'careerTrackName',
                  },
                ],
              },
              {
                Header: 'Program Information',
                columns: [
                  {
                    Header: 'Program',
                    accessor: 'programName',
                  },
                  {
                    Header: 'Interested In',
                    accessor: 'interestedIn',
                    minWidth: 160,
                  },
                ],
              },
              {
                Header: 'Program Information',
                columns: [
                  {
                    Header: 'Program',
                    accessor: 'programName',
                    minWidth: 130,
                  },

                  {
                    Header: 'Location',
                    accessor: 'locationName',
                  },
                  {
                    Header: 'Program Manager',
                    accessor: 'programManagerName',
                  },
                ],
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
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

export default EmployeeSearch;
