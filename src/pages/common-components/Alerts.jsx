import React from 'react';
import { Typography, Card } from 'antd';
import Link from 'umi/link';

const { Text } = Typography;
export default props => {
  const { list } = props;
  return (
    <Card
      bordered={false}
      headStyle={{
        textAlign: 'center',
        fontSize: '28px',
        borderWidth: '0px',
      }}
      title="Alerts"
    >
      <Link to="/employee/positionSearch">
        <Card
          hoverable
          type="inner"
          headStyle={{
            borderWidth: '0px',
            backgroundColor: '#fef4d2',
            marginBottom: '-20px',
          }}
          style={{
            backgroundColor: '#fef4d2',
            margin: '15px',
          }}
          bodyStyle={{
            borderWidth: '0px',
            color: 'black',
            fontSize: '13px',
          }}
        >
          There are new job openings for your desired career track...
        </Card>
      </Link>
      <Link to="/employee/growth/trainings">
        <Card
          hoverable
          type="inner"
          headStyle={{
            borderWidth: '0px',
            backgroundColor: '#fef4d2',
            marginBottom: '-20px',
          }}
          style={{
            backgroundColor: '#fef4d2',
            margin: '15px',
          }}
          bodyStyle={{
            borderWidth: '0px',
            color: 'black',
            fontSize: '13px',
          }}
        >
          Reminder: Have you signed up for your training yet?
        </Card>
      </Link>
    </Card>
  );
};
