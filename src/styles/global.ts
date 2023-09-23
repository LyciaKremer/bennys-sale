import { createGlobalStyle } from 'styled-components'

import { breakpoints, sizes } from './breakpoints'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  ::selection{
    background-color: ${props => props.theme.colors.primary[500]};
    color: white;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.default};
    background-color: ${props => props.theme.colors.backgroundLight};
    width: 100vw;
  }
  section,header,article,footer {
    width: 100%;
  }

  section{
    margin: 0 auto;
    max-width: 1000px;
    opacity: 0;
    animation: fadeIn 0.4s forwards ease-in-out;

    @media ${breakpoints.lessThan(sizes.desktop)} {
      padding: 1rem 2rem;
    }
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.colors.gray[900]};
    transition: ${props => props.theme.effects.transition};
  }
  button {
    border: 0;
    background: transparent;
  }
  li {
    list-style-type: none;
  }
  h1 {
    font-size: ${props => props.theme.typography.xl};
    color: ${props => props.theme.colors.gray[900]};
  }
  h2 {
    font-size: ${props => props.theme.typography.base};
    color: ${props => props.theme.colors.gray[900]};
  }
  label {
    font-size: ${props => props.theme.typography.sm};
    color: ${props => props.theme.colors.gray[500]};
  }
  select[multiple] {
    height: 9rem;
    resize: vertical;
  }

  select,
  textarea,
  input {
    background-color: #fff;
    display: block;
    width: 100%;
    height: 3rem;
    padding: 0 1.125rem;
    outline: 0;
    border: 1px solid ${props => props.theme.colors.gray[300]};
    border-radius: 0.188rem;
    &:hover {
      border: 1px solid ${props => props.theme.colors.gray[500]};
    }
    &:disabled {
      background-color: ${props => props.theme.colors.gray[100]};
      cursor: not-allowed;
      opacity: .8;
    }
    &:focus {
      border: 2px solid ${props => props.theme.colors.gray[800]};
    }
  }
  input[type='radio'],
  input[type='checkbox'] {
    width: 0.8rem;
    height: 1rem;
  }
  input[type="submit"],input[type="color"] {
    padding: 0;
  }
  input[type="color"] {
    padding: 0.5rem;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active{
    box-shadow: 0 0 0 35px white inset !important;
}
textarea {
  height: 9rem;
  padding: 1rem;
}
.slick-thumb li {
  width: 60px;
  height: 45px;
}
.slick-thumb {
  bottom: -45px;
  
}
`
