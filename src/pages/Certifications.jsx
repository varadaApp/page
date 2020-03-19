import React from 'react';
import { Card, Typography, Alert, Icon, Divider } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { makeData, Logo, Tips, certData } from './Utils';
import matchSorter from 'match-sorter';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Certifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: certData(),
    };
  }

  render() {
    const { data } = this.state;
    return (
      <PageHeaderWrapper>
        <Card>
          <div className="screen-header">
            <h1 className="page-title">Your Certifications</h1>
          </div>
          <Divider />
          <ReactTable
            data={data}
            filterable
            defaultFilterMethod={(filter, row) =>
              row[filter.id].toLowerCase().startsWith(filter.value.toLowerCase())
            }
            columns={[
              {
                Header: 'Certification Name',
                accessor: 'name',
                // filterMethod: (filter, row) =>
                //   row[filter.id].startsWith(filter.value) && row[filter.id].endsWith(filter.value),
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

export default Certifications;
