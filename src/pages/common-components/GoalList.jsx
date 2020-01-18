import React from 'react';
import { Card, Button, Icon } from 'antd';

export default props => {
  const { list, showDrawer } = props;
  return (
    <Card
      bordered={false}
      headStyle={{
        textAlign: 'center',
        fontSize: '30px',
        borderWidth: '0px',
      }}
      title="Goals"
    >
      {showDrawer && (
        <Button type="primary" onClick={showDrawer} size="small">
          <Icon type="plus" /> Set a Goal
        </Button>
      )}
      <br />
      <br />
      {list.map(goal => (
        <Card
          hoverable
          type="inner"
          bodyStyle={{
            color: 'black',
            fontSize: '15px',
          }}
          style={{
            backgroundColor: '#f0f2f5',
            marginBottom: '15px',
          }}
        >
          {goal}
        </Card>
      ))}
    </Card>
  );
};
