import React from 'react';
import { Card, Typography, Alert, Icon, Radio } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { careerTrackData, Logo, Tips } from '../Utils';
import matchSorter from 'match-sorter';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class CareerEnhancements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: careerTrackData(),
      value: 1,
    };
  }

  radioChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { data } = this.state;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <PageHeaderWrapper>
        <Card>
          <ReactTable
            data={data}
            resolveData={data => data.map(row => row)}
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
            columns={[
              {
                Header: 'Career Enhancement Information',
                columns: [
                  {
                    Header: 'Position Title',
                  },
                  {
                    Header: 'Career Track',
                    accessor: 'careerTrackName',
                  },
                  {
                    Header: 'Career Track Tier',
                    accessor: 'careerTrackTier',
                  },
                ],
              },
              {
                Header: 'Program Information',
                columns: [
                  {
                    Header: 'Name',
                    accessor: 'programName',
                  },
                  {
                    Header: 'Program Manager',
                    accessor: 'programManagerName',
                  },
                  {
                    Header: 'Clearance Required',
                    accessor: 'clearanceLevel',
                  },
                  {
                    Header: 'Location',
                    accessor: 'locationName',
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

export default CareerEnhancements;
