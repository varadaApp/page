import React from 'react';
import { Typography, Card, Icon } from 'antd';
import Link from 'umi/link';

const { Text } = Typography;
export default props => {
  const { list, title, hasIcon } = props;
  const headStyle = hasIcon ? ({
    fontSize: '30px',
    borderWidth: '0px',
  }) : 
  ({
    textAlign: 'center',
    fontSize: '30px',
    borderWidth: '0px',
  });
  return (
    <Card
      bordered={false}
      headStyle={headStyle}
      title={title || 'Things to Do'}
    >
      {hasIcon ? 
        list.map(thing => (
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Icon style={{ fontSize: 35 }} type="bulb" /> 
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
                  width: hasIcon ? '60em' : 'auto',
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
          </div>
        )) : 
        list.map(thing => (
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
        ))
    }
    </Card>
  );
};
