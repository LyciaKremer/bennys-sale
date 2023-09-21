import styled from 'styled-components'

import { breakpoints, sizes } from '../../../styles/breakpoints'

export const SiderBarBox = styled.aside`
  display: flex;
  grid-area: sidebar;
  flex-direction: column;
  position: fixed;
  width: 20vw;
  height: 101vh;
  z-index: 20;
  background-color: #0D0D0D;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[900]};

  @media ${breakpoints.greaterThan(sizes.widescreen)} {
    width: 15vw;
  }
  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: none;
  }
`
export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10% 12%;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
`
export const TitleMenu = styled.span`
  text-transform: uppercase;
  letter-spacing: 1.26px;
  color: ${props => props.theme.colors.gray[500]};
  font-weight: 700 !important;
  font-size: ${({ theme }) => theme.typography.xs_2};
`
export const ListLink = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`
export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

  .icon {
    display: flex;
    color: ${({ theme }) => theme.colors.gray[100]};
    cursor: pointer;
    font-size: ${({ theme }) => theme.typography.lg};
  }
`
export const ItemTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.md};
  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: 500 !important;
  cursor: pointer;
  width: 100%;
`
export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10% 12%;
  height: 100%;
`
export const Logout = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: ${({ theme }) => theme.typography.base};
  color: ${({ theme }) => theme.colors.primary[500]};
  font-weight: 500 !important;
`
export const FooterLogo = styled.div`
  font-size: ${({ theme }) => theme.typography.base};
  color: ${({ theme }) => theme.colors.primary[500]};
  padding: 0 2.5rem 1.875rem 2.5rem;
`
export const LogoBox = styled.div`
  padding-top: 1.2rem;
  padding-bottom: 1.438rem;
  padding-left: 1.875rem;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[900]};
`
