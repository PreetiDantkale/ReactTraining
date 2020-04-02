import React from 'react';

const LinkComponent = (props) => {
  const {href, value} = props;
  return(
    <a href = {href}>{value}
    </a>
  )
}

export default LinkComponent;
