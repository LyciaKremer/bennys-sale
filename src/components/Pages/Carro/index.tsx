import {
  BiArrowBack,
  BiRightArrowAlt,
  BiCategoryAlt,
  BiWrench
} from 'react-icons/bi'
import Slider from 'react-slick'
import * as S from './style'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import { BsPerson } from 'react-icons/bs'
import { FaRegAddressCard } from 'react-icons/fa6'
import { FiPhone } from 'react-icons/fi'
import { RiCarLine } from 'react-icons/ri'
import Button from '@/components/Button'
import Link from 'next/link'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const Car = () => {
  const router = useRouter()
  const carro = router.query
  const [sliderRef, setSliderRef] = useState<Slider | null>(null)
  const [open, setOpen] = useState(false)

  const settings = {
    slidesToScroll: 1,
    speed: 400,
    ease: 'Pow4.easeIn',
    dots: true,
    infinite: true,
    arrows: false,
    className: 'center',
    slidesToShow: 1,
    swipeToSlide: true
  }

  const goToNext = () => {
    if (sliderRef) {
      sliderRef.slickNext()
    }
  }

  const goToPrev = () => {
    if (sliderRef) {
      sliderRef.slickPrev()
    }
  }
  const handleClick = () => {
    setOpen(!open)
  }

  const urlToString = (url: any) => {
    url?.toString()
    return url
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  function copyToClipboard(carro: any) {
    const valor = parseFloat(carro?.valor) || 0
    const valorFormatado = valor.toFixed(3)

    const texto = `Gostei desse carro!
    - Modelo: ${carro.modelo}
    - Marca: ${carro.marca}
    - Dono: ${carro.dono}
    - Valor: ${valorFormatado}`

    navigator.clipboard
      .writeText(texto)
      .then(() => {
        setOpen(true)
      })
      .catch(error => {
        console.error('Erro ao copiar texto:', error)
      })
  }
  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Informações copiadas. Partiu falar com o mec!
        </Alert>
      </Snackbar>
      <section>
        <S.Logo>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={32}
              priority
            />
          </Link>
          <S.Back>
            <Link href="/">voltar</Link>
          </S.Back>
        </S.Logo>
        <S.Box>
          {/* <Button color="white" onClick={goToPrev}>
            <BiArrowBack fontSize={25} />
          </Button> */}

          <S.Item>
            <S.Body>
              <img className="box" src={urlToString(carro?.imagem)} />

              <S.Tunning>
                <S.Upgrade>
                  motor
                  <S.ExpandInfo>{carro?.motor}</S.ExpandInfo>
                </S.Upgrade>
                <S.Upgrade>
                  freio
                  <S.ExpandInfo>{carro?.freio}</S.ExpandInfo>
                </S.Upgrade>
                <S.Upgrade>
                  transmissão
                  <S.ExpandInfo>{carro?.transmissao}</S.ExpandInfo>
                </S.Upgrade>
                <S.Upgrade>
                  suspensão
                  <S.ExpandInfo>{carro?.suspensao}</S.ExpandInfo>
                </S.Upgrade>
                <S.Upgrade>
                  turbo
                  <S.ExpandInfo>{carro?.turbo}</S.ExpandInfo>
                </S.Upgrade>
                <S.Upgrade>
                  blindagem
                  <S.ExpandInfo>{carro?.blindagem}</S.ExpandInfo>
                </S.Upgrade>
              </S.Tunning>
            </S.Body>
          </S.Item>
          <S.Footer>
            <S.Header>
              <S.Model>{carro?.modelo}</S.Model>
              <S.Brand>{carro?.marca}</S.Brand>
            </S.Header>
            <S.ListInfo>
              <S.Info>
                <BsPerson />
                {carro?.dono}
              </S.Info>
              <S.Info>
                <BiCategoryAlt />
                {carro?.categoria}
              </S.Info>
              <S.Info>
                <BiWrench />
                {carro?.mecanico}
              </S.Info>
              <S.Info>
                <FaRegAddressCard />
                {carro?.passaporte}
              </S.Info>
              <S.Info>
                <FiPhone />
                {carro?.telefone}
              </S.Info>
              <S.Info>
                <RiCarLine />
                {carro?.placa}
              </S.Info>
            </S.ListInfo>
            <S.Price>R${carro?.valor}.000</S.Price>
            <Button color="primary" onClick={() => copyToClipboard(carro)}>
              Quero esse carro!
              <span className="fire">🔥</span>
            </Button>
          </S.Footer>
          {/* ))} */}
          {/* </Slider> */}

          {/* <Button color="white" onClick={goToNext}>
            <BiRightArrowAlt fontSize={25} />
          </Button> */}
        </S.Box>
      </section>
    </>
  )
}

export default Car
