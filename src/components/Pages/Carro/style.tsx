import styled from 'styled-components'

import { breakpoints, sizes } from '../../../styles/breakpoints'

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  gap: 30px;
  button {
    color: ${props => props.theme.colors.gray[100]};
    :hover {
      color: ${props => props.theme.colors.gray[900]};
    }
  }
  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: flex;
    flex-direction: column;
  }
`
export const MainContainer = styled.div`
  width: 100%;
  color: white;
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
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
  line-height: 70px;
  font-size: 70px;
  letter-spacing: 0.6rem;
  color: ${props => props.theme.colors.gray[100]};
  font-weight: 500 !important;
`
export const Header = styled.div`
  margin-bottom: 50px;
`
export const Body = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  img {
    width: 100%;
    border-radius: 3px;
  }
  @media ${breakpoints.lessThan(sizes.desktop)} {
    gap: 20px;
  }
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.gray[0]};
  width: 100%;
  padding: 40px 0;
  @media ${breakpoints.lessThan(sizes.desktop)} {
    padding: 20px 0 40px 0;
  }
`
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 30px 10%;
  background-color: ${props => props.theme.colors.gray[900]};
  height: 100%;
  border-radius: 3px;
  @media ${breakpoints.lessThan(sizes.desktop)} {
    margin-bottom: 50px;
  }
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
  margin-top: 50px;
  margin-bottom: 20px;
`
export const ButtonCategorie = styled.div`
  color: white;
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 3px;
  font-size: ${props => props.theme.typography.md};
  letter-spacing: 0.1rem;
  background-color: ${props => props.theme.colors.secondary[500]};
  :hover {
    background-color: ${props => props.theme.colors.secondary[900]};
  }
`
export const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ListCars = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-content: space-between;
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.colors.gray[0]};
  font-size: ${props => props.theme.typography.lg};
  gap: 10px;
  text-transform: capitalize;
`
export const ExpandInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${props => props.theme.colors.gray[0]};
  background-color: #000000;
  font-size: ${props => props.theme.typography.lg};
  gap: 10px;
  text-transform: capitalize;
  padding: 15px 20px;
  border-radius: 3px;
`
export const Tunning = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100%;
  color: ${props => props.theme.colors.gray[0]};
  font-size: ${props => props.theme.typography.lg};
  gap: 10px;
  @media ${breakpoints.lessThan(sizes.desktop)} {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const Upgrade = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  color: ${props => props.theme.colors.gray[900]};
  background: ${props => props.theme.colors.gray[100]};
  font-size: ${props => props.theme.typography.lg};
  gap: 10px;
  text-transform: uppercase;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 3px;
`
export const CardCar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 18px;
  border-radius: 3px;
  gap: 8px;
  background-color: ${props => props.theme.colors.gray[0]};

  .image {
    border-radius: 3px;
    height: 150px;
    width: 100%;
  }
  .title {
    font-size: ${props => props.theme.typography.md};
    color: ${props => props.theme.colors.gray[700]};
    font-weight: 500;
  }
  .price {
    font-size: ${props => props.theme.typography.lg};
    color: ${props => props.theme.colors.gray[900]};
    font-weight: 600;
  }
`
export const Back = styled.div`
  padding: 10px 18px;
  background-color: ${props => props.theme.colors.secondary[500]};
  border-radius: 3px;
  font-size: ${props => props.theme.typography.md};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  a {
    color: ${props => props.theme.colors.gray[0]};
  }
`
