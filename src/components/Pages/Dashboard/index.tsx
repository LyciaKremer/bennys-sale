import Image from 'next/image'
import * as S from './style'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Papa from 'papaparse'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { BiChevronUp } from 'react-icons/bi'

interface DadosColuna {
  [coluna: string]: any[]
}

interface Carro {
  modelo: string
  dono: string
  valor: number
  imagens: string[]
  categoria: string
  mecanico: string
  passaporte: string
  telefone: string
  placa: string
  motor: string
  freio: string
  transmissao: string
  suspensao: string
  turbo: string
  blindagem: string
  vendido: boolean
}

const Dashboard = () => {
  const [data, setData] = useState<any[]>([])
  const [category, setCategory] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const dadosPorColuna: DadosColuna = {}

  data.forEach(row => {
    for (const coluna in row) {
      if (row.hasOwnProperty(coluna)) {
        if (!dadosPorColuna[coluna]) {
          dadosPorColuna[coluna] = []
        }
        dadosPorColuna[coluna].push(row[coluna])
      }
    }
  })

  const carros: Carro[] = []

  const numLinhas = data.length

  for (let i = 0; i < numLinhas; i++) {
    const images = dadosPorColuna['imagens'][i]
      ?.split(',')
      .map((url: string) => url.trim())

    const carro: Carro = {
      modelo: dadosPorColuna['modelo'][i],
      dono: dadosPorColuna['dono'][i],
      valor: parseFloat(dadosPorColuna['valor'][i]),
      imagens: images || [],
      categoria: dadosPorColuna['categoria'][i],
      mecanico: dadosPorColuna['mecanico'][i],
      passaporte: dadosPorColuna['passaporte'][i],
      telefone: dadosPorColuna['telefone'][i],
      placa: dadosPorColuna['placa'][i],
      motor: dadosPorColuna['motor'][i],
      freio: dadosPorColuna['freio'][i],
      transmissao: dadosPorColuna['transmissao'][i],
      suspensao: dadosPorColuna['suspensao'][i],
      turbo: dadosPorColuna['turbo'][i],
      blindagem: dadosPorColuna['blindagem'][i],
      vendido: dadosPorColuna['vendido'][i]
    }

    carros.push(carro)
  }

  const carrosFiltrados = carros.filter(carro =>
    category ? carro.categoria === category : true
  )
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    axios
      .get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSgujbZ5GzFR_62C4zNk-kL3CwQL6wUcjaac2_rN_o6GBL6_nfT6QYX5kz1nc302zR50hEqfhuIaPVM/pub?gid=0&single=true&output=csv'
      )
      .then(response => {
        Papa.parse(response.data, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: result => {
            if (result.data && Array.isArray(result.data)) {
              setData(result.data)
            } else {
              console.error('Erro ao analisar os dados CSV:', result)
            }
          },
          error: error => {
            console.error('Erro ao analisar os dados CSV:', error)
          }
        })
      })
      .catch(error => {
        console.error('Erro ao acessar a planilha do Google:', error)
      })
  }, [])

  const urlToString = (url: any) => {
    url?.toString()
    return url
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
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
          <S.Header>
            <Image
              src="/Logo_Feirao.png"
              alt="logo"
              width={325.5}
              height={118.5}
              priority
            />
          </S.Header>

          <S.Box>
            <S.Categories>
              <S.ButtonCategorie
                onClick={() => setCategory(null)}
                className={category === null ? 'selected' : ''}
              >
                Todas
              </S.ButtonCategorie>
              <S.ButtonCategorie
                onClick={() => setCategory('Sports')}
                className={category === 'Sports' ? 'selected' : ''}
              >
                Esportivos
              </S.ButtonCategorie>
              <S.ButtonCategorie
                onClick={() => setCategory('Super')}
                className={category === 'Super' ? 'selected' : ''}
              >
                Super
              </S.ButtonCategorie>
              <S.ButtonCategorie
                onClick={() => setCategory('Muscle')}
                className={category === 'Muscle' ? 'selected' : ''}
              >
                Muscle
              </S.ButtonCategorie>
              <S.ButtonCategorie
                onClick={() => setCategory('LowRiders')}
                className={category === 'LowRiders' ? 'selected' : ''}
              >
                Lowrider
              </S.ButtonCategorie>
              <S.ButtonCategorie
                onClick={() => setCategory('Compactos')}
                className={category === 'Compactos' ? 'selected' : ''}
              >
                Compactos
              </S.ButtonCategorie>
              <S.ButtonCategorie
                onClick={() => setCategory('OffRoad')}
                className={category === 'OffRoad' ? 'selected' : ''}
              >
                Offroad
              </S.ButtonCategorie>
              <S.ButtonCategorie
                onClick={() => setCategory('SUVs')}
                className={category === 'SUVs' ? 'selected' : ''}
              >
                SUVs
              </S.ButtonCategorie>
              <S.ButtonCategorie
                onClick={() => setCategory('Sedans')}
                className={category === 'Sedans' ? 'selected' : ''}
              >
                Sedan
              </S.ButtonCategorie>
              <S.ButtonCategorie
                onClick={() => setCategory('Classicos')}
                className={category === 'Classicos' ? 'selected' : ''}
              >
                Clássicos
              </S.ButtonCategorie>
              <S.ButtonCategorie
                onClick={() => setCategory('Vans')}
                className={category === 'Vans' ? 'selected' : ''}
              >
                Vans
              </S.ButtonCategorie>
              <S.ButtonCategorie
                onClick={() => setCategory('Motos')}
                className={category === 'Motos' ? 'selected' : ''}
              >
                Motos
              </S.ButtonCategorie>
              <S.ButtonCategorie
                onClick={() => setCategory('Bikes')}
                className={category === 'Bikes' ? 'selected' : ''}
              >
                Bicicletas
              </S.ButtonCategorie>
            </S.Categories>

            {carrosFiltrados.length > 0 ? (
              <S.ListCars>
                {carrosFiltrados.map((carro: any, index) => {
                  if (!carro.modelo || !carro.valor) {
                    return null
                  }

                  return (
                    <Link
                      href={{
                        pathname: `/carro/${carro.modelo}`,
                        query: { ...carro }
                      }}
                      key={index}
                    >
                      <S.CardCar>
                        <img
                          className="image"
                          src={urlToString(carro?.imagens[0])}
                        />

                        <div className="info">
                          <div className="title">{carro.modelo}</div>
                          {carro?.vendido ? (
                            <S.SoldStatus>Vendido!</S.SoldStatus>
                          ) : (
                            <div className="price">R${carro.valor}.000</div>
                          )}
                        </div>
                      </S.CardCar>
                    </Link>
                  )
                })}
              </S.ListCars>
            ) : category !== null ? (
              <S.NoResults>
                <HiOutlineEmojiSad />
                Desculpa, não temos resultados para exibir!
              </S.NoResults>
            ) : null}
          </S.Box>
        </section>
      )}
      {showScrollToTop && (
        <S.ScrollToTopButton onClick={handleScrollToTop}>
          <BiChevronUp />
        </S.ScrollToTopButton>
      )}
    </>
  )
}

export default Dashboard
