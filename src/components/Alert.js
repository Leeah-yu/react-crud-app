import React from 'react'
import './Alert.css';

const alert = ({ type, text }) => {
  return (
    <div className={`alert alert-${type}`}>{text}</div>
  )
}

export default alert