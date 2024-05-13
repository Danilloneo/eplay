import styled from 'styled-components'
import { Props } from '.'
import { Breakpoints, cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preta : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preta};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${Breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
export const Tittle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
