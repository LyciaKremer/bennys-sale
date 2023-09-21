import styled from 'styled-components'

import { breakpoints, sizes } from '../../../styles/breakpoints'

// HEADER - Internal

export const HeaderInternal = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  z-index: 10;
  background-color: #0d0d0d;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[900]};
  position: relative;
  padding: 15px 10vw;

  .nav {
    display: flex;
    align-items: center;
    gap: 21px;
  }
`

export const Nav = styled.nav`
  display: block;
`

export const LinkUl = styled.a`
  cursor: pointer;
  position: relative;
  transition: ${({ theme }) => theme.effects.transition};
  color: ${({ theme }) => theme.colors.gray[100]};

  &:hover {
    color: ${({ theme }) => theme.colors.primary[800]};
  }
  @media ${breakpoints.greaterThan(sizes.desktop)} {
    &:hover {
      :after {
        content: '';
        position: absolute;
        top: 55px;
        left: 0;
        width: 100%;
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary[500]};
      }
    }
  }
`

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  gap: 1.1vw;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: none;
  }
`

export const Li = styled.li`
  display: block;

  a {
    display: block;
    @media ${breakpoints.lessThan(sizes.widescreen)} {
      font-size: ${({ theme }) => theme.typography.xs};
    }
    &:hover {
      color: ${({ theme }) => theme.colors.gray[800]};
    }
    &.active {
      border-bottom: 0.13rem solid ${({ theme }) => theme.colors.primary[500]};
      span {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: center;
  justify-content: space-between;
  color: white;

  @media ${breakpoints.lessThan(sizes.desktop)} {
    gap: 0;
  }
  @media ${breakpoints.lessThan(sizes.tablet)} {
    flex-direction: row-reverse;
  }

  button {
    background: none;
    border: none;
  }

  .flag {
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
    align-items: center;
    border-radius: 0.5rem;
    color: white;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.secondary[500]};
  }
  .notification {
    cursor: pointer;
    max-width: fit-content;
    @media ${breakpoints.greaterThan(sizes.desktop)} {
      margin-right: 0.75rem;
    }
  }
  .user {
    cursor: pointer;
    display: flex;
    gap: 0.9rem;
    .user-name {
      color: ${({ theme }) => theme.colors.gray[800]};
    }
    @media ${breakpoints.lessThan(sizes.desktop)} {
      display: none;
    }
  }
  .hr {
    height: 1.1rem;
    width: 1px;
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.gray[500]};

    @media ${breakpoints.lessThan(sizes.desktop)} {
      display: none;
    }
  }
  .logout {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary[500]};

    @media ${breakpoints.lessThan(sizes.desktop)} {
      display: none;
    }
  }
  .logout-title {
    margin-right: 0.6rem;
  }
  .menuApps {
    cursor: pointer;
    display: flex;
    align-items: center;
    @media ${breakpoints.greaterThan(sizes.desktop)} {
      display: none;
    }
  }
`
export const MenuMobile = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  top: 82px;
  height: 110vh;
  width: 100vw;
  z-index: 1;
  background-color: #0d0d0d;

  @media ${breakpoints.greaterThan(sizes.desktop)} {
    display: none;
  }

  .img {
    cursor: pointer;
    height: 1.5rem;
    min-width: 1.5rem;
    align-items: center;
    border-radius: 0.438rem;
    color: white;
    padding-left: 0.5rem;
    background-color: ${({ theme }) => theme.colors.secondary[500]};
  }
  .user {
    cursor: pointer;
    display: flex;
    gap: 0.9rem;
    @media ${breakpoints.lessThan(sizes.desktop)} {
      display: flex;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: ${({ theme }) => theme.typography.lg};
    padding: 0;
    max-width: fit-content;
  }
  .logout {
    color: ${({ theme }) => theme.colors.primary[500]};
    display: flex;
    gap: 5px;
    align-items: center;
  }
`
// HEADER - DASHBOARD

export const HeaderDashboard = styled.header`
  display: none;
  align-items: center;
  justify-content: space-between;
  height: auto;
  z-index: 10;
  top: 0;
  position: fixed;
  grid-area: nav;
  background-color: #0d0d0d;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[900]};
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 1.875rem;
  margin-top: -1px;
  width: 100%;

  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: flex;
    position: fixed;
    top: 0;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    .iconCategory {
      margin-left: 0.875rem;
    }
  }
`
export const MenuDashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;

  @media ${breakpoints.lessThan(sizes.desktop)} {
    gap: 0;
  }

  .notification {
    cursor: pointer;
    max-width: fit-content;
    @media ${breakpoints.greaterThan(sizes.desktop)} {
      margin-right: 12px;
    }
  }
`
export const TitleMenu = styled.span`
  margin: 1rem 0;
  text-transform: uppercase;
  letter-spacing: 1.26px;
  color: ${props => props.theme.colors.gray[500]};
  font-weight: 700 !important;
  font-size: ${({ theme }) => theme.typography.xs_2};
`
export const ItemMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  padding: 20px 8vw;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[900]};
`
export const ListLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 6.25rem;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  margin: 10px 0 0 0;
  list-style: none;
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.75rem;
  width: max-content;
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.typography.md};

  .icon {
    display: flex;
    color: ${({ theme }) => theme.colors.gray[100]};
    font-size: 1.25rem;
    cursor: pointer;
  }
`
export const ItemTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.base};
  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: 500 !important;
  cursor: pointer;
`
export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 26.938rem;
`
export const Logout = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: ${({ theme }) => theme.typography.base};
  color: ${({ theme }) => theme.colors.primary[500]};
  font-weight: 500 !important;
`
export const ListLinkFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 6.25rem;
  max-height: 1.25rem;
  flex-direction: column;
  gap: 2.5rem;
  padding: 0;
  margin: 0.625rem 0 0 0;
`
