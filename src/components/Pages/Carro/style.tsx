import styled from 'styled-components'

import { breakpoints, sizes } from '../../../styles/breakpoints'

export const Box = styled.div`
  display: flex;
  gap: 50px;
  height: 100%;
  button {
    color: ${props => props.theme.colors.gray[100]};
    :hover {
      color: ${props => props.theme.colors.gray[900]};
    }
  }
  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: flex;
    flex-direction: column;
    gap: 0;
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
  @media ${breakpoints.lessThan(sizes.desktop)} {
    gap: 0;
  }
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
  font-size: 40px;
  letter-spacing: 1.4px;
  color: ${props => props.theme.colors.gray[100]};
  font-weight: 700 !important;
`
export const Header = styled.div`
  margin-bottom: 30px;
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
  justify-content: center;
  width: 100%;
  padding: 49px 0 34px 0;
`
export const InfoCar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 48px 0 12px 50px;
  border: 1px solid #f3221d;
  width: 450px;
  height: 450px;
  height: fit-content;
  border-radius: 20px;
  background-color: #000000;
  @media ${breakpoints.lessThan(sizes.desktop)} {
    margin-bottom: 50px;
  }
  @media ${breakpoints.lessThan(sizes.tablet)} {
    width: 100%;
  }
  button {
    position: relative;
    bottom: -33px;
    right: -24px;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    font-weight: 700 !important;
    background-color: #f3221d;
    border-radius: 20px;
    width: 300px;
    padding: 18px 0;
    font-size: 16px;
    @media ${breakpoints.lessThan(sizes.tablet)} {
      right: 0;
      left: -24px;
    }
  }
`
export const Price = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 30px;
  color: ${props => props.theme.colors.gray[100]};
  letter-spacing: 1.4px;
  font-weight: 700;
  margin-top: 20px;
`
export const ButtonCategorie = styled.div`
  color: white;
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 3px;
  font-size: ${props => props.theme.typography.md};
  letter-spacing: 0.1rem;
  background-color: ${props => props.theme.colors.secondary[500]};
  &:hover {
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
export const InfoCarDetails = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.colors.gray[0]};
  font-size: 15px;
  gap: 10px;
  text-transform: capitalize;
  font-weight: 700;
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.colors.gray[0]};
  font-size: 15px;
  gap: 10px;
  text-transform: uppercase;
  font-weight: 700;
`
export const ExpandInfo = styled.div`
  color: #f3221d;
  font-size: ${props => props.theme.typography.base};
  gap: 10px;
  text-transform: uppercase;
  font-weight: 700;
`
export const Tunning = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  width: 66%;
  color: ${props => props.theme.colors.gray[0]};
  border-radius: 20px;
  background-color: ${props => props.theme.colors.gray[0]};
  margin-top: 56px;
  margin-bottom: 56px;
  gap: 10px;
  padding: 30px 49px 36px 49px;
  @media ${breakpoints.lessThan(sizes.desktop)} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${breakpoints.lessThan(sizes.tablet)} {
    width: 100%;
    padding: 25px 25px 25px 25px;
  }
`
export const Upgrade = styled.div`
  display: flex;
  flex-direction: column;
  color: #000000;
  font-size: ${props => props.theme.typography.base};
  text-transform: uppercase;
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
export const BackMobile = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 115.9px;
  height: 50px;
  background-color: #f3221d;
  border-radius: 16px;
  font-size: ${props => props.theme.typography.base};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  margin-bottom: 64px;
  a {
    color: ${props => props.theme.colors.gray[0]};
  }
  &:hover {
    background-color: ${props => props.theme.colors.gray[900]};
    a {
      color: ${props => props.theme.colors.gray[0]};
    }
  }
  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: flex;
  }
`
export const BackDesktop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115.9px;
  height: 50px;
  background-color: #f3221d;
  border-radius: 16px;
  font-size: ${props => props.theme.typography.base};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  margin-bottom: 64px;
  a {
    color: ${props => props.theme.colors.gray[0]};
  }
  &:hover {
    background-color: ${props => props.theme.colors.gray[900]};
    a {
      color: ${props => props.theme.colors.gray[0]};
    }
  }
  @media ${breakpoints.lessThan(sizes.desktop)} {
    display: none;
  }
`
export const ButtonRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const SlideBox = styled.div`
  margin-top: 64px;
  max-width: 720px;
  .box {
    border: 4px solid #ffffff;
    border-radius: 20px;
    width: 720px;
    height: 450px;
    @media ${breakpoints.lessThan(sizes.tablet)} {
      width: 300px;
      height: 200px;
    }
  }
  @media ${breakpoints.lessThan(sizes.tablet)} {
    max-width: 300px;
    max-height: 300px;
    margin-bottom: 40px;
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
  width: 100%;
`
export const CustomPrevArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 24px;
  color: #ffffff;
  z-index: 1;
`
export const CustomNextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 24px;
  color: #ffffff;
`
export const CenterAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
export const ButtonCopy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #38b6ff;
  font-size: 18px;
  font-weight: 800;
  border-top: 2px solid #959290;
  border-radius: 0 0 10px 10px;
  background-color: white;
  padding: 18px 0;
  cursor: pointer;
`
