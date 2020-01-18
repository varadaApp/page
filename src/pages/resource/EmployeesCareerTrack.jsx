import React from 'react';
import { Card, Typography, Alert, Icon, Form, Upload, message, Button, Modal, Steps } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { employeesWithSelectedCareerTrackData } from '../Utils';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class EmployeesCareerTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: employeesWithSelectedCareerTrackData(),
    };
    this.showRow = this.showRow.bind(this);
  }

  handleOriginal(value) {
    console.log('handleOriginal', value);
  }

  showRow(row) {
    const { info } = Modal;
    const { Step } = Steps;
    console.log('modalrow', row);
    info({
      width: 600,
      title: row.employeeName,
      content: (
        <div>
          <p>Career Track: {row.careerTrackName}</p>
          <p>Career Track Tier: {row.careerTrackTier}</p>
          <Steps progressDot current={4} direction="vertical">
            <Step title="Started Employment as Programmer Level I" description="5/14/2015" />
            <Step title="Completed SQL Server Database Training" description="8/5/2015" />
            <Step title="Completed Security+ Certification" description="11/9/2015" />
            <Step title="Completed Microsoft Developer Certification" description="7/17/2016" />
            <Step title="Promoted to Programmer Level II" description="4/23/2017" />
          </Steps>
        </div>
      ),
      onOk() {},
    });
  }
  render() {
    const { data } = this.state;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };

    return (
      <PageHeaderWrapper>
        <Card>
          <ReactTable
            data={data}
            resolveData={data => data.map(row => row)}
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
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
                  this.showRow(rowInfo.original);
                  if (handleOriginal) {
                    handleOriginal();
                  }
                },
              };
            }}
            columns={[
              {
                Header: 'Employees Current Career Track Timelines',
                columns: [
                  {
                    Header: 'Employee',
                    accessor: 'employeeName',
                  },
                  {
                    id: 'currentCareerTrack',
                    Header: 'Current Career Track',
                    accessor: d => `${d.careerTrackName}` + ' Tier ' + `${d.careerTrackTier}`,
                  },
                  {
                    Header: 'Desired Career Track',
                    accessor: 'desiredCareerTrack',
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
      </PageHeaderWrapper>
    );
  }
}

export default EmployeesCareerTrack;
