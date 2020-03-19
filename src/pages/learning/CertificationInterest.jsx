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

class CertificationInterest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runReport: '',
      selectedDateRange: '',
      dataSource: [
        {
          key: '0',
          certification: 'Splunk',
          employee: 'Sydney Watkins',
          program: 'Department of Defense Space Program',
          location: 'Washington, DC',
          positionTitle: 'Windows Server System Adminstrator',
          interestDate: '1/1/2020',
        },
      ],
    };
    this.columns = [
      {
        title: 'Certification',
        dataIndex: 'certification',
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
        title: 'Interest Date',
        dataIndex: 'interestDate',
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
            <h1 className="page-title">Certification Interest Report</h1>
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
                    <Row>
                      <Col span={12}>
                        <Checkbox defaultChecked={true}>Certification</Checkbox>
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
                        <Checkbox defaultChecked={true}>Interest Date</Checkbox>
                      </Col>
                    </Row>
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
                  placeholder="Select a Certification"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="0">&nbsp;</Option>
                  <Option value="1">A+</Option>
                  <Option value="2">Agile</Option>
                  <Option value="3">AWS</Option>
                  <Option value="4">BICSI</Option>
                  <Option value="5">CAP</Option>
                  <Option value="6">CCNA</Option>
                  <Option value="7">CCNE</Option>
                  <Option value="8">CCNP</Option>
                  <Option value="9">CISSP</Option>
                  <Option value="10">Cloudera CDH4 Administrator</Option>
                  <Option value="11">Cloudera CDH4 Developer</Option>
                  <Option value="12">CSM</Option>
                  <Option value="13">CTNS</Option>
                  <Option value="14">GSLC</Option>
                  <Option value="15">HDI</Option>
                  <Option value="16">INCOSE CSEP</Option>
                  <Option value="17">ISSA</Option>
                  <Option value="18">ITIL</Option>
                  <Option value="19">Lean Six Sigma</Option>
                  <Option value="20">MCSA</Option>
                  <Option value="21">MCSE</Option>
                  <Option value="22">Network+</Option>
                  <Option value="23">OCP DBA</Option>
                  <Option value="24">Oracle</Option>
                  <Option value="25">PMP</Option>
                  <Option value="26">Security+</Option>
                  <Option value="27">Sharepoint</Option>
                  <Option value="28">Splunk</Option>
                  <Option value="29">VMWare</Option>
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
            <h1>Certification Inventory Report</h1>
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
export default CertificationInterest;