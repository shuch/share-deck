
import React from 'react';

export default () => (
  <div>
    <h2>service worker scope</h2>
    <h4>navigator.serviceWorker.register('./a/b/sw.js'});</h4>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: 20 }}>
      <ul style={{ textAlign: 'left' }}>
        <li>/a/b/</li>
        <li>/a/b/c</li>
        <li>/a/b/c/d</li>
      </ul>
      <ul style={{ textAlign: 'left' }}>
        <li>/a/</li>
        <li>/a/f</li>
        <li>/a/e</li>
      </ul>
    </div>
  </div>
)



