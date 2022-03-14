import React, {useMemo} from 'react';
import {Icon} from '@shopify/polaris';
import style from './BurgerMenu.module.css'

const BurgerMenu = ({nav, activeBurgerMenu, ActiveSubmenu}) => {

  const BurgerSubmenuLinks = (item) => {
    return (
      item.children.map( (subitem, index) => {
        <li key={index}> 
          <a><Icon source={subitem.icon}/> {subitem.label}</a>
        </li>
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
      <li onClick={() => ActiveSubmenu()}>
        <a>more ...</a>
        <ul style={{width:200}} className={`${style.burgerMenu} ${activeBurgerMenu ? style.active : style.noActive}`}> 
          {BurgerLinks}
        </ul>
      </li>
  );
};

export default BurgerMenu;
