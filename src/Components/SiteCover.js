import React from 'react';
import '../styles/SiteCover.css';

const SiteCover = ({clickAction}) => (
  <div className="site-cover" onClick={clickAction} />
)

export default SiteCover;