import React from 'react';
import { renderToString } from 'react-dom/server';
import CountUp from './CountUp';

const ssr = () => (`
  <html>
    <head>
      <title>CountUp</title>
      <meta charset="utf-8"/>
    </head>
    <body>
      <div id="app">
        <p>${renderToString(<CountUp />)}</p>
      </div>
    </body>
  </html>
`);

export default ssr;
