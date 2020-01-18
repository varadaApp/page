import React from 'react';
import {
  Card,
  Typography,
  Alert,
  Icon,
  Table,
  Divider,
  Upload,
  message,
  Button,
  Modal,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import Link from 'umi/link';
import { trainingData, certData } from '../Utils';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class CareerManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillsLoading: false,
      skillsVisible: false,
      certificationsLoading: false,
      certificationsVisible: false,
      // trainingsLoading: false,
      // trainingsVisible: false,
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
      // trainingsLoading,
      // trainingsVisible,
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
        render: (text, record) => (
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
        render: (text, record) => (
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
        render: (text, record) => (
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
        render: (text, record) => (
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
        <Card>
          <Upload {...props}>
            <Button type="primary">
              <Icon type="upload" /> Click to Upload Resume
            </Button>
          </Upload>
          <Divider orientation="left">
            <h1>Sidney's Skills</h1>
          </Divider>
          <a onClick={this.showSkillsModal}>
            <Icon type="search" />
            Search Skills
          </a>
          <Table
            dataSource={skillDataSource}
            columns={skillColumns}
            size="middle"
            pagination={false}
            style={{ paddingBottom: 20 }}
          />
          <Divider orientation="left">
            <h1>Sidney's Certifications</h1>
          </Divider>
          <a onClick={this.showCertsModal}>
            <Icon type="search" />
            Search Certifcations
          </a>
          <Table
            dataSource={certificationDataSource}
            columns={certificationColumns}
            size="middle"
            pagination={false}
            style={{ paddingBottom: 20 }}
          />
          <Divider orientation="left">
            <h1>Sidney's Desired Career Tracks</h1>
          </Divider>
          <Link to="/employee/careerTrackSearch">
            <Icon type="search" />
            Search Career Tracks
          </Link>

          <Table
            dataSource={desiredCareerTrackDataSource}
            columns={desiredCareerTrackColumns}
            size="middle"
            pagination={false}
            style={{ paddingBottom: 20 }}
          />
          <Divider orientation="left">
            <h1>Sidney's Open Positions Interested In</h1>
          </Divider>
          <Link to="/employee/positionSearch">
            <Icon type="search" />
            Search Open Positions
          </Link>
          <Table
            dataSource={positionsInterestedInDataSource}
            columns={positionsInterestedInColumns}
            size="middle"
            pagination={false}
            style={{ paddingBottom: 20 }}
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
