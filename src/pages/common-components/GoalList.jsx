import React from 'react';
import { Card, Button, Icon } from 'antd';
import Link from 'umi/link';

export default props => {
  const { list, showDrawer } = props;
  return (
    <div>
      {/* {showDrawer && (
        <Button type="primary" onClick={showDrawer} size="small">
          <Icon type="plus" /> Set a Goal
        </Button>
      )} */}
      <div style={{ marginTop: 20 }}>
        {/* {list.map(goal => (
          <Card
            hoverable
            type="inner"
            bodyStyle={{
              color: 'black',
              fontSize: '13px',
            }}
            style={{
              backgroundColor: '#f0f2f5',
            }}
          >
            {goal}
          </Card>
        ))} */}
        <Link to="/employee/manage">
          <Card
            hoverable
            type="inner"
            bodyStyle={{
              color: 'black',
              fontSize: '13px',
            }}
            style={{
              backgroundColor: '#f0f2f5',
            }}
          >
            Prepare for and schedule VMWare Certification exam (Interest Showed).
          </Card>
        </Link>
        <Link to="/employee/manage">
          <Card
            hoverable
            type="inner"
            bodyStyle={{
              color: 'black',
              fontSize: '13px',
            }}
            style={{
              backgroundColor: '#f0f2f5',
            }}
          >
            Enroll in Systems Engineer Level 2 Training Class (Interest Showed).
          </Card>
        </Link>
        <Link to="/employee/manage">
          <Card
            hoverable
            type="inner"
            bodyStyle={{
              color: 'black',
              fontSize: '13px',
            }}
            style={{
              backgroundColor: '#f0f2f5',
            }}
          >
            Begin System Admin Level 3 Training Course (Training Scheduled).
          </Card>
        </Link>
        <Link to="/employee/manage">
          <Card
            hoverable
            type="inner"
            bodyStyle={{
              color: 'black',
              fontSize: '13px',
            }}
            style={{
              backgroundColor: '#f0f2f5',
            }}
          >
            Complete Windows Server Admin Level 3 Training (Currently in Progress).
          </Card>
        </Link>
      </div>
    </div>
  );
};
