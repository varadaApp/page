/* eslint-disable react/no-unused-state */
import React from 'react';
import { Card, Icon, Table, Button, Select, DatePicker, Divider, Checkbox, Col, Row } from 'antd';
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
          quarter: 'First Quarter',
          openingBalance: '5',
          employeesJoined: '2',
          employeesLeft: '0',
          closingBalance: '7',
          attrition: '0.00%',
          certification: 'A+',
        },
        {
          key: '1',
          quarter: 'First Quarter',
          openingBalance: '2',
          employeesJoined: '0',
          employeesLeft: '2',
          closingBalance: '2',
          attrition: '0.00%',
          certification: 'Linux+',
        },
        {
          key: '2',
          quarter: 'First Quarter',
          openingBalance: '7',
          employeesJoined: '0',
          employeesLeft: '1',
          closingBalance: '6',
          attrition: '7.14%',
          certification: 'Security+',
        },
        {
          key: '3',
          quarter: 'First Quarter',
          openingBalance: '2',
          employeesJoined: '0',
          employeesLeft: '0',
          closingBalance: '2',
          attrition: '0.00%',
          certification: 'Splunk',
        },
      ],

      dataSourceMonth: [
        {
          key: '0',
          month: 'January',
          openingBalance: '27',
          employeesJoined: '3',
          employeesLeft: '0',
          closingBalance: '30',
          attrition: '0.00%',
        },
        {
          key: '1',
          month: 'February',
          openingBalance: '30',
          employeesJoined: '1',
          employeesLeft: '5',
          closingBalance: '26',
          attrition: '19.23%',
        },
        {
          key: '2',
          month: 'March',
          openingBalance: '26',
          employeesJoined: '4',
          employeesLeft: '2',
          closingBalance: '28',
          attrition: '7.14%',
        },
        {
          key: '3',
          month: 'April',
          openingBalance: '28',
          employeesJoined: '1',
          employeesLeft: '0',
          closingBalance: '29',
          attrition: '0.00%',
        },
        {
          key: '4',
          month: 'May',
          openingBalance: '29',
          employeesJoined: '0',
          employeesLeft: '6',
          closingBalance: '23',
          attrition: '26.09%',
        },
        {
          key: '5',
          month: 'June',
          openingBalance: '23',
          employeesJoined: '12',
          employeesLeft: '3',
          closingBalance: '32',
          attrition: '9.38%',
        },
        {
          key: '6',
          month: 'July',
          openingBalance: '32',
          employeesJoined: '1',
          employeesLeft: '2',
          closingBalance: '31',
          attrition: '6.45%',
        },
        {
          key: '7',
          month: 'August',
          openingBalance: '31',
          employeesJoined: '1',
          employeesLeft: '0',
          closingBalance: '32',
          attrition: '0.00%',
        },
        {
          key: '8',
          month: 'September',
          openingBalance: '32',
          employeesJoined: '1',
          employeesLeft: '2',
          closingBalance: '31',
          attrition: '6.45%',
        },
        {
          key: '9',
          month: 'October',
          openingBalance: '31',
          employeesJoined: '1',
          employeesLeft: '1',
          closingBalance: '31',
          attrition: '3.23%',
        },
        {
          key: '10',
          month: 'November',
          openingBalance: '31',
          employeesJoined: '1',
          employeesLeft: '1',
          closingBalance: '31',
          attrition: '3.23%',
        },
        {
          key: '11',
          month: 'December',
          openingBalance: '31',
          employeesJoined: '1',
          employeesLeft: '2',
          closingBalance: '30',
          attrition: '6.67%',
        },
      ],
      count: 12,
    };

    this.columns = [
      {
        title: 'Quarter',
        dataIndex: 'quarter',
      },
      {
        title: 'Opening Balance',
        dataIndex: 'openingBalance',
      },
      {
        title: 'Employees Joined',
        dataIndex: 'employeesJoined',
      },
      {
        title: 'Employees Left',
        dataIndex: 'employeesLeft',
      },
      {
        title: 'Closing Balance',
        dataIndex: 'closingBalance',
      },
      {
        title: 'Attrition %',
        dataIndex: 'attrition',
      },
      {
        title: 'Certification',
        dataIndex: 'certification',
      },
    ];
    this.columnsMonth = [
      {
        title: 'Month',
        dataIndex: 'month',
      },
      {
        title: 'Opening Balance',
        dataIndex: 'openingBalance',
      },
      {
        title: 'Employees Joined',
        dataIndex: 'employeesJoined',
      },
      {
        title: 'Employees Left',
        dataIndex: 'employeesLeft',
      },
      {
        title: 'Closing Balance',
        dataIndex: 'closingBalance',
      },
      {
        title: 'Attrition %',
        dataIndex: 'attrition',
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
            <h1 className="page-title">Attrition Report</h1>
          </div>
          <Divider />
          <div style={{marginRight: 20}} className="attrition-header-filter-container">
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
            <div>
              <div className="attrition-row">
                <Select
                  showSearch
                  style={{ width: 200 }}
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
                <div className="attrition-row">
                  <Select
                    showSearch
                    style={{ width: 200 }}
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
                <div className="attrition-row">
                  <MonthPicker placeholder="Select month" format={'MM/YYYY'} />
                </div>
              )}
              {selectedDateRange === '3' && (
                <div className="attrition-row">
                  <Select
                    showSearch
                    style={{ width: 200 }}
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
                <div className="attrition-row">
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
                  <Option value="1">Career Track</Option>
                  <Option value="2">Title</Option>
                  <Option value="3">Labor Category</Option>
                  <Option value="4">Location</Option>
                  <Option value="5">Tenure</Option>
                  <Option value="6">Certification</Option>
                  <Option value="7">Certification Interest</Option>
                  <Option value="8">Training</Option>
                  <Option value="9">Training Interest</Option>
                </Select>
              </div>
            </div>
            <br />

            <div style={{ margin: '10px', float: 'right' }}>
              <Button onClick={this.handleRunReport}>Run Report</Button>
            </div>
          </div>
          <div style={this.state.runReport === 'run' ? {marginRight: 20} : { display: 'none' }}>
            <h1>Department of Defense Space Program Attrition Report</h1>
            <div className="attrition-report-table-header">
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
