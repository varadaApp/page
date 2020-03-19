import React from 'react';
import {
  Card,
  Typography,
  Alert,
  Icon,
  AutoComplete,
  Form,
  Button,
  Radio,
  Modal,
  Checkbox,
  Select,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { makeData, Logo, Tips, enhancementSearchData } from '../Utils';
import matchSorter from 'match-sorter';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class CareerEnhancement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: enhancementSearchData(),
      value: 1,
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
    this.handleOriginal = this.handleOriginal.bind(this);
    this.showRow = this.showRow.bind(this);
  }

  handleOriginal(value) {
    console.log('handleOriginal', value);
  }
  radioChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  handleProgramSearch(value) {
    var filteredCareerTracks = enhancementSearchData().filter(function(careerTrack) {
      return careerTrack.programName == value;
    });
    if (this.state.locationValue) {
      var selectedLocation = this.state.locationValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.locationName == selectedLocation;
      });
    }
    // if (this.state.certificationValue) {
    //   var selectedCertification = this.state.certificationValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.certific == selectedProgram;
    //   });
    // }
    if (this.state.clearanceValue) {
      var selectedClearance = this.state.clearanceValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.clearanceLevel == selectedClearance;
      });
    }
    if (this.state.careerTrackValue) {
      var selectedCareerTrack = this.state.careerTrackValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.careerTrackName == selectedCareerTrack;
      });
    }
    this.setState({ programValue: value });
    this.setState({ data: filteredCareerTracks });
    this.setState({ hideTable: false });
  }
  handleLocationSearch(value) {
    var filteredCareerTracks = enhancementSearchData().filter(function(careerTrack) {
      return careerTrack.locationName == value;
    });
    if (this.state.programValue) {
      var selectedProgram = this.state.programValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.programName == selectedProgram;
      });
    }
    // if (this.state.certificationValue) {
    //   var selectedCertification = this.state.certificationValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.certific == selectedProgram;
    //   });
    // }
    if (this.state.clearanceValue) {
      var selectedClearance = this.state.clearanceValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.clearanceLevel == selectedClearance;
      });
    }
    if (this.state.careerTrackValue) {
      var selectedCareerTrack = this.state.careerTrackValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.careerTrackName == selectedCareerTrack;
      });
    }
    this.setState({ locationValue: value });
    this.setState({ data: filteredCareerTracks });
    this.setState({ hideTable: false });
  }
  handleCertificationSearch(value) {
    // var filteredCareerTracks = enhancementSearchData().filter(function(careerTrack) {
    //   return careerTrack.locationName == value;
    // });
    var filteredCareerTracks = enhancementSearchData();
    if (this.state.programValue) {
      var selectedProgram = this.state.programValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.programName == selectedProgram;
      });
    }
    if (this.state.locationValue) {
      var selectedLocation = this.state.locationValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.locationName == selectedLocation;
      });
    }
    if (this.state.clearanceValue) {
      var selectedClearance = this.state.clearanceValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.clearanceLevel == selectedClearance;
      });
    }
    if (this.state.careerTrackValue) {
      var selectedCareerTrack = this.state.careerTrackValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.careerTrackName == selectedCareerTrack;
      });
    }
    this.setState({ certificationValue: value });
    this.setState({ data: filteredCareerTracks });
    this.setState({ hideTable: false });
  }
  handleClearanceSearch(value) {
    var filteredCareerTracks = enhancementSearchData().filter(function(careerTrack) {
      return careerTrack.clearanceLevel == value;
    });
    if (this.state.programValue) {
      var selectedProgram = this.state.programValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.programName == selectedProgram;
      });
    }
    if (this.state.locationValue) {
      var selectedLocation = this.state.locationValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.locationName == selectedLocation;
      });
    }
    // if (this.state.certificationValue) {
    //   var selectedCertification = this.state.certificationValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.certific == selectedProgram;
    //   });
    // }
    if (this.state.careerTrackValue) {
      var selectedCareerTrack = this.state.careerTrackValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.careerTrackName == selectedCareerTrack;
      });
    }
    this.setState({ clearanceValue: value });
    this.setState({ data: filteredCareerTracks });
    this.setState({ hideTable: false });
  }
  handleCareerTrackSearch(value) {
    var filteredCareerTracks = enhancementSearchData().filter(function(careerTrack) {
      return careerTrack.careerTrackName == value;
    });
    if (this.state.programValue) {
      var selectedProgram = this.state.programValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.programName == selectedProgram;
      });
    }
    if (this.state.locationValue) {
      var selectedLocation = this.state.locationValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.locationName == selectedLocation;
      });
    }
    // if (this.state.certificationValue) {
    //   var selectedCertification = this.state.certificationValue;
    //   filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
    //     return careerTrack.certific == selectedProgram;
    //   });
    // }
    if (this.state.clearanceValue) {
      var selectedClearance = this.state.clearanceValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.clearanceLevel == selectedClearance;
      });
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
    const NoDataComponent = props => {
      const { children, loading } = props;

      return <div className="rt-noData">No rows found</div>;
    };
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
    return (
      <PageHeaderWrapper>
        <Card>
          <h2>What kind of career enhancement opportunity are you looking for?</h2>
          <Radio.Group onChange={this.radioChange} value={this.state.value}>
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
          <br />
          <h2>Filter by:</h2>
          <AutoComplete
            style={{ width: 200 }}
            //allowClear={true}
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
            style={{ width: 200 }}
            //allowClear={true}
            dataSource={dataSourceLocation}
            placeholder="Location"
            onChange={this.handleLocationSearch}
            value={this.state.locationValue}
            filterOption={(inputValue, option) =>
              option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          />
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
          <br />
          <AutoComplete
            style={{ width: 200 }}
            //allowClear={true}
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
            style={{ width: 200 }}
            //allowClear={true}
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
            style={{ width: 200 }}
            //allowClear={true}
            dataSource={dataSourceCareerTrack}
            placeholder="Career Track"
            onChange={this.handleCareerTrackSearch}
            value={this.state.careerTrackValue}
            filterOption={(inputValue, option) =>
              option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          />
          <br />
          <Button onClick={this.handleClear}>Clear</Button>
          <ReactTable
            data={data}
            resolveData={data => data.map(row => row)}
            // filterable
            style={styleHide}
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
            //noDataText={!this.state.loading ? 'No rows found' : ''}
            NoDataComponent={NoDataComponent}
            getTdProps={(state, rowInfo, column, instance) => {
              return {
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
              };
            }}
            getTrProps={(state, rowInfo, column) => {
              return {
                onClick: (e, handleOriginal) => {
                  console.log('A TR Element was clicked!');
                  console.log('it produced this event:', e);
                  console.log('It was in this column:', column);
                  console.log('It was in this row:', rowInfo);
                  //console.log('It was in this table instance:', instance);
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
              };
            }}
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

export default CareerEnhancement;
