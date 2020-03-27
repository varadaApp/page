import React from 'react';
import {
  Card,
  Typography,
  Alert,
  Icon,
  Table,
  Button,
  Select,
  Checkbox,
  DatePicker,
  Row,
  Col,
  Divider,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class TrainingInventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runReport: '',
      selectedDateRange: '',
      dataSource: [
        {
          key: '0',
          training: 'Windows Server Training Level 2',
          employee: 'Sydney Watkins',
          program: 'Department of Defense Space Program',
          location: 'Washington, DC',
          positionTitle: 'Windows Server System Adminstrator',
          acquiredDate: '2/1/2020',
        },
      ],
    };
    this.columns = [
      {
        title: 'Training',
        dataIndex: 'training',
      },
      {
        title: 'Employee',
        dataIndex: 'employee',
      },
      {
        title: 'Program',
        dataIndex: 'program',
      },
      {
        title: 'Location',
        dataIndex: 'location',
      },
      {
        title: 'Position Title',
        dataIndex: 'positionTitle',
      },
      {
        title: 'Acquired Date',
        dataIndex: 'acquiredDate',
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

    return (
      <PageHeaderWrapper>
        <Card>
          <div className="screen-header">
            <h1 className="page-title">Training Inventory Report</h1>
          </div>
          <div style={{ display: 'flex', margin: 20, padding: 10 }}>
            <Icon style={{ fontSize: 35 }} type="bulb" /> 
            <div style={{ width: '80%', paddingLeft: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <Divider />
          <div className="mobility-header-filter-container">
            <h2 style={{ fontSize: '22px', color: 'black' }}>
              What would you like this report to contain?
            </h2>
            <div style={{ display: 'flex' }}>
              <div className="attrition-row">
                <div style={{ width: '30%' }}>
                  <Row>
                    <Col span={12}>
                      <Checkbox defaultChecked={true}>Training</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox defaultChecked={true}>Employee</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox defaultChecked={true}>Program</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox defaultChecked={true}>Location</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox defaultChecked={true}>Position Title</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox defaultChecked={true}>Acquired Date</Checkbox>
                    </Col>
                  </Row>
                </div>
              </div>
              <br />
            </div>
            <br />
            <h2 style={{ fontSize: '22px', color: 'black' }}>When and what should be included?</h2>
            <div style={{ display: 'flex' }}>
              <div className="attrition-row">
                <Select
                  showSearch
                  // style={{ width: 200 }}
                  placeholder="Select a Training"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="0">&nbsp;</Option>
                  <Option value="1">AWS</Option>
                  <Option value="2">Active Directory</Option>
                  <Option value="3">Asterisk</Option>
                  <Option value="4">BICSI</Option>
                  <Option value="5">Cisco</Option>
                  <Option value="6">ColdFusion</Option>
                  <Option value="7">Customer Service</Option>
                  <Option value="8">Cyber Security</Option>
                  <Option value="9">DB Analysis Tools</Option>
                  <Option value="10">Database Management</Option>
                  <Option value="11">DevOps</Option>
                  <Option value="12">FOCUS</Option>
                  <Option value="13">Firewall</Option>
                  <Option value="14">IPS</Option>
                  <Option value="15">ISC CISSP</Option>
                  <Option value="16">ISC CSSLP</Option>
                  <Option value="17">JavaScript</Option>
                  <Option value="18">Juniper</Option>
                  <Option value="19">Leadership</Option>
                  <Option value="20">Linux Administration</Option>
                  <Option value="21">McAfee</Option>
                  <Option value="22">Microsoft Office</Option>
                  <Option value="23">NetApp</Option>
                  <Option value="24">Netcool</Option>
                  <Option value="25">Network/System Design</Option>
                  <Option value="26">Oracle</Option>
                  <Option value="27">Program Management</Option>
                  <Option value="28">Puppet Labs</Option>
                  <Option value="29">RMF</Option>
                  <Option value="30">Red Hat Labs</Option>
                  <Option value="31">Remedy</Option>
                  <Option value="32">Routing/Switching</Option>
                  <Option value="33">SCCM</Option>
                  <Option value="34">SQL</Option>
                  <Option value="35">Satellite/RF Theory</Option>
                  <Option value="36">SharePoint</Option>
                  <Option value="37">VMWare</Option>
                  <Option value="38">VTC Systems</Option>
                  <Option value="39">Windows Administration</Option>
                  <Option value="40">Windows Desktop</Option>
                  <Option value="41">Windows Server</Option>
                </Select>
              </div>
              <div className="attrition-row">
                <Select
                  showSearch
                  // style={{ width: 200 }}
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
                    // style={{ width: 200 }}
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
                    // style={{ width: 200 }}
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
              <div className="attrition-row">
                <Select
                  showSearch
                  // style={{ width: 200 }}
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
              </div>
              <div className="attrition-row">
                <Select
                  showSearch
                  // style={{ width: 200 }}
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
                </Select>
              </div>
            </div>
            <br />
            <div style={{ float: 'right', marginTop: 10 }}>
              <Button onClick={this.handleRunReport}>Run Report</Button>
            </div>
          </div>
          <br />
          <br />
          <div style={this.state.runReport === 'run' ? {} : { display: 'none' }}>
            <h1>Training Inventory Report</h1>
            <Button type="primary" size="small">
              Export to CSV
            </Button>
            <Button type="primary" size="small">
              Export to PDF
            </Button>
            <Table
              style={{ width: 800 }}
              bordered
              dataSource={dataSource}
              columns={columns}
              pagination={false}
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
export default TrainingInventory;
