import styled from 'styled-components'

import { breakpoints, sizes } from '../../../styles/breakpoints'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  button {
    color: ${props => props.theme.colors.gray[100]};
    :hover {
      color: ${props => props.theme.colors.gray[900]};
    }
  }
`
export const MainContainer = styled.div`
  width: 100%;
  color: white;
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`
export const Brand = styled.div`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.lg};
  letter-spacing: 0.3rem;
  color: ${props => props.theme.colors.gray[100]};
`
export const Model = styled.div`
  text-transform: uppercase;
  font-size: 100px;
  letter-spacing: 0.6rem;
  color: ${props => props.theme.colors.gray[100]};
  font-weight: 500 !important;
`
export const Header = styled.div``
export const Body = styled.div`
  img {
    max-width: 500px;
  }
`
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 10%;
  background-color: ${props => props.theme.colors.gray[900]};
  margin-top: 10%;
  button {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: 500 !important;
    .fire {
      animation: wiggle 0.66s ease-in-out infinite;
    }
    @keyframes wiggle {
      0% {
        transform: rotate(-5deg);
      }

      50% {
        transform: rotate(5deg);
      }

      100% {
        transform: rotate(-5deg);
      }
    }
  }
`
export const Price = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 32px;
  color: ${props => props.theme.colors.gray[100]};
  letter-spacing: 0.3rem;
  font-weight: 600;
`
export const ButtonCategorie = styled.div`
  color: ${props => props.theme.colors.gray[0]};
  cursor: pointer;
  padding: 0 10px;
  font-size: ${props => props.theme.typography.md};
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-weight: 500;
  &:hover {
    color: ${props => props.theme.colors.primary[500]};
  }
  &::selection {
    color: ${props => props.theme.colors.primary[500]};
  }
`
export const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid ${props => props.theme.colors.gray[900]};
  @media ${breakpoints.lessThan(sizes.desktop)} {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
  }
`
export const ListCars = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-content: space-between;
  padding-top: 40px;
  @media ${breakpoints.lessThan(sizes.desktop)} {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 50px;
  }
`
export const CardCar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 18px;
  border-radius: 3px;
  height: 280px;
  border: 1px solid ${props => props.theme.colors.gray[900]};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    background-color: #1f1f1f;
    border-color: ${props => props.theme.colors.gray[200]};
  }

  .image {
    border-radius: 3px;
    min-height: 150px;
    width: 100%;
    @media ${breakpoints.lessThan(sizes.tablet)} {
      min-height: 100px;
    }
  }
  .title {
    font-size: ${props => props.theme.typography.md};
    color: ${props => props.theme.colors.gray[700]};
    font-weight: 500;
  }
  .price {
    font-size: ${props => props.theme.typography.lg};
    color: ${props => props.theme.colors.gray[100]};
    font-weight: 600;
  }
`
export const NoResults = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.theme.colors.gray[0]};
  font-size: ${props => props.theme.typography.xl_2};
  margin-top: 50px;
`
