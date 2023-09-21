import styled from 'styled-components'

import { breakpoints, sizes } from '../../../styles/breakpoints'

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #0d0d0d;

  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: flex;
    flex-direction: column;
  }
`
export const Title = styled.div`
  display: flex;
  text-align: center;
  max-width: 400px;
  font-size: ${({ theme }) => theme.typography.lg};
  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: 500 !important;
`
export const Card = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  padding: 20px 30px;
  background-color: #f2f2f277;
  color: ${({ theme }) => theme.colors.warning[400]};
  margin: 0 5vw;
  .icon {
    color: ${({ theme }) => theme.colors.warning[400]};
  }
  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: flex;
    flex-direction: column;
  }
`
