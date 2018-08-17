import React from 'react';
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import './index.scss';
import App from './app';

global.googleError = function () {
  alert("Maps won't load");
}


OfflinePluginRuntime.install();

// wazne laduje skrypt po zaladowaniu dom
document.addEventListener('DOMContentLoaded', () => {
  const mountPoint = document.getElementById('app');
  ReactDOM.render(<App />, mountPoint);
});
