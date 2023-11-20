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
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 49px 0 34px 0;
`
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
  font-size: ${props => props.theme.typography.base};
  text-transform: uppercase;
  font-weight: 400;
  &:hover {
    color: #f3221d;
    font-weight: 700;
  }
  &.selected {
    color: #f3221d;
    font-weight: 700;
  }
  &::selection {
    color: ${props => props.theme.colors.primary[500]};
  }
`
export const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 38px;
  width: 100%;
  padding: 0 0 27px 0;
  border-bottom: 1px solid #f3221d;
  margin-bottom: 39px;
  @media ${breakpoints.lessThan(sizes.large)} {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`
export const ListCars = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  width: 100%;
  gap: 20px;

  @media ${breakpoints.lessThan(sizes.desktop)} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${breakpoints.lessThan(sizes.large)} {
    justify-content: center;
    align-items: center;
  }
`
export const CardCar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 22px 20px 25px 20px;
  background-color: #2d2c2c;
  transition: all 0.2s ease-in-out;
  gap: 29px;
  max-width: 280px;
  margin-bottom: 7px;
  &:hover {
    transform: scale(1.1);
    background-color: #1f1f1f;
    border-color: ${props => props.theme.colors.gray[200]};
  }

  .image {
    min-height: 150px;
    height: 200px;
    width: 240px;
    @media ${breakpoints.lessThan(sizes.tablet)} {
      min-height: 100px;
    }
  }
  .title {
    font-size: ${props => props.theme.typography.base};
    color: ${props => props.theme.colors.gray[0]};
    font-weight: 700;
    text-transform: uppercase;
  }
  .price {
    font-size: ${props => props.theme.typography.base};
    color: ${props => props.theme.colors.gray[100]};
    font-weight: 400;
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
export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  @media ${breakpoints.lessThan(sizes.tablet)} {
    .image {
      max-width: 300px;
      max-height: 200px;
    }
  }
`
export const SoldStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #f3221d;
  color: #000000;
  font-size: ${props => props.theme.typography.base};
  font-weight: 700;
`
export const ScrollToTopButton = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  bottom: 20px;
  right: 20px;
  background-color: #f3221d;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  z-index: 10;
  font-size: ${props => props.theme.typography.xl_2};
`
