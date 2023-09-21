import { useState } from 'react'
import {
  BiLogOut,
  BiX,
  BiSupport,
  BiCategory,
  BiUser,
  BiCog
} from 'react-icons/bi'

import Image from 'next/image'
import Link from 'next/link'
import { shortcuts } from '../Sidebar/shortcuts'
import * as S from './style'
import Button from '@/components/Button'

interface HeaderProps {
  variant: string
}

const Header = (props: HeaderProps) => {
  const [active, setActive] = useState(false)

  return (
    <>
      {props.variant === 'dashboard' && (
        <>
          <S.HeaderDashboard>
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={32}
              priority
            />
            <div className="nav">
              <S.Menu>
                <div
                  className="menuApps p-1"
                  onClick={() => {
                    setActive(!active)
                  }}
                >
                  {active ? (
                    <BiX fontSize={27} />
                  ) : (
                    <BiCategory fontSize={22} className="iconCategory" />
                  )}
                </div>
                <div className="nav">
                  <div className="notification p-1">
                    {/* <DropdownNotify /> */}
                  </div>

                  {/* <DropdownProfile /> */}
                </div>
              </S.Menu>
            </div>
          </S.HeaderDashboard>
          <div className={active ? '' : 'd-none'}>
            <S.MenuMobile>
              <div className="d-flex flex-column">
                <S.ItemMenu>
                  <div>
                    <S.ListLink>
                      {shortcuts.map(({ icon, title, url }) => (
                        <Link href={url} key={title}>
                          <S.Item>
                            <span className="icon">{icon}</span>
                            <S.ItemTitle>{title}</S.ItemTitle>
                          </S.Item>
                        </Link>
                      ))}
                    </S.ListLink>
                  </div>
                </S.ItemMenu>
              </div>
            </S.MenuMobile>
          </div>
        </>
      )}

      {props.variant === 'internal' && (
        <>
          <S.HeaderInternal>
            <Link href="/">
              <div>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={32}
                  priority
                />
              </div>
            </Link>

            <S.Nav>
              <S.Ul>
                <Link href="/">
                  <S.LinkUl>Home</S.LinkUl>
                </Link>
                {/* <DropdownMenage className="ms-2 position-relative" /> */}

                {/* <Link href="/configuracoes">
                  <S.LinkUl>Configurações</S.LinkUl>
                </Link> */}
              </S.Ul>
            </S.Nav>

            <S.Menu>
              <div
                className="menuApps p-1"
                onClick={() => {
                  setActive(!active)
                }}
              >
                {active ? <BiX fontSize={27} /> : <BiCategory fontSize={22} />}
              </div>
              <div className="nav">
                <div className="notification p-1">
                  {/* <DropdownNotify /> */}
                </div>

                {/* <DropdownProfile /> */}
              </div>
            </S.Menu>
          </S.HeaderInternal>
          <div className={active ? '' : 'd-none'}>
            <S.MenuMobile>
              <div className="d-flex flex-column">
                <S.ItemMenu>
                  <div>
                    {/* <S.TitleMenu>GERENCIAR</S.TitleMenu> */}
                    <S.ListLink>
                      {shortcuts.map(({ icon, title, url }) => (
                        <Link href={url} key={title}>
                          <S.Item>
                            <span className="icon">{icon}</span>
                            <S.ItemTitle>{title}</S.ItemTitle>
                          </S.Item>
                        </Link>
                      ))}
                    </S.ListLink>
                  </div>
                </S.ItemMenu>
              </div>
            </S.MenuMobile>
          </div>
        </>
      )}
    </>
  )
}

export default Header
