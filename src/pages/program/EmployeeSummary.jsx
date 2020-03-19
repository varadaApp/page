/* eslint-disable react/no-unused-state */
import React from 'react';
import { Card, Icon, Table, Button, Divider } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

class Reporting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

    return (
      <PageHeaderWrapper>
        <Card>
          <div className="screen-header">
            <h1 className="page-title">Employee Summary</h1>
          </div>
          <Divider />
          <div className="attrition-report-table-header">
            <div />
            <div>
              <Button
                onClick={this.showDrawer}
                className="table-action-button"
                type="primary"
                size="small"
              >
                Export to CSV
              </Button>
              <Button
                onClick={this.showDrawer}
                className="table-action-button"
                type="primary"
                size="small"
              >
                Export to PDF
              </Button>
            </div>
          </div>
          <Table bordered dataSource={dataSource} columns={columns} pagination={false} />
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
