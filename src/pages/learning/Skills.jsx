import React from 'react';
import { Card, Typography, Alert, Icon, Form, Button, Input, Divider } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { makeData, Logo, Tips, trainingData } from '../Utils';
import matchSorter from 'match-sorter';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Skills extends React.Component {
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
          <div className="screen-header">
            <h1 className="page-title">Skills</h1>
          </div>
          <div style={{ display: 'flex', margin: 20, padding: 10 }}>
            <Icon style={{ fontSize: 35 }} type="bulb" /> 
            <div style={{ width: '80%', paddingLeft: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <Divider />
          <Form layout="inline">
            <Form.Item>
              <Input style={{ width: 400 }} placeholder="Skill Name" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" style={{ marginBottom: 16 }}>
                Add a New Skill
              </Button>
            </Form.Item>
          </Form>
          <ReactTable
            data={data}
            filterable
            defaultFilterMethod={(filter, row) =>
              row[filter.id].toLowerCase().startsWith(filter.value.toLowerCase())
            }
            columns={[
              {
                Header: 'Skill Name',
                accessor: 'name',
                // filterMethod: (filter, row) =>
                //   row[filter.id].startsWith(filter.value) && row[filter.id].endsWith(filter.value),
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

export default Skills;
