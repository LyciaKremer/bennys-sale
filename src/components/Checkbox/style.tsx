import styled from 'styled-components'

import { breakpoints, sizes } from '../../styles/breakpoints'

export const Checkbox = styled.div`
  label {
    position: relative;
    display: inline-block;
    text-align: center;
  }

  .btn:hover {
    cursor: pointer !important;
    background-color: #e2e2e2;
    color: #000000;
  }

  .btn:active {
    transform: translateY(2px) !important;
  }
  .btn {
    font-size: 15px;
    padding: 10px 15px;
    text-align: center;
    font-weight: 500;
  }
  .btn-rnd {
    transition: all 0.2s ease;
    background-color: #fafafa;
    border: 1px solid #dcdbdb !important;
    min-width: 30px;
    border-radius: 8px;
  }

  .btn-rnd::selection {
    background: green;
  }

  input[type='checkbox'] {
    position: absolute;
    visibility: hidden;
  }

  input[type='checkbox'] + div {
    position: relative;
  }
  input[type='checkbox']:checked + div {
    background-color: ${({ theme }) => theme.colors.primary[500]};
  }
  input[type='checkbox']:checked + div > span {
    color: white;
  }
  input[type='checkbox'] + div > span {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
  }

  input[type='checkbox']:checked + div::before {
    position: absolute;
    bottom: 18px;
    right: 0px;
    font-size: 21px;
    color: white;
  }

  @keyframes fall {
    100% {
      -webkit-transform: translate(-5px, 5px) rotate(30deg);
      -moz-transform: translate(-5px, 5px) rotate(30deg);
      -o-transform: translate(-5px, 5px) rotate(30deg);
      -ms-transform: translate(-5px, 5px) rotate(30deg);
      transform: translate(-5px, 5px) rotate(30deg);
    }
  }

  @-moz-keyframes fall {
    100% {
      -webkit-transform: translate(-5px, 5px) rotate(30deg);
      -moz-transform: translate(-5px, 5px) rotate(30deg);
      -o-transform: translate(-5px, 5px) rotate(30deg);
      -ms-transform: translate(-5px, 5px) rotate(30deg);
      transform: translate(-5px, 5px) rotate(30deg);
    }
  }

  @-webkit-keyframes fall {
    100% {
      -webkit-transform: translate(-5px, 5px) rotate(30deg);
      -moz-transform: translate(-5px, 5px) rotate(30deg);
      -o-transform: translate(-5px, 5px) rotate(30deg);
      -ms-transform: translate(-5px, 5px) rotate(30deg);
      transform: translate(-5px, 5px) rotate(30deg);
    }
  }
`
