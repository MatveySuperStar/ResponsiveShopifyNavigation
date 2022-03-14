import React, {useState, useCallback, useRef, useEffect, useMemo} from 'react';
import {Card} from '@shopify/polaris';
import {data} from './data';
import {useElementWidth} from './useElementWidth';
import LinkNav from './LinkNav';
import './Nav.css'
import BurgerMenu from './BurgerMenu';
import isEqual from './functions';

const Nav = () => {
  const [nav, setNav] = useState(data)
  const [widthElements, setWidthElements] = useState([])
  const leftNav = useRef()
  const rightNav = useRef()
  const [wrapperNavbar, wrapperWidth] = useElementWidth()
  const [dataLength, setDataLenght] = useState(data.length)

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

  const Link = useCallback( position => {
    return nav.map( (item, index) => {
      if( item.position === position ) {
        return <LinkNav key={index} item={item} setWidthElements={setWidthElements}/> 
      }
    })
  }, nav)

  const Burger = useMemo(() => {
    if(nav.length != dataLength) {
      return <BurgerMenu  nav={nav} /> 
    }
  }, nav)

  return (
    <Card>
      <nav ref={wrapperNavbar}  className='navbar' >
        <ul ref={leftNav} className='navbar-nav left'>
          {Link('left')}
        </ul>
        <div className='wrapper-nav-right'>      
          <ul ref={rightNav}  className='navbar-nav right'>
            {Link('right')}
            {Burger}
          </ul>
        </div>
      </nav>
    </Card>
  );
}

export default Nav