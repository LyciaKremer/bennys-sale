import {
  BiInfoCircle,
  BiPhotoAlbum,
  BiCalculator,
  BiText
} from 'react-icons/bi'
import { TbHierarchy3 } from 'react-icons/tb'
import { MdOutlineDesignServices } from 'react-icons/md'

export const shortcuts = [
  {
    icon: <BiText />,
    title: 'Anúncios',
    url: '/anuncios'
  },
  {
    icon: <BiInfoCircle />,
    title: 'Informações',
    url: '/link'
  },
  {
    icon: <TbHierarchy3 />,
    title: 'Hierarquia',
    url: '/link'
  },
  {
    icon: <BiPhotoAlbum />,
    title: 'Galeria',
    url: '/link'
  },
  // {
  //   icon: <BiCalendarCheck />,
  //   title: 'Agendamentos',
  //   url: '/link'
  // },
  {
    icon: <MdOutlineDesignServices />,
    title: 'Style',
    url: '/link'
  },
  {
    icon: <BiCalculator />,
    title: 'Calculadora',
    url: '/calculadora'
  }
]
