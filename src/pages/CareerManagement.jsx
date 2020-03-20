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

  componentDidMount() {
    const names = [
      { big: 'A', small: 'a'},
      { big: 'B', small: 'b'},
      { big: 'C', small: 'c'},
    ]
    names.forEach((item, i) => {
      this.toggleShow(i, `grow-class-${item.small}`, `measuringWrapper${item.big}`);
    })
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

  toggleShow = (index, cName, wrapperClass) => {
    this.setState(prevState => ({
      tabs: prevState.tabs.map((item, i) => (index === i ? { ...item, show: !item.show } : item)),
    }));
    let growDiv = document.querySelector(`.${cName}`);
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(`.${wrapperClass}`);
      growDiv.style.height = wrapper.clientHeight + 'px';
    }
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

    const skillDataSource = [
      {
        key: '1',
        name: 'Server Configuration Basics',
        status: 'Acquired: 100% Completed',
      },
      {
        key: '2',
        name: 'Windows Server Administration Level 1',
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
          <div className="action-column">
            <div className="action-item">
              <a>
                <Icon type="edit" />
                Edit
              </a>
            </div>
            <div className="action-item">
              <a>
                <Icon type="delete" />
                Delete
              </a>
            </div>
          </div>
        ),
      },
    ];

    const certificationDataSource = [
      {
        key: '1',
        name: 'A+',
        status: 'Acquired: 100% Completed',
      },
      {
        key: '2',
        name: 'Security+',
        status: 'Acquired: 100% Completed',
      },
      {
        key: '3',
        name: 'MCSA',
        status: 'Acquired: 100% Completed',
      },
      {
        key: '4',
        name: 'Splunk',
        status: 'Acquired: 100% Completed',
      },
      {
        key: '5',
        name: 'AWS Administration',
        status: 'Acquired: 100% Completed',
      },
      {
        key: '6',
        name: 'VMWare',
        status: 'Showed Interest: 0% Completed',
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
          <div className="action-column">
            <div className="action-item">
              <a>
                <Icon type="edit" />
                Edit
              </a>
            </div>
            <div className="action-item">
              <a>
                <Icon type="delete" />
                Delete
              </a>
            </div>
          </div>
        ),
      },
    ];

    const desiredCareerTrackDataSource = [
      {
        key: '1',
        name: 'Department of Homeland Security Network: System Engineer Tier 2 ',
        status: 'Training In Progress: 10% Completed',
        position: '8',
      },
      //System Engineer Tier 2 (Program: Department of Homeland Security Network)
      // {
      //   key: '2',
      //   name: 'State Department Nuclear Program Software Engineer Tier 3',
      //   status: 'Training In Progress, Program Manager Notified: 25% Completed',
      //   position: '15',
      // },
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
      },
      {
        title: 'Action',
        key: 'action',
        width: 300,
        render: () => (
          <div className="action-column">
            <div className="action-item">
              <a>
                <Icon type="edit" />
                Edit
              </a>
            </div>
            <div className="action-item">
              <a>
                <Icon type="delete" />
                Delete
              </a>
            </div>
          </div>
        ),
      },
    ];

    const positionsInterestedInDataSource = [
      {
        key: '1',
        position: 'Senior Network Engineer',
        program: 'Department of Homeland Security Network',
        location: 'Washington, D.C.',
        status: 'Resume Sent',
      },
      {
        key: '2',
        position: 'System Administrator',
        program: 'FBI Project 3',
        location: 'Chantilly, VA',
        status: 'Contacted by Program Manager',
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
          <div className="action-column">
            <div className="action-item">
              <a>
                <Icon type="edit" />
                Edit
              </a>
            </div>
            <div className="action-item">
              <a>
                <Icon type="delete" />
                Delete
              </a>
            </div>
          </div>
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
                {/* <a onClick={this.showSkillsModal}>
            <Icon type="search" />
            Search Skills
          </a> */}
                <Link to="/employee/growth/skills">
                  <Icon type="search" />
                  Search Skills
                </Link>
                <div className="career-management-item-container">
                  <div className="career-management-header-container">
                    <div
                      style={{ width: '100%' }}
                      className="row-title"
                      onClick={() => this.toggleShow(0, 'grow-class-a', 'measuringWrapperA')}
                    >
                      Skills
                      <Icon type={this.state.tabs[0].show ? 'up' : 'down'} />
                    </div>
                  </div>
                  <div className="grow-class grow-class-a">
                    <div className="measuringWrapperA">
                      <Table
                        dataSource={skillDataSource}
                        columns={skillColumns}
                        size="middle"
                        pagination={false}

                      />
                    </div>
                  </div>
                </div>
                <Link to="/employee/careerTrackSearch">
                  <Icon style={searchIconStyle} type="search" />
                  Search Career Tracks
                </Link>
                <div className="career-management-item-container">
                  <div className="career-management-header-container">
                    <div
                      style={{ width: '100%' }}
                      className="row-title"
                      onClick={() => this.toggleShow(2, 'grow-class-c', 'measuringWrapperC')}
                    >
                      Desired career tracks
                      <Icon type={this.state.tabs[2].show ? 'up' : 'down'} />
                    </div>
                  </div>
                  <div className="grow-class grow-class-c">
                    <div className="measuringWrapperC">
                      <Table
                        dataSource={desiredCareerTrackDataSource}
                        columns={desiredCareerTrackColumns}
                        size="middle"
                        pagination={false}

                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col style={{ padding: 20 }} xs={12}>
                <Link to="/employee/growth/certifications">
                    <Icon type="search" />
                    Search Certifcations
                  </Link>
                  <div className="career-management-item-container">
                    <div className="career-management-header-container">
                      <div
                        style={{ width: '100%' }}
                        className="row-title"
                        onClick={() => this.toggleShow(1, 'grow-class-b', 'measuringWrapperB')}
                      >
                        Certifications
                        <Icon type={this.state.tabs[1].show ? 'up' : 'down'} />
                      </div>
                    </div>
                    <div className="grow-class grow-class-b">
                      <div className="measuringWrapperB">
                        <Table
                          dataSource={certificationDataSource}
                          columns={certificationColumns}
                          size="middle"
                          pagination={false}

                        />
                      </div>
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
