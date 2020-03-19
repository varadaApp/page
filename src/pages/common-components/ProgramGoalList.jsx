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
        <Link to="">
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
            Increase the Program Staffing by 10% in 2020!
          </Card>
        </Link>
        <Link to="">
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
            Help each employee complete at least one certification in 2020!
          </Card>
        </Link>
      </div>
    </div>
  );
};
