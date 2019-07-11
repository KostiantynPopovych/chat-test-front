import React from 'react';
import Arrow from '../icons/arrow';
import './styles.scss';

const Input = ({ placeholder, value, onChange }) => (
  <div className="webflow-style-input">
    <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
    <button type="submit"><Arrow /></button>
  </div>
)

export default Input;