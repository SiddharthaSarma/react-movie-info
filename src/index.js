import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import messages from './i-18n';
import flattenMessages from './utils';

const locale =
  ( navigator.languages && navigator.languages[0] )
  || navigator.language
  || navigator.userLanguage
  || 'en-US';

addLocaleData( [...en, ...es, ...fr] );

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages( messages[locale] )}>
    <App />
  </IntlProvider>,
  document.getElementById( 'root' ) );
registerServiceWorker();
