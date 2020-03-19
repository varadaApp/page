import React from 'react';
import { Typography, Card } from 'antd';
import Link from 'umi/link';

const { Text } = Typography;
export default props => {
  const { list, title } = props;
  return (
    <Card
      bordered={false}
      headStyle={{
        textAlign: 'center',
        fontSize: '30px',
        borderWidth: '0px',
      }}
      title={title || 'Things to Do'}
    >
      {list.map(thing => (
        <Link to={thing.to}>
          <Card
            title={
              thing.title ? (
                <Text
                  style={{
                    fontSize: '18px',
                    color: 'black',
                  }}
                >
                  {thing.title}
                </Text>
              ) : null
            }
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
              fontSize: '15px',
            }}
          >
            {thing.content}
          </Card>
        </Link>
      ))}
    </Card>
  );
};
