import { ButtonHTMLAttributes, ReactNode } from 'react'
import { VscLoading } from 'react-icons/vsc'

import Link from 'next/link'

import * as S from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secundary' | 'black' | 'success' | 'white'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  width?: string
  href?: string
  isBlank?: boolean
  loading?: boolean
  iconStart?: ReactNode
  iconEnd?: ReactNode
}

const Button = (props: ButtonProps) => {
  const {
    color,
    size,
    type,
    fullWidth,
    width,
    radius,
    href,
    isBlank,
    loading,
    iconStart,
    iconEnd,
    children,
    ...buttonAttributes
  } = props

  return (
    <>
      {href && isBlank && (
        // TO LINKS OUTSIDE APP //
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          style={{ lineHeight: '0' }}
          className={fullWidth ? 'w-100' : ''}
        >
          <S.Button
            color={color}
            size={size}
            fullWidth={fullWidth}
            width={width}
            radius={radius}
            {...buttonAttributes}
          >
            {iconStart && <S.Icon>{iconStart}</S.Icon>}
            {children}
            {iconEnd && <S.Icon>{iconEnd}</S.Icon>}
          </S.Button>
        </a>
      )}
      {href && !isBlank && (
        // TO LINKS INSIDE APP //
        <Link href={href}>
          <a style={{ lineHeight: '0' }} className={fullWidth ? 'w-100' : ''}>
            <S.Button
              color={color}
              size={size}
              fullWidth={fullWidth}
              width={width}
              radius={radius}
              {...buttonAttributes}
            >
              {iconStart && <S.Icon>{iconStart}</S.Icon>}
              {children}
              {iconEnd && <S.Icon>{iconEnd}</S.Icon>}
            </S.Button>
          </a>
        </Link>
      )}
      {!href && !isBlank && (
        // REST OF BUTTONS //
        <S.Button
          color={color}
          size={size}
          fullWidth={fullWidth}
          width={width}
          radius={radius}
          type={type ?? 'button'}
          {...buttonAttributes}
        >
          {iconStart && <S.Icon>{iconStart}</S.Icon>}
          {children}
          {iconEnd && <S.Icon>{iconEnd}</S.Icon>}
          {loading && (
            <S.Loading>
              <VscLoading />
            </S.Loading>
          )}
        </S.Button>
      )}
    </>
  )
}

export default Button
