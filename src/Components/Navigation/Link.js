import React, {useEffect, useMemo, useRef} from 'react'
import {Icon} from '@shopify/polaris'
import style from './Link.module.css'
import { useHistory } from 'react-router';

const Link = ({item, setWidthElements, setHistory}) => {
  
  const linkRef = useRef()
  const submenuRef = useRef()
  const history = useHistory()

  function setHistory(e, path) {
    e.stopPropagation();
    history.push(path)
  }

  useEffect(()=>{ 
    setWidthElements(state => [...state, linkRef.current.clientWidth])
  },[])
  
  const submenuLinks = (item) => {
    return item.children.map( (subitem, index) => 
      <li key={index} onClick={(e) =>  setHistory(e, subitem.path)}> 
        <a>
          <Icon source={subitem.icon}/> <span>{subitem.label}</span>
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
  }, [])

  return (
    <li ref={linkRef} style={{display: item.visible ? 'block' : 'none'}}  
      onClick={(e) => setHistory(e, item.path)}> 
      <a> 
        <Icon source={item.icon}/> {item.label}
      </a>
      {submenu}
    </li>
  );
};

export default Link;