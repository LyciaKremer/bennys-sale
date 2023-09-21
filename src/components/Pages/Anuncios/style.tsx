import styled from 'styled-components'

import { breakpoints, sizes } from '../../../styles/breakpoints'

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas:
    'sidebar nav nav nav'
    'sidebar main main main';
  height: 100vh;
  background-color: #121212;

  @media ${breakpoints.greaterThan(sizes.desktop)} {
    grid-template-columns: 1fr 4fr;
  }
  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: flex;
    flex-direction: column;
  }
`
export const MainContainer = styled.div`
  grid-area: main;
  width: 100%;
  padding: 0 3rem 6rem 10%;
  @media ${breakpoints.greaterThan(sizes.desktop)} {
    padding:  0 2vw 2% 0;
  }
  @media ${breakpoints.lessThan(sizes.widescreen)} {
    padding: 0 1rem 20% 10%;
  }
  @media ${breakpoints.lessThan(sizes.desktop)} {
    padding: 0 1rem 20% 1rem;
  }
  @media ${breakpoints.lessThan(sizes.tablet)} {
    padding: 5vh 1rem 20% 1rem;
  }
  .image {
    position: relative;
    max-width: 1000px;
    height: 50vh;
  }
`
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 1rem;
  padding: 2vh 20vw;
  @media ${breakpoints.lessThan(sizes.tablet)} {
    padding: 5vh 4vw;
  }
`
export const FormContainer = styled.div`
  display: flex;
  gap: 1rem;
  .button {
    align-self: flex-end;
  }
  @media ${breakpoints.lessThan(sizes.desktop)} {
    flex-direction: column;
    gap: 1.25rem;
    .button {
      margin-top: 0.5rem;
      width: 100%;
    }
  }
`
