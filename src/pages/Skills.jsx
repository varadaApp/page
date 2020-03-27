/* eslint-disable global-require */
import React from 'react';
import { Card, Row, Col, Icon, Divider } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

// Import React Table
import ReactTable from 'react-table';
import { trainingData } from './Utils';
import 'react-table/react-table.css';

const careerMessageContainerStyle = {
  padding: '20px',
  backgroundColor: 'rgb(240, 242, 245)',
  marginBottom: '20px',
  borderColor: '#919197 !important',
  borderWidth: '1px',
};

const careerMessageHeaderStyle = {
  fontSize: '19px',
  color: 'black',
  fontWeight: 600,
};

const careerMessageContentStyle = {
  fontSize: '14px',
  marginBottom: '10px',
  color: '#525257 ',
};

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: trainingData(),
    };
  }

  render() {
    const { data } = this.state;
    return (
      <PageHeaderWrapper>
        <Card>
          <div className="screen-header">
            <h1 className="page-title">Your Skills</h1>
          </div>
          <div style={{ display: 'flex', margin: 20, padding: 10 }}>
            <Icon style={{ fontSize: 35 }} type="bulb" /> 
            <div style={{ width: '80%', paddingLeft: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <Divider />
          <div className="skills-item-container">
            <div className="skills-table-container">
              <ReactTable
                data={data}
                filterable
                defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
                columns={[
                  {
                    Header: 'Skill Name',
                    accessor: 'name',
                    filterMethod: (filter, row) =>
                      row[filter.id].startsWith(filter.value) &&
                      row[filter.id].endsWith(filter.value),
                  },
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
              />
            </div>
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

export default Skills;
