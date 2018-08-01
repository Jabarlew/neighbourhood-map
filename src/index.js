import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './app';

// wazne laduje skrypt po zaladowaniu dom
document.addEventListener('DOMContentLoaded', () => {
  const mountPoint = document.getElementById('app');
  ReactDOM.render(<App />, mountPoint);
});
