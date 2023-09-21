import styled from 'styled-components'

import { breakpoints, sizes } from '../../styles/breakpoints'

export const Box = styled.div`
  border-radius: 0.438rem;
  width: 100vw;
`
export const BodyCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.688rem;
  max-height: 70vh;
  padding: 15px 14px 15px 14px;

  /* SCROLL */
  overflow: hidden;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    margin: 15px 0;
    background-color: ${({ theme }) => theme.colors.gray[200]};
    border-radius: 6.25rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray[900]};
    border-radius: 10px;
    background-clip: padding-box;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.gray[500]};
  }
`
export const TabAnnouncements = styled.div`
  width: 100%;
  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    background-color: white;
    font-size: ${({ theme }) => theme.typography.base};
    color: ${({ theme }) => theme.colors.gray[900]};
    font-weight: 500 !important;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary[500]};
  }

  .nav-tabs .nav-link {
    background-color: white;
    border: none;
    border-radius: 0;
    color: ${({ theme }) => theme.colors.gray[900]};
    font-weight: 500 !important;
  }

  .nav-tabs .nav-link:hover {
    font-size: ${({ theme }) => theme.typography.base};
    color: ${({ theme }) => theme.colors.gray[900]};
    font-weight: 500 !important;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary[500]};
    border-radius: none;
  }
  .nav {
    flex-wrap: nowrap;
  }
  .nav-link {
    padding-left: 0;
    padding-right: 0;
  }
`
