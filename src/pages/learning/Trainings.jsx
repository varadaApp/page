import React from 'react';
import { Card, Typography, Alert, Icon, Form, Button, Input } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { makeData, Logo, Tips, trainingData } from '../Utils';
import matchSorter from 'match-sorter';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Trainings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: trainingData(),
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id],
        }}
      />
    );
  }

  render() {
    const { data } = this.state;
    return (
      <PageHeaderWrapper>
        <Card>
          <Form layout="inline">
            <Form.Item>
              <Input style={{ width: 400 }} placeholder="Training Name" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" style={{ marginBottom: 16 }}>
                Add a New Training
              </Button>
            </Form.Item>
          </Form>
          <ReactTable
            data={data}
            filterable
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
            columns={[
              {
                Header: 'Training Name',
                accessor: 'name',
                filterMethod: (filter, row) =>
                  row[filter.id].startsWith(filter.value) && row[filter.id].endsWith(filter.value),
                Cell: this.renderEditable,
              },
              {
                Header: '',
                sortable: false,
                filterable: false,
                width: 100,
                Cell: row => (
                  <div>
                    <Button type="primary">Delete</Button>
                  </div>
                ),
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

export default Trainings;
