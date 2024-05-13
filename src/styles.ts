import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eeeeee',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#a3a3a3'
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
  background-color: ${cores.preta};
  color: ${cores.branca};
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
