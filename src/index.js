import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import { Layout } from './components';

// wazne laduje skrypt po zaladowaniu dom
document.addEventListener('DOMContentLoaded', () => {
  const mountPoint = document.getElementById('app');
  ReactDOM.render(<Layout />, mountPoint);
});
