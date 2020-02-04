import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { MainContextProvider } from './contexts/MainContext';

const Root: React.FC = () => (
  <MainContextProvider>
    <App />
  </MainContextProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
