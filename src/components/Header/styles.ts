import styled from 'styled-components'
import { Breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${Breakpoints.tablet}) {
    display: none;
  }

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;
`
export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
`
