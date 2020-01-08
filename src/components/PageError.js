import React from 'react';

import './styles/PageError.css';

function PageError (props) {
  return (
    <div className="PageError">
      <span role="img" aria-label="erro icon">❌</span>
        { props.error.message }
      <span role="img" aria-label="erro icon">😱</span>
    </div>
  )
}

export default PageError;
