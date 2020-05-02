import { createGlobalStyle } from 'styled-components/macro';

import typography from './typography';
import card from './card';
import profile from './profile';
import gridList from './gridList';
import appHeader from './appHeader';
import appLogo from './appLogo';

const GlobalStyles = createGlobalStyle`
  :root {
    /* DEFINITIONS */
    /* colors */
    --color-purple: rgb(144 20 128);
    --color-red: rgb(255 0 0);
    --color-orange: rgb(255 126 2);
    --color-yellow: rgb(255 229 0);
    --color-green: rgb(0 170 0);
    --color-light-blue: rgb(0 144 255);
    --color-dark-blue: rgb(0 74 208);
    --color-light-gray: rgb(250 250 250);
    --color-dark-gray: rgb(16 32 42);
    --color-white: rgb(255 255 255);
    --color-black: rgb(11 18 22);

    /* sizes */
    --size-base: 16;
    --line-height: 1.5;
    
    --scale-base: calc(var(--size-base) * 1px);
    --scale-rhythm: calc(var(--scale-base) * var(--line-height));
    --scale-factor: .48;

    /* families */
    --font-family-base: 'Lato', sans-serif;

    /* weights */
    --weight-normal: 300;
    --weight-bold: 700;

    /* shadows */
    --shadow-distance-default: calc(5 / var(--size-base) * 1rem);
    --shadow-blur-default: calc(var(--shadow-distance-default) * 2);
    --shadow-default: 0 var(--shadow-distance-default) var(--shadow-blur-default) rgba(0, 0, 0, .2);

    /* COMPONENTS */
    ${typography}
    ${card}
    ${profile}
    ${gridList}
    /* APP components */
    ${appHeader}
    ${appLogo}
  }

  :root {
    --background-color: var(--color-light-gray);
    --foreground-color: var(--color-white);
    --text-color: var(--color-black);
  }

  :root.dark {
    --background-color: var(--color-black);
    --foreground-color: var(--color-dark-gray);
    --text-color: var(--color-white);
  }

  *, 
  *::before,
  *::after {
    margin: 0;
    box-sizing: border-box;
    /** 
     * use font scale vertical rhythm 
     * define the css variables inside your css selector
     * to automatically scale font-size and line-height 
     * using vertical rhythm
     *
     * --font-increase: scale;
     * --rhythm-increase: scale;
     */
    font-size: calc(var(--scale-base) + (var(--scale-base) * var(--scale-factor) * var(--font-increase, 0)));
    line-height: calc(var(--scale-rhythm) + (var(--scale-rhythm) * var(--rhythm-increase, 0)));
  }

  body {
    background-color: var(--background-color);
    font-family: var(--font-family-base);
    color: var(--text-color);
    transition: background-color 200ms ease-out, 
                          color 200ms ease-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;
