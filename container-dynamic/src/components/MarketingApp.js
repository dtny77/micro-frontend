import React, { useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { init, loadRemote } from '@module-federation/runtime';

init({
  name: 'container-dynamic',
  remotes: [
    {
      name: 'marketing',
      entry: 'http://localhost:8081/remoteEntry.js?timestamp=123456',
    }
  ],
  plugins: [
    {
      name: 'custom-plugin',
      beforeInit(args) {
        return args;
      },
      init(args) {
        console.log('init: ', args);
        return args;
      },
      beforeLoadShare(args) {
        console.log('beforeLoadShare: ', args);
        return args;
      },
    },
  ],
  shared: {
    react: {
      scope: 'default',
      shareConfig: {
        singleton: true,
        requiredVersion: '^17.0.1',
      },
    },
    'react-dom': {
      scope: 'default',
      shareConfig: {
        singleton: true,
        requiredVersion: '^17.0.1',
      },
    },
  },
});

export default () => {
    const ref = useRef(null);

    useEffect(() => {    
        const loadRemoteAndRender = async () => {
            const remoteScopeAndModule = 'marketing/MarketingApp';
          try {
            const remote = await loadRemote(remoteScopeAndModule);
            remote.mount(ref.current);
          } catch (error) {
            console.error(`Error loading remote module ${remoteScopeAndModule}:`, error);
          }
        };
    
        loadRemoteAndRender();
      }, []);

    return <div ref={ref} />
}