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
          <Divider />
          <Row gutter={[8, 8]}>
            <Col xs={16}>
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
            </Col>
            <Col xs={1} />
            <Col xs={7}>
              <div style={{ width: '100%' }}>
                <img
                  style={{ width: '100%', height: 320 }}
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/12482434076830.56c3515798e08.png"
                  alt=""
                />
              </div>
              <div style={careerMessageContainerStyle}>
                <p style={careerMessageHeaderStyle}>Why Skills Are Important</p>
                <p style={careerMessageContentStyle}>
                  Many of the skills employers want are needed in all types of jobs. Discover the
                  types of employability and occupational skills employers are looking for. Once
                  skills are lacking, then more practical training may be needed, so as to apply the
                  knowledge on-the-job. If abilities are not tapped into, employers should provide
                  opportunities for such abilities to be refined.
                </p>
              </div>
            </Col>
          </Row>
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
