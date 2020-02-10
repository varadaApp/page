import React from 'react';
import { Card, Icon, Row, Col } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { certData } from './Utils';

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
                        Header: 'Certification Name',
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
            <Col xs={8}>
              <div style={{ width: '100%' }}>
                <img
                  style={{ width: '100%', height: 320 }}
                  src="https://cdn.dribbble.com/users/3786091/screenshots/8809763/media/08449c544de5d4bfab03ea58a7c68f3f.jpg"
                  alt=""
                />
              </div>
              <div style={careerMessageContainerStyle}>
                <p style={careerMessageHeaderStyle}>Certifications</p>
                <p style={careerMessageContentStyle}>
                  Professional certification is the process by which a person proves that he or she
                  has the knowledge, experience and skills to perform a specific job and the tasks
                  in which they have been trained.
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

export default Certifications;
