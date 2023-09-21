import { IoShieldOutline } from 'react-icons/io5'

import Image from 'next/image'

import Button from '../../Button'
import * as S from './style'

interface FooterProps {
  variant: string
}

const Footer = (props: FooterProps) => {
  return (
    <>
      {props.variant === 'login' && (
        <S.FooterLogin>
          <div className="company-info">
            <div className="info-visibility">
              <span>© 2022</span>
            </div>

            <div className="cubo">
              <span>Desenvolvido por</span>
              <Image
                src="/admin/images/CuboColor.svg"
                height={20}
                width={20}
                alt={''}
              />
              <span>Cubo</span>
            </div>

            <div className="info-visibility visibility">
              <span>Todos os direitos Reservados.</span>
            </div>
          </div>
        </S.FooterLogin>
      )}
      {props.variant === 'dashboard' && (
        <S.FooterDashboard>
          <div className="company-info">
            <div className="info-visibility">
              <span>© 2022</span>
            </div>
            <div className="cubo">
              <span>Desenvolvido por</span>
              <Image
                src="/admin/images/Cubo.svg"
                height={20}
                width={20}
                alt={''}
              />
              <span>Cubo</span>
            </div>
            <div className="info-visibility">
              <span>Todos os direitos Reservados.</span>
            </div>
          </div>
          <div className="info-visibility">
            <Button
              href="https://api.whatsapp.com/send?phone=5583991817558"
              isBlank
              color="secundary"
              size="md"
              iconEnd={<IoShieldOutline fontSize={20} />}
            >
              Precisa de ajuda?
            </Button>
          </div>
        </S.FooterDashboard>
      )}
    </>
  )
}

export default Footer
