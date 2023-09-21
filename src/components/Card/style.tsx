import styled from 'styled-components'

import { breakpoints, sizes } from '../../styles/breakpoints'

export const TabCard = styled.div`
  display: flex;
  gap: 3.125rem;
  padding: 1rem 1.063rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 7px;
  cursor: pointer;
  transition: ${({ theme }) => theme.effects.transition};
  opacity: 0;
  animation: fadeIn 0.4s forwards;

  &:hover {
    box-shadow: ${({ theme }) => theme.effects.boxShadow};
  }

  .title {
    font-size: ${({ theme }) => theme.typography.sm};
    color: ${({ theme }) => theme.colors.gray[500]};
    width: 100%;
  }
  .subtitle {
    font-size: ${({ theme }) => theme.typography.base};
    color: ${({ theme }) => theme.colors.gray[800]};
    font-weight: 500 !important;
    width: 100%;
  }
  .icon {
    font-size: ${({ theme }) => theme.typography.base};
    color: ${({ theme }) => theme.colors.gray[500]};
    display: flex;
    align-self: flex-end;
  }
  .column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
  }
`
export const ButtonCopy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.colors.gray[700]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 10px;
`
