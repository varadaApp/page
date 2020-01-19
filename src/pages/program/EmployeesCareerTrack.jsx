import React from 'react';
import { Card, Icon, Modal, Steps } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ReactTable from 'react-table';
import { employeesWithSelectedCareerTrackData } from '../Utils';

// Import React Table
import 'react-table/react-table.css';

const employeeCareerTrackHeaderStyle = {
  margin: '10px',
  padding: '5px',
  fontSize: '32px',
  color: 'black',
  fontWeight: 500,
  letterSpacing: '0.5px',
};

class EmployeesCareerTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: employeesWithSelectedCareerTrackData(),
    };
    this.showRow = this.showRow.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleOriginal(value) {
    console.log('handleOriginal', value);
  }

  // eslint-disable-next-line class-methods-use-this
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
    return (
      <PageHeaderWrapper>
        <Card>
          <p style={employeeCareerTrackHeaderStyle}>Employees Current Career Track Timelines</p>
          <ReactTable
            data={data}
            // eslint-disable-next-line no-shadow
            resolveData={data => data.map(row => row)}
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
            getTdProps={() => ({
              onClick: (e, handleOriginal) => {
                if (handleOriginal) {
                  handleOriginal();
                }
              },
            })}
            getTrProps={rowInfo => ({
              onClick: (e, handleOriginal) => {
                this.showRow(rowInfo.original);
                if (handleOriginal) {
                  handleOriginal();
                }
              },
            })}
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
                    accessor: d => `${d.careerTrackName} Tier ${d.careerTrackTier}`,
                  },
                  {
                    Header: 'Desired Career Track',
                    accessor: 'desiredCareerTrack',
                  },
                  {
                    Header: 'Estimated Career Track Completion Date',
                    accessor: 'desiredCareerTrackCompletionDate',
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
