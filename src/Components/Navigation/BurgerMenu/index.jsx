import React, {useEffect, useMemo, useState} from 'react';
import {Icon} from '@shopify/polaris';
import style from './BurgerMenu.module.css'

const BurgerMenu = ({nav, activeBurgerMenu, ActiveSubmenu, widthElements}) => {

  const [widthSubmenu, setWidthSubmenu] = useState(0);
  
  useEffect(() => {
    setWidthSubmenu(widthElements.reduce((a, b) => a > b ? a : b));
  }, [])

  const BurgerSubmenuLinks = (item) => {
    return (
      item.children.map( (subitem, index) => {
        return (
          <li key={index} > 
            <a><Icon source={subitem.icon}/> {subitem.label}</a>
          </li>
        )  
      })
    )  
  }

  const BurgerSubmenu = (item) => {
    if(item.children) {
      return ( 
        <ul className={style.submenu}>
          {BurgerSubmenuLinks(item)}
        </ul>
      )
    }    
  } 

  const BurgerLinks = useMemo(() => {
    return nav.map( (item, index) =>  {
      if(!item.visible) { 
        return (
          <li key={index} onClick={(e) => e.stopPropagation()}> 
            <a> <Icon source={item.icon}/> {item.label}</a>
              {BurgerSubmenu(item)}
          </li>
        )
      }
    })
  }, [nav])

  return (
      <li className={activeBurgerMenu ? style.activeLink : ''} onClick={() => ActiveSubmenu()} >
        <a>more ...</a>
        <ul style={{minWidth: widthSubmenu}} className={`${style.burgerMenu} ${activeBurgerMenu ? style.active : style.noActive}`}> 
          {BurgerLinks}
        </ul>
      </li>
  );
};

export default BurgerMenu;
