import React from 'react';
import { Card, Typography, Alert, Icon, AutoComplete, Form, Button, Modal, Checkbox } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { makeData, Logo, Tips, positionSearchData } from './Utils';
import matchSorter from 'match-sorter';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

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

  enableApplyButton(checked) {
    const styleEnable = this.state.applyButtonEnable ? { display: 'none' } : {};
    this.setState({
      applyButtonEnable: checked,
      styleEnable: styleEnable,
    });
  }

  handleOriginal(value) {
    console.log('handleOriginal', value);
  }
  handleProgramSearch(value) {
    var filteredCareerTracks = positionSearchData().filter(function(careerTrack) {
      return careerTrack.programName == value;
    });
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
    this.setState({ programValue: value });
    this.setState({ data: filteredCareerTracks });
    this.setState({ hideTable: false });
  }
  handleLocationSearch(value) {
    var filteredCareerTracks = positionSearchData().filter(function(careerTrack) {
      return careerTrack.locationName == value;
    });
    if (this.state.programValue) {
      var selectedProgram = this.state.programValue;
      filteredCareerTracks = filteredCareerTracks.filter(function(careerTrack) {
        return careerTrack.programName == selectedProgram;
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
    this.setState({ locationValue: value });
    this.setState({ data: filteredCareerTracks });
    this.setState({ hideTable: false });
  }
  handleCertificationSearch(value) {
    var filteredCareerTracks = positionSearchData();
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
    var filteredCareerTracks = positionSearchData().filter(function(careerTrack) {
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
    var filteredCareerTracks = positionSearchData().filter(function(careerTrack) {
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
    var test = this.state.modalText;
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
    const { data, rowVisible, rowLoading, modalText } = this.state;
    const styleHide = this.state.hideTable ? { display: 'none' } : {};
    const NoDataComponent = props => {
      const { children, loading } = props;

      return <div className="rt-noData">No rows found</div>;
    };
    const dataSourceProgram = [
      'DoD Space Program',
    ];
    const dataSourceCertification = [
      'A+',
      'Security+',
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
    ];
    const dataSourceLocation = [
      'Fort Belvoir VA',
    ];
    return (
      <PageHeaderWrapper>
        <Card>
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
                  if (handleOriginal) {
                    handleOriginal();
                  }
                },
              };
            }}
            getTrProps={(state, rowInfo, column) => {
              return {
                onClick: (e, handleOriginal) => {
                  this.showRowModal();
                  if (handleOriginal) {
                    handleOriginal();
                  }
                },
              };
            }}
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
