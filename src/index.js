import React from 'react'; 
import ReactDOM from 'react-dom';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import Navigation from './Components/Navigation'


ReactDOM.render(
  <AppProvider i18n={enTranslations}>
    <Navigation /> 
  </AppProvider>,
  document.getElementById('root')
);