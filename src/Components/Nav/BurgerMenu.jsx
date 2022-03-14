import React, { useMemo, useState } from 'react';
import {Icon} from '@shopify/polaris';

const BurgerMenu = ({nav}) => {

  const [active, setActive] = useState(false);

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
        <ul className='burger-menu_submenu'>
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
      <li onClick={() => setActive(!active)}>
        <a>more ...</a>
        <ul style={{width:200}} className={`burger-menu ${active ? 'active' : ''}`}> 
          {BurgerLinks}
        </ul>
      </li>
  );
};

export default BurgerMenu;
