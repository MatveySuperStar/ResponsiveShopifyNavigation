import React from 'react'
import style from './CustomBadge.module.css'

const CustomBadge = ({children}) => {

  return (
    <div className={style.customBadge}>
      {children}
    </div>
  );
};

export default CustomBadge;