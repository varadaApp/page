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
  Table,
  Input,
  Popconfirm,
  Select,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { programEmployees } from '../Utils';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

const EditableContext = React.createContext();

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
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
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
        })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
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
      programValue: '',
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
          name: 'Software Development',
        },
        {
          key: '2',
          name: 'Systems Administration',
        },
      ],
      count: 4,
      dataSourceCareerTracks: [
        {
          key: '0',
          name: 'Program Ops (Technical)',
        },
        {
          key: '1',
          name: 'Software Development',
        },
        {
          key: '2',
          name: 'Systems Administration',
        },
      ],
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
        title: '',
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
    this.columnsCareerTracks = [
      {
        title: 'Career Track',
        dataIndex: 'name',
        editable: true,
      },
      {
        title: '',
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
    this.columnsSkills = [
      {
        title: 'Skill Name',
        dataIndex: 'name',
        editable: true,
      },
      {
        title: '',
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
        title: '',
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
    this.handleProgramChange = this.handleProgramChange.bind(this);
    this.handleProgramSelect = this.handleProgramSelect.bind(this);
  }

  handleProgramChange(value) {
    this.setState({ programValue: value });
  }
  handleProgramSelect(value) {
    this.setState({ programValue: value });
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

  showRow(row) {
    const { info } = Modal;
    const { Step } = Steps;
    console.log('modalrow', row);
    info({
      width: 800,
      title: row.employeeName,
      content: (
        <div>
          <Form {...formItemLayout}>
            <Form.Item label="Position Title:">
              <span className="ant-form-text">Linux System Administrator</span>
            </Form.Item>
            <Form.Item label="Labor Category and Level:">
              <span className="ant-form-text">System Admin Level 2</span>
            </Form.Item>
            <Form.Item label="Current Career Track:">
              <span className="ant-form-text">System Administration Level 2</span>
            </Form.Item>
            <Form.Item label="Program Name:">
              <span className="ant-form-text">Department of Defense Space Program</span>
            </Form.Item>
            <Form.Item label="Program Location:">
              <span className="ant-form-text">Washington, D.C.</span>
            </Form.Item>
            <Form.Item label="Current Salary:">
              <span className="ant-form-text">$110,000</span>
            </Form.Item>
            <Form.Item label="Current Certifications:">
              <span className="ant-form-text">A+, Security+, Linux+, Splunk</span>
            </Form.Item>
            <Form.Item label="Current Clearance:">
              <span className="ant-form-text">Secret</span>
            </Form.Item>
          </Form>
        </div>
      ),
      onOk() {},
    });
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
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

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };

  render() {
    const {
      data,
      selectedCareerTrackVisible,
      selectedCareerTrackLoading,
      recommendedCareerTrackVisible,
      recommendedCareerTrackLoading,
      dataSource,
      dataSourceCertifications,
      dataSourceSkills,
      dataSourceCareerTracks,
    } = this.state;
    const { Step } = Steps;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };
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
    const columnsCareerTracks = this.columnsCareerTracks.map(col => {
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

    return (
      <PageHeaderWrapper>
        <Card>
          <div className="screen-header">
            <h1 className="page-title">Program Information</h1>
          </div>
          <div style={{ display: 'flex', margin: 20, padding: 10 }}>
            <Icon style={{ fontSize: 35 }} type="bulb" /> 
            <div style={{ width: '80%', paddingLeft: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <Divider />
          <h2>Select program:</h2>
          <Select
            showSearch
            style={{ width: 350 }}
            placeholder="Program"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onSelect={this.handleProgramSelect}
            onChange={this.handleProgramChange}
          >
            <Option value="All">All Programs</Option>
            <Option value="Department of Defense Space Program">
              Department of Defense Space Program
            </Option>
            <Option value="Department of Homeland Security Network">
              Department of Homeland Security Network
            </Option>
            <Option value="AWS Technical Support Program">AWS Technical Support Program</Option>
          </Select>
          <br />
          <div
            style={
              this.state.programValue === 'Department of Defense Space Program'
                ? {}
                : { display: 'none' }
            }
          >
            <Row gutter={[8, 8]}>
              <Col xs={12} span={6}>
                <h1>Department of Defense Space Program</h1>
                <Form {...formItemLayout}>
                  <Form.Item label="Program Location:">
                    <span className="ant-form-text">Washington, DC</span>
                  </Form.Item>
                  <Form.Item label="Program Manager:">
                    <span className="ant-form-text">Sidney Watkins</span>
                  </Form.Item>
                  <Form.Item label="Number of Employees:">
                    <span className="ant-form-text">14</span>
                  </Form.Item>
                  <Form.Item label="Clearance Level:">
                    <span className="ant-form-text">PUBLIC TRUST</span>
                  </Form.Item>
                  <Form.Item label="Salary Average:">
                    <span className="ant-form-text">$123,989.87</span>
                  </Form.Item>
                  <Form.Item label="Period of Performance Ends:">
                    <span className="ant-form-text">December 15, 2020</span>
                  </Form.Item>
                </Form>
              </Col>
              {/* <Col xs={12} span={18}>
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
                style={{ width: 700 }}
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSourceCareerTracks}
                columns={columnsCareerTracks}
                pagination={false}
              />
              <br />
              <Divider></Divider>
              <Select
                showSearch
                style={{ width: 400 }}
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
                <Option value="1">Program Ops (Technical)</Option>
                <Option value="2">Software Development</Option>
                <Option value="3">Systems Administration</Option>
              </Select>
              <Select
                showSearch
                style={{ width: 250 }}
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

              <div style={this.state.selectedCareerTrack ? {} : { display: 'none' }}>
                <Form layout="inline">
                  <Form.Item>
                    <Input style={{ width: 400 }} placeholder="Certification Name" />
                  </Form.Item>
                  <Form.Item>
                    <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                      Add a Required Certification
                    </Button>
                  </Form.Item>
                </Form>
                <Table
                  style={{ width: 700 }}
                  components={components}
                  rowClassName={() => 'editable-row'}
                  bordered
                  dataSource={dataSourceCertifications}
                  columns={columnsCertifications}
                  pagination={false}
                />
                <br />
                <Form layout="inline">
                  <Form.Item>
                    <Input style={{ width: 400 }} placeholder="Skill Name" />
                  </Form.Item>
                  <Form.Item>
                    <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                      Add a Required Skill
                    </Button>
                  </Form.Item>
                </Form>
                <Table
                  style={{ width: 700 }}
                  components={components}
                  rowClassName={() => 'editable-row'}
                  bordered
                  dataSource={dataSourceSkills}
                  columns={columnsSkills}
                  pagination={false}
                />
              </div>
            </Col> */}
            </Row>
            <br />
            <Button type="primary" size="small">
              Export to CSV
            </Button>
            <Button type="primary" size="small">
              Export to PDF
            </Button>
            <br />
            <ReactTable
              data={data}
              resolveData={data => data.map(row => row)}
              defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
              getTdProps={(state, rowInfo, column, instance) => {
                return {
                  onClick: (e, handleOriginal) => {
                    console.log('A Td Element was clicked!');
                    console.log('it produced this event:', e);
                    console.log('It was in this column:', column);
                    console.log('It was in this row:', rowInfo);
                    console.log('It was in this table instance:', instance);
                    console.log('handleOriginal', handleOriginal);
                    // IMPORTANT! React-Table uses onClick internally to trigger
                    // events like expanding SubComponents and pivots.
                    // By default a custom 'onClick' handler will override this functionality.
                    // If you want to fire the original onClick handler, call the
                    // 'handleOriginal' function.
                    if (handleOriginal) {
                      handleOriginal();
                    }
                  },
                };
              }}
              getTrProps={(state, rowInfo, column) => {
                return {
                  onClick: (e, handleOriginal) => {
                    console.log('A TR Element was clicked!');
                    console.log('it produced this event:', e);
                    console.log('It was in this column:', column);
                    console.log('It was in this row:', rowInfo);
                    //console.log('It was in this table instance:', instance);
                    console.log('handleOriginal', handleOriginal);
                    // IMPORTANT! React-Table uses onClick internally to trigger
                    // events like expanding SubComponents and pivots.
                    // By default a custom 'onClick' handler will override this functionality.
                    // If you want to fire the original onClick handler, call the
                    // 'handleOriginal' function.
                    this.showRow(rowInfo.original);
                    if (handleOriginal) {
                      handleOriginal();
                    }
                  },
                };
              }}
              columns={[
                {
                  Header: 'Employee',
                  accessor: 'employeeName',
                },
                {
                  Header: 'Position Title',
                  accessor: 'position',
                },
                {
                  Header: 'Current Status',
                  accessor: 'currentStatus',
                },
                {
                  id: 'currentCareerTrack',
                  Header: 'Current Career Track',
                  accessor: d => `${d.careerTrackName}` + ' Tier ' + `${d.careerTrackTier}`,
                },
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          </div>
          <br />
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
              Program: Department of Homeland Security Network
              <br />
              Program Location: Washington, D.C.
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
                <Step title="In Progress" description="Ready to schedule exam" />
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
              <br />
              Program Location: Washington, D.C.
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <h3>Security+ Certification</h3>
              <Steps progressDot current={2} direction="vertical">
                <Step title="Interest Showed" description="10/15/2019" />
                <Step title="In Progress" description="Ready to schedule exam" />
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
