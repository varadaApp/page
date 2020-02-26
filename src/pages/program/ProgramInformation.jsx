/* eslint-disable no-confusing-arrow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
import React from 'react';
import {
  Card,
  Icon,
  Form,
  Button,
  Modal,
  Divider,
  Descriptions,
  Row,
  Col,
  Steps,
  Table,
  Select,
  Input,
  Popconfirm,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ReactTable from 'react-table';
import { programEmployees } from '../Utils';

import 'react-table/react-table.css';

const EditableContext = React.createContext();

const programTitleStyle = {
  fontSize: '30px',
  color: 'black',
};

const employeeHeaderStyle = {
  margin: '10px',
  padding: '5px',
  fontSize: '30px',
  color: 'black',
  fontWeight: 500,
  letterSpacing: '0.5px',
};

const labelStyle = {
  fontSize: '22px',
  color: 'black',
  fontWeight: 500,
  letterSpacing: '0.5px',
  marginBottom: '10px !important',
};

const valueStyle = {
  marginLeft: '16px',
  color: '#1c1c1c',
  fontWeight: 600,
  fontSize: '16px',
  paddingLeft: '10px',
};

const editStyle = {
  color: '#1c1c1c',
  fontWeight: 600,
  fontSize: '14px',
  marginLeft: '5px',
};

const tableLabelStyle = {
  fontSize: '22px',
  lineHeight: '30px',
  color: 'black',
  fontWeight: 500,
};

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState(
      prevState => ({ editing: prevState.editing }),
      () => {
        if (editing) {
          this.input.focus();
        }
      },
    );
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(
          <Input
            ref={node => {
              this.input = node;
            }}
            onPressEnter={this.save}
            onBlur={this.save}
          />,
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

class ProgramInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: programEmployees(),
      selectedCareerTrackVisible: false,
      selectedCareerTrackLoading: false,
      recommendedCareerTrackVisible: false,
      recommendedCareerTrackLoading: false,
      selectedCareerTrack: '',
      selectedCareerTrackTier: '',
      dataSource: [
        {
          key: '0',
          name: 'Program Ops (Technical)',
        },
        {
          key: '1',
          name: 'Program/Project Management',
        },
        {
          key: '2',
          name: 'Software Developer',
        },
        {
          key: '3',
          name: 'Systems Administration',
        },
      ],
      count: 4,
      dataSourceSkills: [
        {
          key: '0',
          name: 'Software Development',
        },
        {
          key: '1',
          name: 'SQL Server Database',
        },
      ],
      dataSourceCertifications: [
        {
          key: '0',
          name: 'Security+',
        },
        {
          key: '1',
          name: 'AWS Developer',
        },
      ],
    };
    this.showRow = this.showRow.bind(this);
    this.columns = [
      {
        title: 'Career Track',
        dataIndex: 'name',
        editable: true,
      },
      {
        render: record => {
          const { dataSource } = this.state;
          return dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null;
        },
        title: '',
        width: '20%',
        dataIndex: 'operation',
      },
    ];
    this.columnsSkills = [
      {
        title: 'Name',
        dataIndex: 'name',
        editable: true,
      },
      {
        title: 'Action',
        width: '20%',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.columnsCertifications = [
      {
        title: 'Certification Name',
        dataIndex: 'name',
        editable: true,
      },
      {
        title: 'Action',
        width: '20%',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.handleCareerTrackSelect = this.handleCareerTrackSelect.bind(this);
    this.handleCareerTrackTierSelect = this.handleCareerTrackTierSelect.bind(this);
  }

  handleCareerTrackSelect(value) {
    this.setState({ selectedCareerTrack: value });
  }

  handleCareerTrackTierSelect(value) {
    this.setState({ selectedCareerTrackTier: value });
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

  handleDelete = key => {
    this.setState(prevState => ({
      dataSource: prevState.dataSource.filter(item => item.key !== key),
    }));
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Career Track ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleOriginal = value => {
    console.log('handleOriginal', value);
  };

  handleSave = row => {
    this.setState(prevState => {
      const newData = prevState.dataSource;
      const index = prevState.newData.findIndex(item => row.key === item.key);
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      return { dataSource: newData };
    });
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
            Open Positions Applied To:
            <br />
            Senior Network Manager
            <br />
            Job Requisition #14567
            <br />
            PM:Clarence Hodson
            <br />
            <br />
            <a onClick={this.showSelectedCareerTrackModal}>Current Percentage Complete: 25%</a>
            <Descriptions
              layout="vertical"
              bordered
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              size="small"
            >
              <Descriptions.Item label="Trainings">
                Advanced Networking -{' '}
                <span className="attention">
                  Training Recently Shown Interest, Needs Action
                  <Icon type="warning" theme="filled" />
                </span>
                <br />
                Networking Circuits - Interest Not Selected
              </Descriptions.Item>
              <Descriptions.Item label="Certifications">
                CCNA -{' '}
                <span className="in-progress">
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
            Open Positions Applied To:
            <br />
            Senior Software Developer
            <br />
            Job Requisition #14589
            <br />
            PM: Eladia Calderon
            <br />
            <br />
            <a onClick={this.showRecommendedCareerTrackModal}>Current Percentage Complete: 35%</a>
            <Descriptions
              layout="vertical"
              bordered
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              size="small"
            >
              <Descriptions.Item label="Trainings">
                Programming Level 3 Training -{' '}
                <span className="in-progress">
                  Training Scheduled
                  <Icon type="calendar" theme="outlined" />
                </span>
                <br />
                Database Level 3 Training -{' '}
                <span className="in-progress">
                  Training in Progress
                  <Icon type="sync" spin />
                </span>
                <br />
                Advanced Agile Training-{' '}
                <span className="completed">
                  Training Complete
                  <Icon type="check-circle" theme="outlined" />
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Certifications">
                CCISP -{' '}
                <span className="attention">
                  Certification Recently Shown Interest, Needs Action
                  <Icon type="warning" theme="filled" />
                </span>
                <br />
                AWS Developer -{' '}
                <span className="completed">
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
      dataSourceCertifications,
      dataSourceSkills,
    } = this.state;
    const { Step } = Steps;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });

    const columnsSkills = this.columnsSkills.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    const columnsCertifications = this.columnsCertifications.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });

    const formData = [
      {
        label: 'Program Manager',
        value: 'Sidney Watkins',
      },
      {
        label: 'Number of Employees',
        value: '15',
      },
      {
        label: 'Clearance Level',
        value: 'PUBLIC TRUST',
      },
      {
        label: 'Salary Average',
        value: '$123,989.87',
      },
      {
        label: 'Period of Performance Ends',
        value: 'July 15, 2020',
      },
    ];

    const { Option } = Select;
    return (
      <PageHeaderWrapper>
        <Card style={{ margin: '20px', padding: '10px' }}>
          <div className="screen-header">
            <h1 className="page-title">Department of Defense Space Program</h1>
          </div>
          <Divider />
          <Row gutter={[8, 8]} style={{ margin: '20px', padding: '10px' }}>
            <Col className="program-info-careertract-container" xs={16} span={18}>
              <Col xs={12}>
                <Select
                  showSearch
                  style={{ width: '100%', paddingLeft: 5, paddingRight: 5 }}
                  placeholder="Select a Career Track"
                  optionFilterProp="children"
                  // onChange={onChange}
                  // onFocus={onFocus}
                  // onBlur={onBlur}
                  // onSearch={onSearch}
                  onSelect={this.handleCareerTrackSelect}
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="0">&nbsp;</Option>
                  <Option value="1">Program/Project Management</Option>
                  <Option value="2">Software Developer</Option>
                  <Option value="3">Systems Administration</Option>
                  <Option value="4">Program Ops (Technical)</Option>
                </Select>
              </Col>
              <Col xs={12}>
                <Select
                  showSearch
                  style={{ width: '100%', paddingLeft: 5, paddingRight: 5 }}
                  placeholder="Select a Career Track Tier"
                  optionFilterProp="children"
                  // onChange={onChange}
                  // onFocus={onFocus}
                  // onBlur={onBlur}
                  // onSearch={onSearch}
                  onSelect={this.handleCareerTrackSelectTier}
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="0">&nbsp;</Option>
                  <Option value="1">Tier 1</Option>
                  <Option value="2">Tier 2</Option>
                  <Option value="3">Tier 3</Option>
                </Select>
              </Col>
              {this.state.selectedCareerTrack ? (
                <div style={{ padding: 20, marginTop: 50 }}>
                  <Form layout="inline">
                    <Form.Item>
                      <Input placeholder="Certification Name" />
                    </Form.Item>
                    <Form.Item>
                      <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                        Add a Required Certification
                      </Button>
                    </Form.Item>
                  </Form>
                  <p style={tableLabelStyle}>Certifications</p>
                  <Table
                    dataSource={dataSourceCertifications}
                    columns={columnsCertifications}
                    size="middle"
                    pagination={false}
                    style={{ paddingBottom: 20 }}
                  />
                  <Divider />
                  <Form layout="inline">
                    <Form.Item>
                      <Input placeholder="Skill Name" />
                    </Form.Item>
                    <Form.Item>
                      <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                        Add a Required Skill
                      </Button>
                    </Form.Item>
                  </Form>
                  <p style={tableLabelStyle}>Skills</p>
                  <Table
                    dataSource={dataSourceSkills}
                    columns={columnsSkills}
                    size="middle"
                    pagination={false}
                    style={{ paddingBottom: 20 }}
                  />
                </div>
              ) : (
                <div>
                  <p
                    style={{
                      marginTop: 50,
                      fontSize: 14,
                      textAlign: 'center',
                    }}
                  >
                    No career track selected
                  </p>
                </div>
              )}
            </Col>
            <Col
              style={{ backgroundColor: 'rgb(240, 242, 245)', padding: 20, borderRadius: 10 }}
              xs={8}
            >
              <Form>
                {formData.map(d => (
                  <Form.Item style={{ fontSize: '14px', alignItems: 'center' }}>
                    <p className="program-info-label" style={labelStyle}>
                      {d.label}
                    </p>
                    <Row>
                      <Col xs={20}>
                        <p style={valueStyle} className="ant-form-text">
                          {d.value}
                        </p>
                      </Col>
                      <Col xs={4}>
                        <Icon type="edit" />
                        <span style={editStyle}>Edit</span>
                      </Col>
                    </Row>
                  </Form.Item>
                ))}
              </Form>
            </Col>
            {/* <Col style={{ padding: '10px', backgroundColor: 'rgb(240, 242, 245)' }} xs={12}>
              <Form layout="inline">
                <Form.Item>
                  <Input style={{ width: 400 }} placeholder="Career Track Name" />
                </Form.Item>
                <Form.Item>
                  <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                    Add a Career Track
                  </Button>
                </Form.Item>
              </Form>
              <Table
                className="program-info-career-track-table"
                components={components}
                rowClassName={() => 'editable-row'}
                dataSource={dataSource}
                columns={columns}
              />
            </Col> */}
          </Row>
          <p style={employeeHeaderStyle}>Employees</p>
          <Divider />
          <ReactTable
            style={{ marginLeft: '20px', paddingLeft: '10px' }}
            data={data}
            resolveData={d => d.map(row => row)}
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
            getTdProps={() => ({
              onClick: (e, handleOriginal) => {
                if (handleOriginal) {
                  handleOriginal();
                }
              },
            })}
            getTrProps={rowInfo => ({
              onClick: (e, handleOriginal) => {
                this.showRow(rowInfo.original);
                if (handleOriginal) {
                  handleOriginal();
                }
              },
            })}
            columns={[
              {
                Header: 'Employee',
                accessor: 'employeeName',
              },
              {
                Header: 'Current Status',
                accessor: 'currentStatus',
              },
              {
                id: 'currentCareerTrack',
                Header: 'Current Career Track',
                accessor: d => `${d.careerTrackName} Tier ${d.careerTrackTier}`,
              },
              {
                Header: 'Location',
                accessor: 'locationName',
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
            <Col span={24}>
              Overall Expected Completion Date: 2/1/2020
              <br />
              Program: Department of Homeland Security Satellite Network
            </Col>
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
          width={600}
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
            <Col span={24}>
              Overall Expected Completion Date: 2/1/2020
              <br />
              Program: Department of Defense Space Program
            </Col>
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
