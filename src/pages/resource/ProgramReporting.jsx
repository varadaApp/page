import React from 'react';
import { Card, Typography, Alert, Icon, Table } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
// import { Gauge } from 'ant-design-pro/lib/Charts';
import { Chart, Axis, Coord, Geom, Guide, Shape } from 'bizcharts';

const { Html, Arc } = Guide;
Shape.registerShape('point', 'pointer', {
  drawShape(cfg, group) {
    let point = cfg.points[0];
    point = this.parsePoint(point);
    const center = this.parsePoint({
      x: 0,
      y: 0,
    });
    group.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: point.x,
        y2: point.y - 20,
        stroke: cfg.color,
        lineWidth: 5,
        lineCap: 'round',
      },
    });
    return group.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 12,
        stroke: cfg.color,
        lineWidth: 4.5,
        fill: '#fff',
      },
    });
  },
});

const data = [{ value: 1.6 }];
const cols = {
  value: {
    min: 0,
    max: 9,
    tickInterval: 1,
    nice: false,
  },
};

class ProgramReporting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          key: '0',
          month: 'January',
          openingBalance: '27',
          employeesJoined: '3',
          employeesLeft: '0',
          closingBalance: '30',
          attrition: '0.00%',
        },
        {
          key: '1',
          month: 'February',
          openingBalance: '30',
          employeesJoined: '1',
          employeesLeft: '5',
          closingBalance: '26',
          attrition: '19.23%',
        },
        {
          key: '2',
          month: 'March',
          openingBalance: '26',
          employeesJoined: '4',
          employeesLeft: '2',
          closingBalance: '28',
          attrition: '7.14%',
        },
        {
          key: '3',
          month: 'April',
          openingBalance: '28',
          employeesJoined: '1',
          employeesLeft: '0',
          closingBalance: '29',
          attrition: '0.00%',
        },
        {
          key: '4',
          month: 'May',
          openingBalance: '29',
          employeesJoined: '0',
          employeesLeft: '6',
          closingBalance: '23',
          attrition: '26.09%',
        },
        {
          key: '5',
          month: 'June',
          openingBalance: '23',
          employeesJoined: '12',
          employeesLeft: '3',
          closingBalance: '32',
          attrition: '9.38%',
        },
        {
          key: '6',
          month: 'July',
          openingBalance: '32',
          employeesJoined: '1',
          employeesLeft: '2',
          closingBalance: '31',
          attrition: '6.45%',
        },
        {
          key: '7',
          month: 'August',
          openingBalance: '31',
          employeesJoined: '1',
          employeesLeft: '0',
          closingBalance: '32',
          attrition: '0.00%',
        },
        {
          key: '8',
          month: 'September',
          openingBalance: '32',
          employeesJoined: '1',
          employeesLeft: '2',
          closingBalance: '31',
          attrition: '6.45%',
        },
        {
          key: '9',
          month: 'October',
          openingBalance: '31',
          employeesJoined: '1',
          employeesLeft: '1',
          closingBalance: '31',
          attrition: '3.23%',
        },
        {
          key: '10',
          month: 'November',
          openingBalance: '31',
          employeesJoined: '1',
          employeesLeft: '1',
          closingBalance: '31',
          attrition: '3.23%',
        },
        {
          key: '11',
          month: 'December',
          openingBalance: '31',
          employeesJoined: '1',
          employeesLeft: '2',
          closingBalance: '30',
          attrition: '6.67%',
        },
      ],
      count: 12,
    };
    this.columns = [
      {
        title: 'Month',
        dataIndex: 'month',
      },
      {
        title: 'Opening Balance',
        dataIndex: 'openingBalance',
      },
      {
        title: 'Employees Joined',
        dataIndex: 'employeesJoined',
      },
      {
        title: 'Employees Left',
        dataIndex: 'employeesLeft',
      },
      {
        title: 'Closing Balance',
        dataIndex: 'closingBalance',
      },
      {
        title: 'Attrition %',
        dataIndex: 'attrition',
      },
    ];
  }
  render() {
    const { dataSource } = this.state;
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

    return (
      <PageHeaderWrapper>
        <Card>
          {/* <Gauge title="January 2020 Attrition %" height={200} percent={3} /> */}
          <Chart
            height={window.innerHeight * 0.5}
            data={data}
            scale={cols}
            padding={[0, 0, 50, 0]}
            forceFit
          >
            <Coord
              type="polar"
              startAngle={(-9 / 8) * Math.PI}
              endAngle={(1 / 8) * Math.PI}
              radius={0.75}
            />
            <Axis
              name="value"
              zIndex={2}
              line={null}
              label={{
                offset: -16,
                textStyle: {
                  fontSize: 18,
                  textAlign: 'center',
                  textBaseline: 'middle',
                },
              }}
              subTickCount={4}
              subTickLine={{
                length: -8,
                stroke: '#fff',
                strokeOpacity: 1,
              }}
              tickLine={{
                length: -18,
                stroke: '#fff',
                strokeOpacity: 1,
              }}
            />
            <Axis name="1" visible={false} />
            <Guide>
              <Arc
                zIndex={0}
                start={[0, 0.965]}
                end={[9, 0.965]}
                style={{
                  stroke: '#CBCBCB',
                  lineWidth: 18,
                }}
              />
              <Arc
                zIndex={1}
                start={[0, 0.965]}
                end={[data[0].value, 0.965]}
                style={{
                  stroke: '#722ED1',
                  lineWidth: 18,
                }}
              />
              <Html
                position={['50%', '95%']}
                html={() =>
                  `<div style="width: 100px;text-align: center;font-size: 7px!important;"><p style="font-size: 1.75em; color: rgba(0,0,0,0.43);margin: 0;">January 2020 Atrittion %</p><p style="font-size: 3em;color: rgba(0,0,0,0.85);margin: 0;">${data[0]
                    .value * 10}%</p></div>`
                }
              />
            </Guide>
            <Geom
              type="point"
              position="value*1"
              shape="pointer"
              color="#722ED1"
              active={false}
              style={{ stroke: '#fff', lineWidth: 1 }}
            />
          </Chart>

          <h1>Monthly Attrition Report - 2019</h1>
          <Table
            style={{ width: 800 }}
            bordered
            dataSource={dataSource}
            columns={columns}
            pagination={false}
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
      </PageHeaderWrapper>
    );
  }
}
export default ProgramReporting;
