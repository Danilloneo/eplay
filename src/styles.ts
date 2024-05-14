import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#eeeeee',
  black: '#111',
  gray: '#333',
  green: '#10AC84',
  lightGray: '#a3a3a3'
}

export const Breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCSS = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizinh: border-box;
  font-family: Roboto, Sans-serif;
  list-style: none;
 }

 body {
  background-color: ${colors.black};
  color: ${colors.white};
  padding-top: 40px;

  .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media(max-width: ${Breakpoints.desktop}){
    max-width: 80%;
  }
  }
}
`
