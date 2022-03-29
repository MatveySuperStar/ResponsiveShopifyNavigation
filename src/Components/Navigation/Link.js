import React, {useEffect, useMemo, useRef} from 'react'
import {Icon} from '@shopify/polaris'
import style from './Link.module.css'

const Link = ({item, nav, setHistory, setWidthElements, badge}) => {

  const linkRef = useRef()
  const submenuRef = useRef()

  useEffect(()=>{ 
    setWidthElements(state => [...state, linkRef.current.clientWidth])
  },[])

  const submenuLinks = (item) => {
    return item.children.map( (subitem, index) => 
      <li key={index} className={subitem.exact ? style.activeSubLink : style.noActive}> 
        <a onClick={() => setHistory(subitem.path, item, subitem)}>
          <Icon source={subitem.icon}/> 
          {subitem.label}
          {!subitem.badge || badge(subitem.badge)}
        </a>
      </li> 
    )
  }

  const submenu = useMemo(() => {
    if(item.children) {   
      return (
        <ul ref={submenuRef} className={`${style.submenu}`}>
          {submenuLinks(item)}
        </ul>   
      )
    }
  }, [nav])

  return (
    <li ref={linkRef} className={item.exact ? style.activeLink : style.noActive} style={{display: item.visible ? 'block' : 'none'}}> 
      <a onClick={() => setHistory(item.path, item)}> 
        <div>
          <Icon source={item.icon}/> 
          {item.label}
          {!item.badge || badge(item.badge)}
        </div>
      </a>
      {submenu}
    </li>
  );
};

export default Link;