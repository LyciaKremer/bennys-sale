import styled, { DefaultTheme } from 'styled-components'

interface ButtonStyle {
  color?: string
  size?: string
  fullWidth?: boolean
  width?: string
  radius?: string
}

const handleSize = (size: string) => {
  switch (size) {
    case 'sm':
      return 'padding: 0 0.625rem; border-radius: 0.188rem; height: 1.8rem; font-size: 0.8rem;'
    case 'md':
      return 'padding: 0 1.5rem; border-radius: 0.188rem; height: 3rem; font-size: 1rem;'
    case 'lg':
      return 'padding: 0 1.5rem; border-radius: 0.188rem; height: 3.188rem; font-size: 1rem;'
    case 'xl':
      return 'padding: 0 1.75rem; border-radius: 0.188rem; height: 4rem; font-size: 1rem;'
    default:
      return 'padding: 0 1.1rem; border-radius: 0.188rem; height: 2.5rem; font-size: 0.9rem;'
  }
}
const handleColor = (color: string, theme: DefaultTheme) => {
  switch (color) {
    case 'primary':
      return `background-color: ${theme.colors.primary[500]}; &:hover{background-color: ${theme.colors.primary[600]};}`
    case 'secundary':
      return `background-color: ${theme.colors.secondary[400]}; &:hover{background-color: ${theme.colors.secondary[500]};}`
    case 'black':
      return `background-color: ${theme.colors.gray[900]}; &:hover{background-color: ${theme.colors.gray[800]};}`
    case 'success':
      return `background-color: ${theme.colors.success[700]}; &:hover{background-color: ${theme.colors.success[600]};}`
    case 'gray':
      return `background-color: ${theme.colors.backgroundLight};color: ${theme.colors.gray[700]};border: 1px solid ${theme.colors.gray[300]}; &:hover{background-color: ${theme.colors.gray[100]};} `
    case 'white':
      return `background-color: #fffff;color: ${theme.colors.gray[900]};border: 1px solid ${theme.colors.gray[300]}; &:hover{background-color: ${theme.colors.gray[100]};} `
    default:
      return `background-color: ${theme.colors.primary[500]}; &:hover{background-color: ${theme.colors.primary[600]};}`
  }
}
const handleRounded = (radius: string) => {
  switch (radius) {
    case 'sm':
      return 'border-radius: 0.625rem;'
    case 'md':
      return 'border-radius: 1.25rem;'
    case 'lg':
      return 'border-radius: 2.188rem;'
    case 'xl':
      return 'border-radius: 62.5rem;'
    default:
      return 'border-radius: 0.188rem;'
  }
}

export const Button = styled.button<ButtonStyle>`
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  flex-wrap: nowrap;
  white-space: nowrap;
  user-select: none;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
  color: white;
  text-decoration-line: none;
  outline-style: hidden;
  transition: ${({ theme }) => theme.effects.transition};
  ${({ width }) => width && `width: ${width};`};
  ${({ fullWidth }) => fullWidth && 'width: 100%;'};
  ${({ size }) => handleSize(size || '')}
  ${({ radius }) => handleRounded(radius || '')}
  ${({ color, theme }) => handleColor(color || '', theme)}
  &[disabled] {
    cursor: auto;
    background-color: ${({ theme }) => theme.colors.gray[400]};
    &:hover {
      filter: unset;
    }
  }
`
export const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.lg};
`
export const Loading = styled.div`
  svg {
    font-size: ${({ theme }) => theme.typography.md};
    margin: 0 0 0.1rem 0.35rem;
    animation: rotate-center 0.6s linear infinite both;
    @keyframes rotate-center {
      0% {
        transform: rotate(-160deg);
      }
      100% {
        transform: rotate(200deg);
      }
    }
  }
`
