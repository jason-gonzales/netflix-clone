import React from 'react';
import {render} from 'react-dom';
import 'normalize.css';
import App from './App';
import {GlobalStyles} from './global-styles';
import reportWebVitals from './reportWebVitals';

render(<>
  <GlobalStyles />
  <App />
  </>,
  document.getElementById('root')
);


reportWebVitals();
