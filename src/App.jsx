import React from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Frame} from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import Nav from './Components/Nav'
import LeftNav from './Components/LeftNav';



const App = () => {
  

  return (
    <AppProvider i18n={enTranslations}>
      <Frame 
        navigation={<LeftNav />}
      >
    <Nav /> 
    </Frame>
    </AppProvider>
  );
};

export default App;