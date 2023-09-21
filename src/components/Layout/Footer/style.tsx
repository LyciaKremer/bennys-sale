import styled from 'styled-components'

import { breakpoints, sizes } from '../../../styles/breakpoints'

export const FooterDashboard = styled.footer`
  display: inline-flex;
  position: static;
  justify-content: space-between;
  align-items: center;
  height: 4.375rem;
  background: ${props => props.theme.colors.gray[800]};
  color: white;
  bottom: 0;
  gap: 0.313rem;
  margin-top: auto;

  .company-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2vw;
    @media ${breakpoints.lessThan(sizes.desktop)} {
      flex-direction: column;
      align-items: center;
      margin-bottom: 0.5rem;
    }
  }
  .cubo {
    display: flex;
    gap: 0.5rem;
  }

  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 1.25rem;
  }
`
export const FooterLogin = styled.footer`
  position: static;
  display: flex;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  height: 4.375rem;
  background: white;
  padding: 0;
  width: auto;
  color: ${props => props.theme.colors.gray[800]};
  gap: 0.313rem;
  margin-top: 3.125rem;

  @media ${breakpoints.lessThan(sizes.biggest)} {
    width: 100%;
    justify-content: center;
  }
  @media ${breakpoints.lessThan(sizes.tablet)} {
    margin-top: 1.25rem;
  }

  .company-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2vw;
  }
  .info-visibility {
    @media ${breakpoints.lessThan(sizes.biggest)} {
      display: none;
    }
  }
  .cubo {
    color: ${props => props.theme.colors.gray[900]};
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`
