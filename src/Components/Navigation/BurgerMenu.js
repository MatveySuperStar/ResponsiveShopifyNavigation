import React, {useMemo} from 'react';
import {Icon} from '@shopify/polaris';
import style from './BurgerMenu.module.css'

const BurgerMenu = ({nav, setHistory, badge}) => {

  const burgerSubmenuLinks = (item) => {
    return (
      item.children.map( (subitem, index) => {
        return (
          <li key={index} className={subitem.exact ? style.activeBurgerSubLink : style.noActive}> 
            <a onClick={() => setHistory(subitem.path, item, subitem)} >
              <Icon source={subitem.icon}/>
              {subitem.label}
              {!subitem.badge || badge(subitem.badge)}
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
          <li key={index} className={item.exact ? style.activeBurgerLink : style.noActive}> 
            <div>
              <a onClick={() => setHistory(item.path, item)}> 
                <Icon source={item.icon}/> 
                {item.label}
                {!item.badge || badge(item.badge)} 
              </a>
            </div>  
            {burgerSubmenu(item)}
          </li>
        )
      }
    })
  }, [nav])

  return (
      <li className={nav.find( link => !link.visible && link.exact) ? style.activeLink : style.noActive}>
          <a>
            <div>more ...</div>
          </a>
        <ul className={`${style.burgerMenu}`}> 
          {burgerLinks}
        </ul>
      </li>
  );
};

export default BurgerMenu;
