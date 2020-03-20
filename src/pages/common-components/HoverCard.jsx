import React from 'react';

export default props => {
  return (
    <div class="card">
      <div class="additional">
        <div class="user-card">
          <div class="level center">
            <div>
              Level 13
            </div>
            <div>
              5,312 Points
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  )
}