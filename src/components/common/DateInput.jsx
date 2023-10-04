import React from 'react';

const DateInput = ({ name, value, onChange }) => {
  return (
    <input
      type="date"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default DateInput;
