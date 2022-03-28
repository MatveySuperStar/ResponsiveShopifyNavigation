import React, {useState, useCallback, useRef, useEffect, useMemo} from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';
import {AppProvider, Card} from '@shopify/polaris';
import {data} from './data';
import {useElementWidth} from '../../utils/customHuks/useElementWidth';
import Link from './Link';
import BurgerMenu from './BurgerMenu';
import isEqual from '../../utils/functions';
import style from './Navigation.module.css'


const Navigation = () => {
  const [nav, setNav] = useState(data)
  const [dataLength, setDataLenght] = useState(data?.length)
  const [widthElements, setWidthElements] = useState([])
  const leftNav = useRef()
  const rightNav = useRef()
  const [wrapperNavbar, wrapperWidth] = useElementWidth()

  useEffect(() => {    
    const navBar = leftNav.current.clientWidth + rightNav.current.clientWidth;

   if(navBar > wrapperWidth && dataLength != 0) {
      setNav( nav.map(item => isEqual(item, nav[dataLength]) ? {...item, visible: false} : item))
      setDataLenght(dataLength - 1)
    } else if(navBar + widthElements[dataLength] < wrapperWidth && nav.length != dataLength) {
      setNav( nav.map( item => isEqual(item, nav[dataLength]) ? {...item, visible: true} : item))
      setDataLenght(dataLength + 1)
    }
  } , [wrapperWidth, nav])

  const links = useCallback( position => {
    return nav.map( (item, index) => {
      if( item.position === position ) {
        return <Link 
          key={index} 
          item={item}
          nav={nav}
          setWidthElements={setWidthElements}/> 
      }
    })
  }, nav)

  const burger = useMemo(() => {
    if(nav.length != dataLength) {

      return <BurgerMenu nav={nav} /> 
    }
  }, nav)

  return (
    <AppProvider i18n={enTranslations}>
      <Card>
        <nav ref={wrapperNavbar}  className={style.navbar} >
          <ul ref={leftNav} className={style.left}>
            {links('left')}
          </ul>
          <div className={style.wrapperRight}>      
            <ul ref={rightNav}  className={style.right}>
              {burger}
              {links('right')}
            </ul>
          </div>
        </nav>
      </Card>
    </AppProvider>
  );
}

export default Navigation