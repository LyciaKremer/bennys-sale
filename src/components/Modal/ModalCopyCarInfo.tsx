import { useState } from 'react'
import Button from '../Button'
import * as S from './style'

const ModalCopyCarInfo = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <S.BoxCopy>
        <S.TitleCopyCar>ÓTIMA ESCOLHA!</S.TitleCopyCar>
        <S.DetailsCopyCar>
          Agora cole no seu F8 o que foi copiado e dê continuidade com a sua
          compra juntamente com o mecânico!
        </S.DetailsCopyCar>
      </S.BoxCopy>
    </>
  )
}
export default ModalCopyCarInfo
