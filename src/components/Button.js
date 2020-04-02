import React from 'react';

const Button = (props) => {
  const {value, color} = props;
  return (
    <Button color = {color}>{value}</Button>
  )
}

export default Button;
