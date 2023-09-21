// import { BiData, BiHeartCircle, BiCool } from 'react-icons/bi'
import Image from 'next/image'
import * as S from './style'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Papa from 'papaparse'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import { HiOutlineEmojiSad } from 'react-icons/hi'

interface DadosColuna {
  [coluna: string]: any[]
}

interface Carro {
  modelo: string
  marca: string
  dono: string
  valor: number
  imagem: string
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
}

const Dashboard = () => {
  const [data, setData] = useState<any[]>([])
  const [category, setCategory] = useState<string | null>(null)

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
    const carro: Carro = {
      modelo: dadosPorColuna['modelo'][i],
      marca: dadosPorColuna['marca'][i],
      dono: dadosPorColuna['dono'][i],
      valor: parseFloat(dadosPorColuna['valor'][i]),
      imagem: dadosPorColuna['imagem'][i]?.toString(),
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
      blindagem: dadosPorColuna['blindagem'][i]
    }

    carros.push(carro)
  }

  const carrosFiltrados = carros.filter(carro =>
    category ? carro.categoria === category : true
  )

  const urlToString = (url: any) => {
    url?.toString()
    return url
  }

  return (
    <>
      <section>
        <Image
          src="/logo.png"
          className="mt-4 mb-5"
          alt="logo"
          width={100}
          height={32}
          priority
        />

        <S.Box>
          <S.Categories>
            <S.ButtonCategorie onClick={() => setCategory(null)}>
              Todas
            </S.ButtonCategorie>
            <S.ButtonCategorie onClick={() => setCategory('esportivos')}>
              Esportivos
            </S.ButtonCategorie>
            <S.ButtonCategorie onClick={() => setCategory('super')}>
              Super
            </S.ButtonCategorie>
            <S.ButtonCategorie onClick={() => setCategory('muscle')}>
              Muscle
            </S.ButtonCategorie>
            <S.ButtonCategorie onClick={() => setCategory('lowrider')}>
              Lowrider
            </S.ButtonCategorie>
            <S.ButtonCategorie onClick={() => setCategory('compacts')}>
              Compactos
            </S.ButtonCategorie>
            <S.ButtonCategorie onClick={() => setCategory('offroad')}>
              Offroad
            </S.ButtonCategorie>
            <S.ButtonCategorie onClick={() => setCategory('suv')}>
              SUV
            </S.ButtonCategorie>
          </S.Categories>
          {carrosFiltrados.length > 0 ? (
            <S.ListCars>
              {carrosFiltrados.map((carro: any, index) => (
                <S.CardCar key={index}>
                  <Link
                    href={{
                      pathname: `/carro/${carro.modelo}`,
                      query: { ...carro }
                    }}
                  >
                    <img className="image" src={urlToString(carro?.imagem)} />
                    <div className="title">{carro.modelo}</div>
                    <div className="price">R${carro.valor}.000</div>
                  </Link>
                </S.CardCar>
              ))}
            </S.ListCars>
          ) : (
            <S.NoResults>
              <HiOutlineEmojiSad />
              Desculpa, não temos resultados para exibir!
            </S.NoResults>
          )}
        </S.Box>
      </section>
    </>
  )
}

export default Dashboard
