import React from 'react';

export default props => {
  const style = { dispay: props.show ? 'block' : 'none' };
  return <div style={style}>{props.component}</div>;
};
