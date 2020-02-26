/* eslint-disable global-require */
import React from 'react';
import { Card, Icon, Row, Col, Table, Divider, Button, Modal } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Link from 'umi/link';
import ReactTable from 'react-table';
import { trainingData, certData } from './Utils';

// Import React Table
import 'react-table/react-table.css';

const searchTextStyle = {
  fontSize: '14px',
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
      tabs: [
        {
          show: false,
        },
        {
          show: false,
        },
        {
          show: false,
        },
        {
          show: false,
        },
      ],
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

  toggleShow = index =>
    this.setState(prevState => ({
      tabs: prevState.tabs.map((item, i) => (index === i ? { ...item, show: !item.show } : item)),
    }));

  render() {
    const {
      skillsLoading,
      skillsVisible,
      certificationsLoading,
      certificationsVisible,
      skillsData,
      certsData,
    } = this.state;

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
        width: 300,
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
        width: 300,
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
          <Card>
            <div className="screen-header">
              <h1 className="page-title">Your Career Management</h1>
            </div>
            <Divider />
            <Row style={{ marginRight: 20 }}>
              <Col style={{ padding: 20 }} xs={12}>
                <a style={searchTextStyle} onClick={this.showSkillsModal}>
                  <Icon style={searchIconStyle} type="search" />
                  Search Skills
                </a>
                <div className="career-management-item-container">
                  <img
                    className="career-management-icon"
                    src={require('../assets/skill-icon.png')}
                    alt=""
                  />
                  <div className="career-management-header-container">
                    <div
                      style={{ width: '100%' }}
                      className="row-title"
                      onClick={() => this.toggleShow(0)}
                    >
                      Skills
                      <Icon type={this.state.tabs[0].show ? 'up' : 'down'} />
                    </div>
                  </div>
                  <div style={!this.state.tabs[0].show ? { display: 'none' } : {}}>
                    <Table
                      dataSource={skillDataSource}
                      columns={skillColumns}
                      size="middle"
                      pagination={false}
                      style={{ paddingBottom: 20 }}
                    />
                  </div>
                </div>
              </Col>
              {/*  */}
              <Col style={{ padding: 20 }} xs={12}>
                <a style={searchTextStyle} onClick={this.showSkillsModal}>
                  <Icon style={searchIconStyle} type="search" />
                  Search Skills
                </a>
                <div className="career-management-item-container">
                  <img
                    className="career-management-icon"
                    src={require('../assets/certification-icon.png')}
                    alt=""
                  />
                  <div className="career-management-header-container">
                    <div
                      style={{ width: '100%' }}
                      className="row-title"
                      onClick={() => this.toggleShow(1)}
                    >
                      Certifications
                      <Icon type={this.state.tabs[1].show ? 'up' : 'down'} />
                    </div>
                  </div>
                  <div style={!this.state.tabs[1].show ? { display: 'none' } : {}}>
                    <Table
                      dataSource={certificationDataSource}
                      columns={certificationColumns}
                      size="middle"
                      pagination={false}
                      style={{ paddingBottom: 20 }}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col style={{ padding: 20 }} xs={12}>
                <Link to="/employee/careerTrackSearch">
                  <Icon style={searchIconStyle} type="search" />
                  Search Career Tracks
                </Link>
                <div className="career-management-item-container">
                  <img
                    className="career-management-icon"
                    src={require('../assets/desire-icon.png')}
                    alt=""
                  />
                  <div className="career-management-header-container">
                    <div
                      style={{ width: '100%' }}
                      className="row-title"
                      onClick={() => this.toggleShow(2)}
                    >
                      Desired career tracks
                      <Icon type={this.state.tabs[2].show ? 'up' : 'down'} />
                    </div>
                  </div>
                  <div style={!this.state.tabs[2].show ? { display: 'none' } : {}}>
                    <Table
                      dataSource={desiredCareerTrackDataSource}
                      columns={desiredCareerTrackColumns}
                      size="middle"
                      pagination={false}
                      style={{ paddingBottom: 20 }}
                    />
                  </div>
                </div>
              </Col>
              <Col style={{ padding: 20 }} xs={12}>
                <Link to="/employee/positionSearch">
                  <Icon style={searchIconStyle} type="search" />
                  Search Open Positions
                </Link>
                <div className="career-management-item-container">
                  <img
                    className="career-management-icon"
                    src={require('../assets/interested-icon.png')}
                    alt=""
                  />
                  <div className="career-management-header-container">
                    <div
                      style={{ width: '100%' }}
                      className="row-title"
                      onClick={() => this.toggleShow(3)}
                    >
                      Open positions interested in
                      <Icon type={this.state.tabs[3].show ? 'up' : 'down'} />
                    </div>
                  </div>
                  <div style={!this.state.tabs[3].show ? { display: 'none' } : {}}>
                    <Table
                      dataSource={positionsInterestedInDataSource}
                      columns={positionsInterestedInColumns}
                      size="middle"
                      pagination={false}
                      style={{ paddingBottom: 20 }}
                    />
                  </div>
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
