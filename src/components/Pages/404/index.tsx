import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FiAlertTriangle } from 'react-icons/fi'
import { GiExitDoor } from 'react-icons/gi'
import Image from 'next/image'

import * as S from './style'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <>
      <S.Box>
        <S.Card>
          <FiAlertTriangle fontSize={100} />
          <S.Title>
            Entra no seu carro e sai daqui, não tem nada pra ser exibido ainda!
          </S.Title>
          <Link href="/" className="icon">
            <GiExitDoor fontSize={100} />
          </Link>
        </S.Card>
      </S.Box>
    </>
  )
}

export default Custom404
