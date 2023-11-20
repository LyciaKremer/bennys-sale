import styled from 'styled-components'

import { breakpoints, sizes } from '../../styles/breakpoints'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  grid-template-areas:
    'nav nav nav'
    'body body body';
  margin: 40px 0 8% 0;
  scroll-snap-type: mandatory;
  scroll-behavior: smooth;
  scroll-snap-align: start;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: grid;
    overflow: scroll;
    gap: 0.95rem;
  }
`
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeaderModal = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -2rem;
  margin-right: -2rem;
  padding: 0 26px 27px 26px;
  gap: 25px;
`
export const TitleCopyCar = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
`
export const DetailsCopyCar = styled.div`
  text-align: center;
  max-width: 413.2px;
  font-size: 16px;
  margin: 0 43px 42px 43px;
`
export const BoxCopy = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 41px;
`
