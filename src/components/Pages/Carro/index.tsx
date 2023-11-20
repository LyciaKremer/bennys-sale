import { BiCategoryAlt, BiWrench } from 'react-icons/bi'
import Slider from 'react-slick'
import * as S from './style'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { BsPerson } from 'react-icons/bs'
import { FaRegAddressCard } from 'react-icons/fa6'
import { FiPhone } from 'react-icons/fi'
import { RiCarLine } from 'react-icons/ri'
import Button from '@/components/Button'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ModalCopyCarInfo from '@/components/Modal/ModalCopyCarInfo'
import { ToggleModalTiny } from '@/components/Modal'

interface ArrowProps {
  onClick: () => void
}

const Car = () => {
  const router = useRouter()
  const carro = router.query
  const [isOpen, setIsOpen] = useState(false)

  const [loading, setLoading] = useState(true)

  const urlToString = (url: string | undefined) => {
    return url?.toString() || ''
  }

  const PrevArrow = ({ onClick }: ArrowProps) => {
    return (
      <S.CustomPrevArrow onClick={onClick}>
        <FaChevronLeft />
      </S.CustomPrevArrow>
    )
  }

  const NextArrow = ({ onClick }: ArrowProps) => {
    return (
      <S.CustomNextArrow onClick={onClick}>
        <FaChevronRight />
      </S.CustomNextArrow>
    )
  }
  const imagensArray =
    typeof carro?.imagens === 'string' ? [carro?.imagens] : carro?.imagens || []

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
    dotsClass: 'slick-dots slick-thumb',
    customPaging: function (i: number) {
      return (
        <img key={i} src={urlToString(imagensArray[i])} alt={`Image ${i}`} />
      )
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  function copyToClipboard(carro: any) {
    const valor = parseFloat(carro?.valor) || 0
    const valorFormatado = valor.toFixed(3)

    const texto = `/me 
    Gostei desse carro!
    - Modelo: ${carro?.modelo}
    - Dono: ${carro?.dono}
    - Valor: ${valorFormatado}`
    navigator.clipboard.writeText(texto)
  }

  return (
    <>
      {loading ? (
        <S.Loading>
          <Image
            src="/carregamento_sem_fundo.gif"
            alt="logo"
            className="image"
            width={1000}
            height={465}
            priority
          />
        </S.Loading>
      ) : (
        <section>
          <S.Logo>
            <Link href="/">
              <Image
                src="/Logo_Feirao.png"
                alt="logo"
                className="flicker"
                width={325.5}
                height={118.5}
                priority
              />
            </Link>
          </S.Logo>
          <S.CenterAll>
            <S.Box>
              <S.Item>
                <S.ButtonRight>
                  <S.BackMobile>
                    <Link href="/">voltar</Link>
                  </S.BackMobile>
                </S.ButtonRight>
                <S.Body>
                  <S.SlideBox>
                    {imagensArray.length === 0 ? (
                      <div>
                        <p>Nenhuma imagem disponível.</p>
                      </div>
                    ) : (
                      <Slider {...settings}>
                        {imagensArray.map((image: string, index: number) => (
                          <div key={index}>
                            <img
                              className="box"
                              src={urlToString(image)}
                              alt={`Image ${index}`}
                            />
                          </div>
                        ))}
                      </Slider>
                    )}
                  </S.SlideBox>
                </S.Body>
              </S.Item>
              <div>
                <S.ButtonRight>
                  <S.BackDesktop>
                    <Link href="/">voltar</Link>
                  </S.BackDesktop>
                </S.ButtonRight>
                <S.InfoCar>
                  <S.Header>
                    <S.Model>{carro?.modelo}</S.Model>
                  </S.Header>
                  <S.ListInfo>
                    <S.InfoCarDetails>
                      <BsPerson />
                      {carro?.dono}
                    </S.InfoCarDetails>
                    <S.InfoCarDetails>
                      <BiCategoryAlt />
                      {carro?.categoria}
                    </S.InfoCarDetails>
                    <S.InfoCarDetails>
                      <BiWrench />
                      {carro?.mecanico}
                    </S.InfoCarDetails>
                    <S.InfoCarDetails>
                      <FaRegAddressCard />
                      {carro?.passaporte}
                    </S.InfoCarDetails>
                    <S.InfoCarDetails>
                      <FiPhone />
                      {carro?.telefone}
                    </S.InfoCarDetails>
                    <S.InfoCarDetails>
                      <RiCarLine />
                      {carro?.placa}
                    </S.InfoCarDetails>
                  </S.ListInfo>
                  <S.Price>R${carro?.valor}.000</S.Price>
                  <Button
                    className="button"
                    color="primary"
                    onClick={() => {
                      toggleModal(), copyToClipboard(carro)
                    }}
                  >
                    Quero esse carro!
                  </Button>
                </S.InfoCar>
              </div>
            </S.Box>
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
          </S.CenterAll>
        </section>
      )}
      <ToggleModalTiny
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <ModalCopyCarInfo />
        <S.ButtonCopy onClick={() => toggleModal()}>OK</S.ButtonCopy>
      </ToggleModalTiny>
    </>
  )
}

export default Car
