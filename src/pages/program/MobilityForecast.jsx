/* eslint-disable react/no-unused-state */
import React from 'react';
import { Card, Icon, Table, Button, Select, Checkbox, DatePicker, Row, Col } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import { Gauge } from 'ant-design-pro/lib/Charts';
import { Shape } from 'bizcharts';

const { MonthPicker, RangePicker } = DatePicker;

Shape.registerShape('point', 'pointer', {
  drawShape(cfg, group) {
    let point = cfg.points[0];
    point = this.parsePoint(point);
    const center = this.parsePoint({
      x: 0,
      y: 0,
    });
    group.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: point.x,
        y2: point.y - 20,
        stroke: cfg.color,
        lineWidth: 5,
        lineCap: 'round',
      },
    });
    return group.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 12,
        stroke: cfg.color,
        lineWidth: 4.5,
        fill: '#fff',
      },
    });
  },
});

class Reporting extends React.Component {
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
          <Row>
            <Col xs={4}>
              <div className="mobility-header-filter-container">
                <div className="mobility-row">
                  <h2 style={{ fontSize: '24px', color: 'black' }}>Filter by:</h2>
                  <Select
                    showSearch
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
                </div>
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
                    placeholder="Select a Group"
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
                    <MonthPicker placeholder="Select month" />
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
                    <RangePicker />
                  </div>
                )}
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
                  <Button onClick={this.handleClear}>Run Report</Button>
                </div>
              </div>
            </Col>
            <Col xs={20}>
              <p className="mobility-report-label">Mobility Report</p>
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
            </Col>
          </Row>
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
