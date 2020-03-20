import React from 'react';

export default props => {
  return (
    <div class="card">
      <div class="additional">
        <div class="user-card">
          <div class="level center">
            <div>
              {props.label}
            </div>
            <div>
              {props.value}
            </div>
          </div>
          <div className="hover-icon-container">
            {props.icon}
          </div>
        </div>
        <div class="more-info">
        </div>
      </div>
      <div class="general">
          {props.items.map((item,index) => 
            <div className="general-item" key={`${props.label}.${index}`}>
              {item}
            </div>
            )
          }
      </div>
    </div>
  )
}