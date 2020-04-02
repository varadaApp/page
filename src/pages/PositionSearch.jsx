/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable max-len */
import React from 'react';
import { Card, Icon, AutoComplete, Button, Modal, Checkbox, Divider, Select } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ReactTable from 'react-table';
import { positionSearchData } from './Utils';

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

class PositionSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: positionSearchData(),
      hideTable: true,
      programValue: '',
      locationValue: '',
      certificationValue: '',
      clearanceValue: '',
      careerTrackValue: '',
      applyButtonEnable: false,
      styleEnable: { display: 'none' },
      rowLoading: false,
      rowVisible: false,
    };
    this.handleProgramSearch = this.handleProgramSearch.bind(this);
    this.handleLocationSearch = this.handleLocationSearch.bind(this);
    this.handleCertificationSearch = this.handleCertificationSearch.bind(this);
    this.handleClearanceSearch = this.handleClearanceSearch.bind(this);
    this.handleCareerTrackSearch = this.handleCareerTrackSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleOriginal = this.handleOriginal.bind(this);
    this.showRow = this.showRow.bind(this);
    this.enableApplyButton = this.enableApplyButton.bind(this);
    this.showRowModal = this.showRowModal.bind(this);
  }

  showRowModal = () => {
    this.setState({
      rowVisible: true,
    });
  };

  handleRowOk = () => {
    this.setState({ rowLoading: true });
    setTimeout(() => {
      this.setState({ rowLoading: false, rowVisible: false });
    }, 500);
  };

  handleRowCancel = () => {
    this.setState({ rowVisible: false });
  };

  handleClear = () => {
    this.setState({ programValue: '' });
    this.setState({ locationValue: '' });
    this.setState({ certificationValue: '' });
    this.setState({ clearanceValue: '' });
    this.setState({ careerTrackValue: '' });
    this.setState({ hideTable: true });
  };

  enableApplyButton(checked) {
    const styleEnable = this.state.applyButtonEnable ? { display: 'none' } : {};
    this.setState({
      applyButtonEnable: checked,
      styleEnable,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  handleOriginal(value) {
    console.log('handleOriginal', value);
  }

  handleProgramSearch(value) {
    let filteredCareerTracks = positionSearchData().filter(
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
    let filteredCareerTracks = positionSearchData().filter(
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
    let filteredCareerTracks = positionSearchData();
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
    let filteredCareerTracks = positionSearchData().filter(
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
    let filteredCareerTracks = positionSearchData().filter(
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

  showRow() {
    const { info } = Modal;
    this.setState({ modalText: '1234' });
    info({
      width: 600,
      title: 'You will be redirected to the job requisition page...',
      content: (
        <div>
          <Checkbox onChange={e => this.enableApplyButton(e.target.checked)}>
            Are you interested in this open position? Checking the box allow you to apply to the
            open position.
          </Checkbox>
          <br />
          test2: {this.state.modalText}
          <br />
          <Button type="primary" style={this.state.styleEnable}>
            Apply
          </Button>
        </div>
      ),
      onOk() {},
    });
  }

  render() {
    const { data, rowVisible, rowLoading } = this.state;
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
    const dataSourcePositionTitle = ['System Admin', 'System Engineer'];
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
      'Cloudera CDH4 Admin',
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
      'Database Admin',
      'Deskside/Field Services',
      'Help Desk',
      'Network Admin',
      'Network Engineering',
      'Program Ops (Technical)',
      'Program/Project Management',
      'Software Development',
      'Systems Admin',
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
            <h1 className="page-title">Open Positions</h1>
          </div>
          <div style={{ display: 'flex', margin: 20, padding: 10 }}>
            <Icon style={{ fontSize: 35 }} type="bulb" /> 
            <div style={{ width: '80%', paddingLeft: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <Divider />
          <div style={{ marginRight: 20, backgroundColor: '#f0f2f5', padding: '15px', paddingBottom: '50px' }}>
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
            getTdProps={() => ({
              onClick: (e, handleOriginal) => {
                if (handleOriginal) {
                  handleOriginal();
                }
              },
            })}
            getTrProps={() => ({
              onClick: (e, handleOriginal) => {
                this.showRowModal();
                if (handleOriginal) {
                  handleOriginal();
                }
              },
            })}
            columns={[
              {
                Header: 'Open Position Information',
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
        <Modal
          visible={rowVisible}
          title="You will be redirected to the job requisition page..."
          onOk={this.handleRowOk}
          onCancel={this.handleRowCancel}
          width={600}
          footer={[
            <Button key="submit" type="primary" loading={rowLoading} onClick={this.handleRowOk}>
              Close
            </Button>,
          ]}
        >
          <Checkbox onChange={e => this.enableApplyButton(e.target.checked)}>
            Are you interested in this open position? Checking the box allow you to apply to the
            open position.
          </Checkbox>
          <br />
          <Button type="primary" style={this.state.styleEnable}>
            Apply
          </Button>
        </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default PositionSearch;
