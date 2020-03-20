/* eslint-disable react/no-unused-state */
import React from 'react';
import { Card, Icon, Table, Button, Select, Checkbox, DatePicker, Divider, Col, Row } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
const { MonthPicker, RangePicker } = DatePicker;

class Reporting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runReport: '',
      selectedDateRange: '',
      dataSource: [
        {
          key: '0',
          month: 'February',
          employee: 'Enoch Hector',
          positionTitle: '27',
          currentStatus: '3',
          currentCareerTrack: '0',
        },
        {
          key: '1',
          month: 'February',
          employee: 'February',
          positionTitle: '27',
          currentStatus: '3',
          currentCareerTrack: '0',
        },
      ],
    };
    this.columns = [
      {
        title: 'Month',
        dataIndex: 'month',
      },
      {
        title: 'Employee',
        dataIndex: 'employee',
      },
      {
        title: 'Position Title',
        dataIndex: 'positionTitle',
      },
      {
        title: 'Current Status',
        dataIndex: 'currentStatus',
      },
      {
        title: 'Current Career Track',
        dataIndex: 'currentCareerTrack',
      },
    ];
    this.handleDateRangeSelect = this.handleDateRangeSelect.bind(this);
    this.handleRunReport = this.handleRunReport.bind(this);
  }

  handleDateRangeSelect(value) {
    this.setState({ selectedDateRange: value });
  }

  handleRunReport() {
    this.setState({ runReport: 'run' });
  }

  render() {
    const { dataSource, selectedDateRange } = this.state;
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    const { Option } = Select;
    return (
      <PageHeaderWrapper>
        <Card>
          <div className="screen-header">
            <h1 className="page-title">Mobility Report</h1>
          </div>
          <Divider />
          <div  style={{marginRight: 20}} className="mobility-header-filter-container">
            <h2 style={{ fontSize: '22px', color: 'black' }}>
              What would you like this report to contain?
            </h2>
            <div style={{ display: 'flex' }}>
              <div className="attrition-row">
                <div style={{ width: '30%' }}>
                  <Row>
                    <Col span={12}>
                      <Checkbox defaultChecked={true}>Month</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox defaultChecked={true}>Opening Balance</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox defaultChecked={true}>Employees Joined</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox defaultChecked={true}>Employees Left</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox defaultChecked={true}>Closing Balance</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox defaultChecked={true}>Attrition %</Checkbox>
                    </Col>
                  </Row>
                </div>
              </div>
              <br />
            </div>
            <br />
            <h2 style={{ fontSize: '22px', color: 'black' }}>When and what should be included?</h2>
            <div style={{ display: 'flex' }}>
              <div className="mobility-row">
                <Select
                  showSearch
                  placeholder="Select a Employee"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="0">&nbsp;</Option>
                  <Option value="1">Dorris Vaught</Option>
                  <Option value="2">Kris Shotwell</Option>
                  <Option value="3">Long Hudspeth</Option>
                  <Option value="4">Vincenzo Whiteley</Option>
                  <Option value="5">Reyes Holmes</Option>
                  <Option value="6">Deedra Bosch</Option>
                  <Option value="7">Sharyn Ballard</Option>
                  <Option value="8">Romeo Thompson</Option>
                  <Option value="9">Chere Nance</Option>
                  <Option value="10">Darryl Merryman</Option>
                </Select>
              </div>
              <div className="mobility-row">
                <Select
                  showSearch
                  placeholder="Select a Date Range"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  onSelect={this.handleDateRangeSelect}
                >
                  <Option value="0">&nbsp;</Option>
                  <Option value="1">Annually</Option>
                  <Option value="2">Monthly</Option>
                  <Option value="3">Quarter</Option>
                  <Option value="4">Custom Date Range</Option>
                </Select>
              </div>
              {selectedDateRange === '1' && (
                <div className="mobility-row">
                  <Select
                    showSearch
                    placeholder="Select a Year"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    onSelect={this.handleDateRangeSelect}
                  >
                    <Option value="0">&nbsp;</Option>
                    <Option value="1">2020</Option>
                    <Option value="2">2019</Option>
                    <Option value="3">2018</Option>
                    <Option value="4">2017</Option>
                  </Select>
                </div>
              )}
              {selectedDateRange === '2' && (
                <div className="mobility-row">
                  <MonthPicker placeholder="Select month" format={'MM/YYYY'} />
                </div>
              )}
              {selectedDateRange === '3' && (
                <div className="mobility-row">
                  <Select
                    showSearch
                    placeholder="Select a Quarter"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    onSelect={this.handleDateRangeSelect}
                  >
                    <Option value="0">&nbsp;</Option>
                    <Option value="1">1st Quarter</Option>
                    <Option value="2">2nd Quarter</Option>
                    <Option value="3">3rd Quarter</Option>
                    <Option value="4">4th Quarter</Option>
                  </Select>
                </div>
              )}
              {selectedDateRange === '4' && (
                <div className="mobility-row">
                  <RangePicker format={'MM/DD/YYYY'} />
                </div>
              )}
            </div>
            <br />
            <h2 style={{ fontSize: '22px', color: 'black' }}>
              How would you like this data grouped?
            </h2>
            <div style={{ display: 'flex' }}>
              <div className="attrition-row">
                <Select
                  showSearch
                  placeholder="Group By"
                  style={{ width: 200 }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="0">&nbsp;</Option>
                  <Option value="1">Employee</Option>
                  <Option value="2">Applied to Other JRs</Option>
                  <Option value="3">Certification Attainment</Option>
                  <Option value="4">Completion of Different Career Track</Option>
                  <Option value="5">Losing Coverage</Option>
                </Select>
              </div>
            </div>
            <br />

            <div className="mobility-row-checkbox">
              <Checkbox>Interested in Growth</Checkbox>
            </div>
            <div className="mobility-row-checkbox">
              <Checkbox>Losing Coverage</Checkbox>
            </div>
            <div className="mobility-row-checkbox">
              <Checkbox>Location Change</Checkbox>
            </div>
            <div style={{ float: 'right', marginTop: 10 }}>
              <Button onClick={this.handleRunReport}>Run Report</Button>
            </div>
          </div>
          <div style={this.state.runReport === 'run' ? {marginRight: 20} : { display: 'none' }}>
            <h1>Department of Defense Space Program Mobility Report</h1>
            <div className="mobility-report-table-header">
              <div />
              <div>
                <Button className="table-action-button" type="primary" size="small">
                  Export to CSV
                </Button>
                <Button className="table-action-button" type="primary" size="small">
                  Export to PDF
                </Button>
              </div>
            </div>
            <Table
              dataSource={dataSource}
              columns={columns}
              size="middle"
              pagination={false}
              style={{ paddingBottom: 20 }}
            />
          </div>
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
export default Reporting;
