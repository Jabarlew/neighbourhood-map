import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components';

// wazne
document.addEventListener('DOMContentLoaded', () => {
  const mountPoint = document.getElementById('app');
  ReactDOM.render(<Layout />, mountPoint);
});
