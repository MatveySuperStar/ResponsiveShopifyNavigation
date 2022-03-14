import React, { useEffect, useMemo, useRef, useState } from 'react'
import {Icon} from '@shopify/polaris'
import style from './Link.module.css'

const Link = ({item, setWidthElements}) => {
  
  const width = useRef()
  const [active, setActive] = useState(false);

  useEffect(()=>{ 
    setWidthElements(state => [...state, width.current.clientWidth])
  },[])
  
  const SubmenuLinks = (item) => {
    return item.children.map( (subitem, index) => 
      <li key={index} onClick={(e) => e.stopPropagation()}> 
        <a><Icon source={subitem.icon}/> {subitem.label}</a>
      </li> 
    )
  }

  const Submenu = useMemo(() => {
    if(item.children) {   
      return (
        <ul className={`${style.submenu} ${active ? style.active : style.noActive}`}>
          {SubmenuLinks(item)}
        </ul>   
      )
    }
  }, [active])

  return (
    <li ref={width} style={{display: item.visible ? 'block' : 'none'}} onClick={ item.children ? () => setActive(!active) : null}> 
      <a> <Icon source={item.icon}/> {item.label}</a>
        {Submenu}
      </li>

  );
};

export default Link;