/* eslint-disable global-require */
import React from 'react';
import { Card, Icon, Row, Col, Table, Divider, Upload, message, Button, Modal } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Link from 'umi/link';
import ReactTable from 'react-table';
import { trainingData, certData } from './Utils';

// Import React Table
import 'react-table/react-table.css';

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

const careerMessageContainerStyle = {
  padding: '20px',
  backgroundColor: '#fff',
  marginBottom: '20px',
  borderColor: '#919197 !important',
  borderWidth: '1px',
};

const tableLabelStyle = {
  fontSize: '28px',
  lineHeight: '30px',
  color: '#1c1c1c',
  fontWeight: 600,
};

const searchTextStyle = {
  fontSize: '16px',
};

const searchIconStyle = {
  margin: '5px',
};

class CareerManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillsLoading: false,
      skillsVisible: false,
      certificationsLoading: false,
      certificationsVisible: false,
      skillsData: trainingData(),
      certsData: certData(),
    };
  }

  showSkillsModal = () => {
    this.setState({
      skillsVisible: true,
    });
  };

  handleSkillsOk = () => {
    this.setState({ skillsLoading: true });
    setTimeout(() => {
      this.setState({ skillsLoading: false, skillsVisible: false });
    }, 500);
  };

  handleSkillsCancel = () => {
    this.setState({ skillsVisible: false });
  };

  showCertsModal = () => {
    this.setState({
      certificationsVisible: true,
    });
  };

  handleCertsOk = () => {
    this.setState({ certificationsLoading: true });
    setTimeout(() => {
      this.setState({ certificationsLoading: false, certificationsVisible: false });
    }, 500);
  };

  handleCertsCancel = () => {
    this.setState({ certificationsVisible: false });
  };

  render() {
    const {
      skillsLoading,
      skillsVisible,
      certificationsLoading,
      certificationsVisible,
      skillsData,
      certsData,
    } = this.state;
    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    const skillDataSource = [
      {
        key: '1',
        name: 'Web Development',
        status: 'Acquired: 100% Completed',
      },
      {
        key: '2',
        name: 'Leadership',
        status: 'Desired - Training Scheduled: 35% Completed',
      },
    ];

    const skillColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 300,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 300,
      },
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <span>
            <a>
              <Icon type="edit" />
              Edit
            </a>
            <Divider type="vertical" />
            <a>
              <Icon type="delete" />
              Delete
            </a>
          </span>
        ),
      },
    ];

    const certificationDataSource = [
      {
        key: '1',
        name: 'Security+',
        status: 'Acquired: 100% Completed',
      },
      {
        key: '2',
        name: 'AWS Developer',
        status: 'Desired - Training In Progess: 40% Completed',
      },
    ];

    const certificationColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 300,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 300,
      },
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <span>
            <a>
              <Icon type="edit" />
              Edit
            </a>
            <Divider type="vertical" />
            <a>
              <Icon type="delete" />
              Delete
            </a>
          </span>
        ),
      },
    ];

    const desiredCareerTrackDataSource = [
      {
        key: '1',
        name: 'Department of Homeland Security Systems Administrator Tier 3',
        status: 'Training In Progress: 10% Completed',
        position: '8',
      },
      {
        key: '2',
        name: 'State Department Nuclear Program Software Engineer Tier 3',
        status: 'Training In Progress, Program Manager Notified: 25% Completed',
        position: '15',
      },
    ];

    const desiredCareerTrackColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 450,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 350,
      },
      {
        title: 'Open Positions',
        dataIndex: 'position',
        key: 'position',
        width: 100,
      },
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <span>
            <a>
              <Icon type="edit" />
              Edit
            </a>
            <Divider type="vertical" />
            <a>
              <Icon type="delete" />
              Delete
            </a>
          </span>
        ),
      },
    ];

    const positionsInterestedInDataSource = [
      {
        key: '1',
        position: 'Sr. Software Developer',
        program: 'Department of Defense Project 1',
        location: 'Washington, D.C.',
        status: 'Resume Sent: 5% Completed',
      },
      {
        key: '2',
        position: 'Software Engineer Tech Lead',
        program: 'FBI Project 3',
        location: 'Chantilly, VA',
        status: 'Contacted by Program Manager: 30% Completed',
      },
    ];

    const positionsInterestedInColumns = [
      {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
        width: 300,
      },
      {
        title: 'Program',
        dataIndex: 'program',
        key: 'program',
        width: 300,
      },
      {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
        width: 200,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 300,
      },
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <span>
            <a>
              <Icon type="edit" />
              Edit
            </a>
            <Divider type="vertical" />
            <a>
              <Icon type="delete" />
              Delete
            </a>
          </span>
        ),
      },
    ];

    return (
      <PageHeaderWrapper>
        <Row gutter={[8, 8]}>
          <Col xs={16}>
            <Card>
              <div className="career-management-item-container">
                <img
                  className="career-management-icon"
                  src={require('../assets/skill-icon.png')}
                  alt=""
                />
                <div className="career-management-header-container">
                  <p style={tableLabelStyle}>Skills</p>
                  <a style={searchTextStyle} onClick={this.showSkillsModal}>
                    <Icon style={searchIconStyle} type="search" />
                    Search Skills
                  </a>
                </div>
                <Divider />
                <Table
                  dataSource={skillDataSource}
                  columns={skillColumns}
                  size="middle"
                  pagination={false}
                  style={{ paddingBottom: 20 }}
                />
              </div>
              <div className="career-management-item-container">
                <img
                  className="career-management-icon"
                  src={require('../assets/certification-icon.png')}
                  alt=""
                />
                <div className="career-management-header-container">
                  <p style={tableLabelStyle}>Certifications</p>
                  <a style={searchTextStyle} onClick={this.showCertsModal}>
                    <Icon style={searchIconStyle} type="search" />
                    Search Certifications
                  </a>
                </div>
                <Divider />
                <Table
                  dataSource={certificationDataSource}
                  columns={certificationColumns}
                  size="middle"
                  pagination={false}
                  style={{ paddingBottom: 20 }}
                />
              </div>
              <div className="career-management-item-container">
                <img
                  className="career-management-icon"
                  src={require('../assets/desire-icon.png')}
                  alt=""
                />
                <div className="career-management-header-container">
                  <p style={tableLabelStyle}>Desired career tracks</p>
                  <Link to="/employee/careerTrackSearch">
                    <Icon style={searchIconStyle} type="search" />
                    Search Career Tracks
                  </Link>
                </div>
                <Divider />
                <Table
                  dataSource={desiredCareerTrackColumns}
                  columns={desiredCareerTrackDataSource}
                  size="middle"
                  pagination={false}
                  style={{ paddingBottom: 20 }}
                />
              </div>
              <div className="career-management-item-container">
                <img
                  className="career-management-icon"
                  src={require('../assets/interested-icon.png')}
                  alt=""
                />
                <div className="career-management-header-container">
                  <p style={tableLabelStyle}>Open positions interested in</p>
                  <Link to="/employee/positionSearch">
                    <Icon style={searchIconStyle} type="search" />
                    Search Open Positions
                  </Link>
                </div>
                <Divider />
                <Table
                  dataSource={positionsInterestedInDataSource}
                  columns={positionsInterestedInColumns}
                  size="middle"
                  pagination={false}
                  style={{ paddingBottom: 20 }}
                />
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
          </Col>
          <Col xs={8}>
            <div style={{ width: '100%' }}>
              <img
                style={{ width: '100%', height: 320 }}
                src={require('../assets/person-with-pc.png')}
                alt=""
              />
            </div>
            <div style={careerMessageContainerStyle}>
              <p style={careerMessageHeaderStyle}>Career Management</p>
              <p style={careerMessageContentStyle}>
                It is a continuing process that allows you to adapt to the changing demands of our
                dynamic economy. The career management process embraces various concepts:
                Self-awareness, career development planning/career exploration, life-long learning,
                and networking.
              </p>
            </div>
            <div style={{ width: '100%' }}>
              <img
                style={{ width: '100%' }}
                src="https://cdn.dribbble.com/users/79571/screenshots/4407347/swingvy_all_illustrations.png"
                alt=""
              />
            </div>
            <div style={careerMessageContainerStyle}>
              <p style={careerMessageHeaderStyle}>Your profile document</p>
              <p style={careerMessageContentStyle}>
                Depending on your industry and the type of job you are interested, a resume can be a
                great way to highlight your skills and experience in a manner that is more visually
                appealing and engaging.
              </p>
              <Upload {...props}>
                <Button type="primary">
                  <Icon type="upload" /> Click to Upload Resume
                </Button>
              </Upload>
            </div>
          </Col>
        </Row>
        <Modal
          visible={skillsVisible}
          title="Skills"
          onOk={this.handleSkillsOk}
          onCancel={this.handleSkillsCancel}
          width={700}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={skillsLoading}
              onClick={this.handleSkillsOk}
            >
              Close
            </Button>,
          ]}
        >
          <ReactTable
            data={skillsData}
            filterable
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
            columns={[
              {
                Header: 'Skill Name',
                accessor: 'name',
                filterMethod: (filter, row) =>
                  row[filter.id].startsWith(filter.value) && row[filter.id].endsWith(filter.value),
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </Modal>
        <Modal
          visible={certificationsVisible}
          title="Certifications"
          onOk={this.handleCertsOk}
          onCancel={this.handleCertsCancel}
          width={700}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={certificationsLoading}
              onClick={this.handleCertsOk}
            >
              Close
            </Button>,
          ]}
        >
          <ReactTable
            data={certsData}
            filterable
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
            columns={[
              {
                Header: 'Certification Name',
                accessor: 'name',
                filterMethod: (filter, row) =>
                  row[filter.id].startsWith(filter.value) && row[filter.id].endsWith(filter.value),
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default CareerManagement;
