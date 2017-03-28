import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: fixed;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #eee;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    width: 100%; 
    top: 0; 
    bottom: 0px; 
    overflow-y: auto; 
    overflow-x: hidden; 
    -webkit-overflow-scrolling: touch;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
