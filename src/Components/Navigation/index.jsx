import React, {useState, useCallback, useRef, useEffect, useMemo} from 'react';
import {Card} from '@shopify/polaris';
import {data} from './data';
import {useElementWidth} from '../../utils/customHuks/useElementWidth';
import Link from './Link';
import BurgerMenu from './BurgerMenu';
import isEqual from '../../utils/functions';
import style from './Navbar.module.css'

const Navigation = () => {
  const [nav, setNav] = useState(data)
  const [dataLength, setDataLenght] = useState(data?.length)
  const [activeBurgerMenu, setActiveBurgerMenu] = useState(false);
  const [widthElements, setWidthElements] = useState([])
  const leftNav = useRef()
  const rightNav = useRef()
  const [wrapperNavbar, wrapperWidth] = useElementWidth()

  useEffect(() => {    
    const navBar = leftNav.current.clientWidth + rightNav.current.clientWidth;

   if(navBar  > wrapperWidth && dataLength != 0) {
      setNav( nav.map(item => isEqual(item, nav[dataLength]) ? {...item, visible: false} : item))
      setDataLenght(dataLength - 1)
    } else if(navBar + widthElements[dataLength] < wrapperWidth && nav.length != dataLength) {
      setNav( nav.map( item => isEqual(item, nav[dataLength]) ? {...item, visible: true} : item))
      setDataLenght(dataLength + 1)
    }
  } , [wrapperWidth, nav])

  const Links = useCallback( position => {
    return nav.map( (item, index) => {
      if( item.position === position ) {
        return <Link 
          key={index} 
          item={item} 
          ActiveSubmenu={ActiveSubmenu} 
          setWidthElements={setWidthElements}/> 
      }
    })
  }, nav)

  const ActiveSubmenu = (item = null) => {
    if(item === null) {
      setActiveBurgerMenu(!activeBurgerMenu)
      setNav(nav.map(item => { return { ...item, exact: false } }))
    } else {
      if(item.children)  {
        setActiveBurgerMenu(false)
        setNav( nav.map( link => isEqual(link, item) ? {...link, exact: !link.exact} : link ))
      }
    }
  }

  const Burger = useMemo(() => {
    if(nav.length != dataLength) {
      return <BurgerMenu 
        nav={nav} 
        activeBurgerMenu={activeBurgerMenu} 
        ActiveSubmenu={ActiveSubmenu}
      /> 
    }
  }, nav)

  return (
    <Card>
      <nav ref={wrapperNavbar}  className={style.navbar} >
        <ul ref={leftNav} className={style.left}>
          {Links('left')}
        </ul>
        <div className={style.wrapperRight}>      
          <ul ref={rightNav}  className={style.right}>
            {Links('right')}
            {Burger}
          </ul>
        </div>
      </nav>
    </Card>
  );
}

export default Navigation