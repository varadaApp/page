import React from 'react';
import {
  Card,
  Typography,
  Alert,
  Icon,
  Form,
  Upload,
  message,
  Button,
  Modal,
  Divider,
  Descriptions,
  Checkbox,
  Row,
  Col,
  Steps,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { programEmployees } from '../Utils';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class ProgramInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: programEmployees(),
      selectedCareerTrackVisible: false,
      selectedCareerTrackLoading: false,
      recommendedCareerTrackVisible: false,
      recommendedCareerTrackLoading: false,
    };
    this.showRow = this.showRow.bind(this);
  }

  handleOriginal(value) {
    console.log('handleOriginal', value);
  }

  showSelectedCareerTrackModal = () => {
    this.setState({
      selectedCareerTrackVisible: true,
    });
  };

  handleSelectedCareerTrackOk = () => {
    this.setState({ selectedCareerTrackLoading: true });
    setTimeout(() => {
      this.setState({ selectedCareerTrackLoading: false, selectedCareerTrackVisible: false });
    }, 500);
  };

  handleSelectedCareerTrackCancel = () => {
    this.setState({ selectedCareerTrackVisible: false });
  };

  showRecommendedCareerTrackModal = () => {
    this.setState({
      recommendedCareerTrackVisible: true,
    });
  };

  handleRecommendedCareerTrackOk = () => {
    this.setState({ recommendedCareerTrackLoading: true });
    setTimeout(() => {
      this.setState({ recommendedCareerTrackLoading: false, recommendedCareerTrackVisible: false });
    }, 500);
  };

  handleRecommendedCareerTrackCancel = () => {
    this.setState({ recommendedCareerTrackVisible: false });
  };

  showRow(row) {
    const { info } = Modal;
    console.log('modalrow', row);
    info({
      style: { top: 20 },
      width: 1200,
      title: row.employeeName,
      content: (
        <div>
          <p>Location: {row.locationName}</p>
          <p>Career Track: {row.careerTrackName}</p>
          <p>Career Track Tier: {row.careerTrackTier}</p>
          <div style={row.employeeName === 'Sharyn Ballard' ? {} : { display: 'none' }}>
            <Divider orientation="left">
              <strong>
                Primary Selected Career Track: Network Engineer Tier 2 (Program: Department of
                Homeland Security Satellite Network)
              </strong>
            </Divider>
            <p>Open Positions Applied To: Senior Network Manager</p>
            <a onClick={this.showSelectedCareerTrackModal}>Current Percentage Complete: 25%</a>

            <Descriptions
              layout="vertical"
              bordered
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              size="small"
            >
              <Descriptions.Item label="Trainings">
                Advanced Networking -{' '}
                <span class="attention">
                  Training Recently Shown Interest, Needs Action
                  <Icon type="warning" theme="filled" />
                </span>
                <br />
                Networking Circuits - Interest Not Selected
              </Descriptions.Item>
              <Descriptions.Item label="Certifications">
                CCNA -{' '}
                <span class="in-progress">
                  Certification Test Scheduled
                  <Icon type="calendar" theme="outlined" />
                </span>
                <br />
                CCNP - Interest Not Selected
              </Descriptions.Item>
            </Descriptions>
            <Divider orientation="left">
              <strong>
                Recommended Career Track: Software Developer Level 3 (Program: Department of Defense
                Space Program)
              </strong>
            </Divider>
            <p>Open Positions Applied To: Senior Software Developer</p>
            <a onClick={this.showRecommendedCareerTrackModal}>Current Percentage Complete: 35%</a>
            <Descriptions
              layout="vertical"
              bordered
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              size="small"
            >
              <Descriptions.Item label="Trainings">
                Programming Level 3 Training -{' '}
                <span class="in-progress">
                  Training Scheduled
                  <Icon type="calendar" theme="outlined" />
                </span>
                <br />
                Database Level 3 Training -{' '}
                <span class="in-progress">
                  Training in Progress
                  <Icon type="sync" spin />
                </span>
                <br />
                Advanced Agile Training-{' '}
                <span class="completed">
                  Training Complete
                  <Icon type="check-circle" theme="outlined" />
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Certifications">
                CCISP -{' '}
                <span class="attention">
                  Certification Recently Shown Interest, Needs Action
                  <Icon type="warning" theme="filled" />
                </span>
                <br />
                AWS Developer -{' '}
                <span class="completed">
                  Certification Complete
                  <Icon type="check-circle" theme="outlined" />
                </span>
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      ),
      onOk() {},
    });
  }
  render() {
    const {
      data,
      selectedCareerTrackVisible,
      selectedCareerTrackLoading,
      recommendedCareerTrackVisible,
      recommendedCareerTrackLoading,
    } = this.state;
    const { Step } = Steps;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };

    return (
      <PageHeaderWrapper>
        <Card>
          <h1>Department of Defense Space Program</h1>
          <Form {...formItemLayout}>
            <Form.Item label="Program Manager:">
              <span className="ant-form-text">Sidney Watkins</span>
            </Form.Item>
            <Form.Item label="Number of Employees:">
              <span className="ant-form-text">15</span>
            </Form.Item>
            <Form.Item label="Clearance Level:">
              <span className="ant-form-text">PUBLIC TRUST</span>
            </Form.Item>
            <Form.Item label="Salary Average:">
              <span className="ant-form-text">$123,989.87</span>
            </Form.Item>
          </Form>

          <ReactTable
            data={data}
            resolveData={data => data.map(row => row)}
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
            getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e, handleOriginal) => {
                  if (handleOriginal) {
                    handleOriginal();
                  }
                },
              };
            }}
            getTrProps={(state, rowInfo, column) => {
              return {
                onClick: (e, handleOriginal) => {
                  this.showRow(rowInfo.original);
                  if (handleOriginal) {
                    handleOriginal();
                  }
                },
              };
            }}
            columns={[
              {
                Header: 'Employees',
                columns: [
                  {
                    Header: 'Progress Status',
                    accessor: 'progressStatus',
                    Cell: props => (
                      <span>
                        {props.value === 'Yellow' && (
                          <span class="in-progress">
                            In Progress
                            <Icon type="sync" spin />
                          </span>
                        )}
                        {props.value === 'Green' && (
                          <span class="completed">
                            Complete
                            <Icon type="check-circle" theme="outlined" />
                          </span>
                        )}
                        {props.value === 'Red' && (
                          <span class="attention">
                            Needs Attention
                            <Icon type="warning" theme="filled" />
                          </span>
                        )}
                      </span>
                    ),
                  },
                  {
                    Header: 'Employee',
                    accessor: 'employeeName',
                  },
                  {
                    id: 'currentCareerTrack',
                    Header: 'Current Career Track',
                    accessor: d => `${d.careerTrackName}` + ' Tier ' + `${d.careerTrackTier}`,
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
        <Modal
          visible={selectedCareerTrackVisible}
          title="Network Engineer Tier 2 Progress"
          onOk={this.handleSelectedCareerTrackOk}
          onCancel={this.handleSelectedCareerTrackCancel}
          width={700}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={selectedCareerTrackLoading}
              onClick={this.handleSelectedCareerTrackOk}
            >
              Close
            </Button>,
          ]}
        >
          <Row gutter={[8, 8]}>
            <Col span={24}>Program: Department of Homeland Security Satellite Network</Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <h3>Advanced Networking Training</h3>
              <Steps progressDot current={0} direction="vertical" size="small">
                <Step
                  title="Interest Showed"
                  description="11/1/2019: PM contacted. Please schedule your training"
                />
                <Step title="Scheduled" description="Expected completion date: 11/15/2019" />
                <Step title="In Progress" description="Expected completion date: 12/15/2019" />
                <Step title="Completed" description="100%" />
              </Steps>
            </Col>
            <Col span={12}>
              <h3>CCNA Certification</h3>
              <Steps progressDot current={2} direction="vertical">
                <Step title="Interest Showed" description="10/15/2019" />
                <Step title="In Progress" description="Ready to schedule exame" />
                <Step title="Schedule Exam" description="Exam date scheduled on 12/1/2019" />
                <Step title="Exam Passed" description="100%" />
              </Steps>
            </Col>
          </Row>
        </Modal>
        <Modal
          visible={recommendedCareerTrackVisible}
          title="Software Developer Tier 3 Progress"
          onOk={this.handleRecommendedCareerTrackOk}
          onCancel={this.handleRecommendedCareerTrackCancel}
          width={700}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={recommendedCareerTrackLoading}
              onClick={this.handleRecommendedCareerTrackOk}
            >
              Close
            </Button>,
          ]}
        >
          <Row gutter={[8, 8]}>
            <Col span={24}>Program: Department of Defense Space Program</Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <h3>Security+ Certification</h3>
              <Steps progressDot current={2} direction="vertical">
                <Step title="Interest Showed" description="10/15/2019" />
                <Step title="In Progress" description="Ready to schedule exame" />
                <Step title="Schedule Exam" description="Exam date scheduled on 12/1/2019" />
                <Step title="Exam Passed" description="100%" />
              </Steps>
            </Col>
          </Row>
        </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default ProgramInformation;
