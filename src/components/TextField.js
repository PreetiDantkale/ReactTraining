import React from 'react'

const TextField = (props) => {
  const { placeholder, type, name, onChange, value } = props;
    return (
        <input type = {type}
        name = {name}
        placeholder = {placeholder}
        onChange = {onChange}
        value = {value}
        />
    )
};
export default TextField;
