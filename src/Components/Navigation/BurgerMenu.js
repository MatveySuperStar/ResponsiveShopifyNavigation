import React, {useMemo} from 'react';
import {Icon} from '@shopify/polaris';
import { useHistory } from 'react-router';
import style from './BurgerMenu.module.css'

const BurgerMenu = ({nav}) => {
  
  const history = useHistory()

  function setHistory(e, path) {
    e.stopPropagation()
    history.push(path)
  }

  const burgerSubmenuLinks = (item) => {
    return (
      item.children.map( (subitem, index) => {
        return (
          <li key={index} onClick={(e) => setHistory(e, subitem.path)}> 
            <a>
              <Icon source={subitem.icon}/><span>{subitem.label}</span>
            </a>
          </li>
        )  
      })
    )  
  }

  const burgerSubmenu = (item) => {
    if(item.children) {
      return ( 
        <ul className={style.submenu}>
          {burgerSubmenuLinks(item)}
        </ul>
      )
    }    
  } 

  const burgerLinks = useMemo(() => {
    return nav.map( (item, index) =>  {
      if(!item.visible) { 
        return (
          <li key={index} onClick={(e) => setHistory(e, item.path)}> 
            <a> 
              <Icon source={item.icon}/> <span>{item.label}</span>
            </a>
            {burgerSubmenu(item)}
          </li>
        )
      }
    })
  }, [nav])

  return (
      <li>
        <a>more ...</a>
        <ul className={`${style.burgerMenu}`}> 
          {burgerLinks}
        </ul>
      </li>
  );
};

export default BurgerMenu;
