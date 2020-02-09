/* eslint-disable react/no-unused-state */
import React from 'react';
import { Card, Icon, Table, Button, Select, DatePicker } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const { MonthPicker, RangePicker } = DatePicker;

class ClearanceForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDateRange: '',
      dataSource: [
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
  }

  handleDateRangeSelect(value) {
    this.setState({ selectedDateRange: value });
  }

  render() {
    const { dataSource } = this.state;
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
          <div style={{ width: 150, display: 'inline-block' }}>Clearance:</div>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a Clearance"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="0">&nbsp;</Option>
            <Option value="1">DOJ SUITABILITY</Option>
            <Option value="2">DOJ SUITABILITY/ TS</Option>
            <Option value="3">EOD SUITABILITY</Option>
            <Option value="4">EOD SUITABILITY / SECRET</Option>
            <Option value="5">EOD SUITABILITY / TS</Option>
            <Option value="6">EOD SUITABILITY / TS/SCI</Option>
            <Option value="7">INTERIM SECRET</Option>
            <Option value="8">INTERIM TOP SECRET</Option>
            <Option value="9">NO-CLRNC</Option>
            <Option value="10">PUBLIC TRUST</Option>
            <Option value="11">SECRET</Option>
            <Option value="12">TOP SECRET</Option>
            <Option value="13">TS</Option>
            <Option value="14">TS/SCI</Option>
            <Option value="15">TS/SCI CI POLY</Option>
            <Option value="16">TS/SCI FSP</Option>
            <Option value="17">UNCLASSIFIED</Option>
          </Select>
          <br />
          <br />
          <div style={{ width: 150, display: 'inline-block' }}>Date Range:</div>
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
          <br />
          <br />
          <div style={this.state.selectedDateRange === '1' ? {} : { display: 'none' }}>
            <div style={{ width: 150, display: 'inline-block' }}>Year:</div>
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
            <br />
            <br />
          </div>
          <div style={this.state.selectedDateRange === '2' ? {} : { display: 'none' }}>
            <div style={{ width: 150, display: 'inline-block' }}>Month:</div>
            <MonthPicker placeholder="Select month" />
            <br />
            <br />
          </div>
          <div style={this.state.selectedDateRange === '3' ? {} : { display: 'none' }}>
            <div style={{ width: 150, display: 'inline-block' }}>Quarter:</div>
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
            <br />
            <br />
          </div>
          <div style={this.state.selectedDateRange === '4' ? {} : { display: 'none' }}>
            <div style={{ width: 150, display: 'inline-block' }}>Custom Date Range:</div>
            <RangePicker />
            <br />
            <br />
          </div>
          <div style={{ width: 150, display: 'inline-block' }}>Select Division:</div>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a Division"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="0">&nbsp;</Option>
            <Option value="1">Division 1</Option>
            <Option value="2">Division 2</Option>
            <Option value="3">Division 3</Option>
          </Select>
          <br />
          <br />
          <div style={{ width: 150, display: 'inline-block' }}>Select Program:</div>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a Program"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="0">&nbsp;</Option>
            <Option value="1">AWS Technical Support Program</Option>
            <Option value="2">DoD Space Program</Option>
            <Option value="3">DHS Satellite Network</Option>
            <Option value="4">DoJ Networks</Option>
            <Option value="5">DoS Nuclear Defense System</Option>
            <Option value="6">FBI Case Management System</Option>
          </Select>
          <br />
          <br />
          <div style={{ width: 150, display: 'inline-block' }}>Group By:</div>
          <Select
            showSearch
            style={{ width: 200 }}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="0">&nbsp;</Option>
            <Option value="1">Career Track</Option>
          </Select>
          <br />
          <br />
          {/* <Checkbox>Interested in Growth</Checkbox>
          <br />
          <Checkbox>Losing Coverage</Checkbox>
          <br />
          <Checkbox>Location Change</Checkbox>
          <br />
          <br /> */}
          <Button type="primary">Run Report</Button>
          <br />
          <br />
          <Button type="primary" size="small">
            Export to CSV
          </Button>
          <Button type="primary" size="small">
            Export to PDF
          </Button>
          <h1>Clearance Forecast Report</h1>
          <Table
            style={{ width: 800 }}
            bordered
            dataSource={dataSource}
            columns={columns}
            pagination={false}
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
export default ClearanceForecast;
