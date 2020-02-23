/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import { Card, Icon, Form, Button, Input, Divider } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

// Import React Table
import ReactTable from 'react-table';
import { certData } from '../Utils';
import 'react-table/react-table.css';

class Certifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: certData(),
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
          <div className="screen-header">
            <h1 className="page-title">Certifications</h1>
          </div>
          <Divider />
          <Form layout="inline">
            <Form.Item>
              <Input style={{ width: 400 }} placeholder="Certification Name" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" style={{ marginBottom: 16 }}>
                Add a New Certification
              </Button>
            </Form.Item>
          </Form>
          <ReactTable
            data={data}
            filterable
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
            columns={[
              {
                Header: 'Certification Name',
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
                Cell: () => (
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

export default Certifications;
