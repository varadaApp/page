import React from 'react';
import { Card, Icon, Row, Col, Divider } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { trainingData } from './Utils';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const careerMessageContainerStyle = {
  padding: '20px',
  backgroundColor: 'rgb(240, 242, 245)',
  marginBottom: '20px',
  borderColor: '#919197 !important',
  borderWidth: '1px',
};

const careerMessageHeaderStyle = {
  fontSize: '21px',
  color: 'black',
  fontWeight: 600,
};

const careerMessageContentStyle = {
  fontSize: '16px',
  marginBottom: '10px',
  color: '#525257 ',
};

class Trainings extends React.Component {
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
            <h1 className="page-title">Your Trainings</h1>
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
                        Header: 'Training Name',
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
                  src="https://cdn.dribbble.com/users/131231/screenshots/7221343/media/4bd699132d037347a1a0004a20377761.png"
                  alt=""
                />
              </div>
              <div style={careerMessageContainerStyle}>
                <p style={careerMessageHeaderStyle}>Importance of Trainings</p>
                <p style={careerMessageContentStyle}>
                  Training allows employees to acquire new skills, sharpen existing ones, perform
                  better, increase productivity and be better leaders. Since a company is the sum
                  total of what employees achieve individually, organizations should do everything
                  in their power to ensure that employees perform at their peak.
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

export default Trainings;
