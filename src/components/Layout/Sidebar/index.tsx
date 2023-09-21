import { BiSupport, BiCog, BiLogOut } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'

import { shortcuts } from './shortcuts'
import * as S from './style'

const SiderBar = () => {
  return (
    <>
      <S.SiderBarBox>
        <S.LogoBox>
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
        </S.LogoBox>
        <S.Navigation>
          <S.ListLink>
            {/* <S.TitleMenu>GERENCIAR</S.TitleMenu> */}
            {shortcuts.map(({ icon, title, url }) => (
              <Link href={url} key={title}>
                <S.Item>
                  <span className="icon">{icon}</span>
                  <S.ItemTitle>{title}</S.ItemTitle>
                </S.Item>
              </Link>
            ))}
          </S.ListLink>
        </S.Navigation>
        {/* <S.FooterNav>
          <S.ListLink>
            <S.TitleMenu>ACESSIBILIDADE</S.TitleMenu>
            <a
              href="https://api.whatsapp.com/send?phone=5583991817558"
              target="_blank"
              rel="noreferrer noopener"
            >
              <S.Item>
                <BiSupport className="icon" fontSize={20} />
                <S.ItemTitle>Suporte</S.ItemTitle>
              </S.Item>
            </a>

            <Link href="/configuracoes">
              <S.Item>
                <BiCog className="icon" fontSize={20} />
                <S.ItemTitle>Configurações</S.ItemTitle>
              </S.Item>
            </Link>

            <S.Item>
              <button onClick={() => {}}>
                <S.Logout>
                  <BiLogOut fontSize={20} />
                  Logout
                </S.Logout>
              </button>
            </S.Item>
          </S.ListLink>
        </S.FooterNav> */}
      </S.SiderBarBox>
    </>
  )
}

export default SiderBar
