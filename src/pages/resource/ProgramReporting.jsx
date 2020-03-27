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
  Col,
  Divider,
  Row,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
class ProgramReporting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programValue: '',
      dataSource: [
        {
          key: '0',
          employee: 'Sharyn Ballard',
          positionTitle: 'Linux System Administrator',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
        {
          key: '1',
          employee: 'Romeo Thompson',
          positionTitle: '',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
        {
          key: '2',
          employee: 'Chere Nance',
          positionTitle: '',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
        {
          key: '3',
          employee: 'Kami Najera',
          positionTitle: '',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
        {
          key: '4',
          employee: 'Darryl Merryman',
          positionTitle: '',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
        {
          key: '5',
          employee: 'Brigitte Weiland',
          positionTitle: '',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
        {
          key: '6',
          employee: 'Emmitt Dugas',
          positionTitle: '',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
        {
          key: '7',
          employee: 'Chia Villalba',
          positionTitle: '',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
        {
          key: '8',
          employee: 'Hipolito Gooden',
          positionTitle: '',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
        {
          key: '9',
          employee: 'Enoch Hector',
          positionTitle: '',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
        {
          key: '10',
          employee: 'Nicolas Hadlock',
          positionTitle: '',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
        {
          key: '11',
          employee: 'Brock Brauer',
          positionTitle: '',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
        {
          key: '12',
          employee: 'Phyliss Kaplan',
          positionTitle: '',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
        {
          key: '13',
          employee: 'Nickie Buie',
          positionTitle: '',
          laborCategoryLevel: 'System Admin Level 2',
          currentCareerTrack: 'System Administration Level 2',
          currentSalary: '$110,000',
          currentCertifications: 'A+, Security+, Linux+, Splunk',
          currentClearance: 'Secret',
        },
      ],
    };
    this.columns = [
      {
        title: 'Employee',
        dataIndex: 'employee',
      },
      {
        title: 'Position Title',
        dataIndex: 'positionTitle',
      },
      {
        title: 'Labor Category and Level',
        dataIndex: 'laborCategoryLevel',
      },
      {
        title: 'Current Career Track',
        dataIndex: 'currentCareerTrack',
      },
      {
        title: 'Current Salary',
        dataIndex: 'currentSalary',
      },
      {
        title: 'Current Certifications',
        dataIndex: 'currentCertifications',
      },
      {
        title: 'Current Clearance',
        dataIndex: 'currentClearance',
      },
    ];
    this.handleProgramChange = this.handleProgramChange.bind(this);
    this.handleProgramSelect = this.handleProgramSelect.bind(this);
  }

  handleProgramChange(value) {
    this.setState({ programValue: value });
  }
  handleProgramSelect(value) {
    this.setState({ programValue: value });
  }

  render() {
    const { dataSource } = this.state;
    const dataSourceProgram = [
      'AWS Technical Support Program',
      'DoD Space Program',
      'DHS Satellite Network',
      'DoJ Networks',
      'DoS Nuclear Defense System',
      'FBI Case Management System',
    ];
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
            <h1 className="page-title">Program Reporting</h1>
          </div>
          <div style={{ display: 'flex', margin: 20, padding: 10 }}>
            <Icon style={{ fontSize: 35 }} type="bulb" /> 
            <div style={{ width: '80%', paddingLeft: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <Divider />
          <h2>Select program:</h2>
          <Select
            showSearch
            style={{ width: 350 }}
            placeholder="Program"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onSelect={this.handleProgramSelect}
            onChange={this.handleProgramChange}
          >
            <Option value="All">All Programs</Option>
            <Option value="Department of Defense Space Program">
              Department of Defense Space Program
            </Option>
            <Option value="Department of Homeland Security Network">
              Department of Homeland Security Network
            </Option>
            <Option value="AWS Technical Support Program">AWS Technical Support Program</Option>
          </Select>
          <br />
          <div
            style={
              this.state.programValue === 'Department of Defense Space Program'
                ? {}
                : { display: 'none' }
            }
          >
            <h1>Employee Summary</h1>
            <Button type="primary" size="small">
              Export to CSV
            </Button>
            <Button type="primary" size="small">
              Export to PDF
            </Button>
            <Table
              style={{ width: '100%' }}
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
export default ProgramReporting;
