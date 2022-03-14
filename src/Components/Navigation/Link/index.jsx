import React, {useEffect, useMemo, useRef} from 'react'
import {Icon} from '@shopify/polaris'
import style from './Link.module.css'

const Link = ({item, ActiveSubmenu, setWidthElements}) => {
  
  const width = useRef()

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
        <ul className={`${style.submenu} ${item.exact ? style.activeSubmenu : style.noActiveSubmenu}`}>
          {SubmenuLinks(item)}
        </ul>   
      )
    }
  }, [item.exact])

  return (
    <li ref={width} className={item.exact ? style.activeLink : ''} style={{display: item.visible ? 'block' : 'none'}} 
    onClick={() => ActiveSubmenu(item)}> 
      <a> <Icon source={item.icon}/> {item.label}</a>
      {Submenu}
    </li>
  );
};

export default Link;