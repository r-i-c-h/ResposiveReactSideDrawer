import React from 'react';
import '../styles/SiteCover.css';

const SiteCover = ({clickAction, show}) => {
  const coverClasses = show ? 'site-cover open' : 'site-cover';
  return (
    <div className={coverClasses} onClick={clickAction} />
  );
}

export default SiteCover;
