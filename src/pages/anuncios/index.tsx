import Header from '../../components/Layout/Header'
import Announcement from '@/components/Pages/Anuncios'
import Seo from '../../components/Seo'

const Anuncios = () => {
  return (
    <>
      <Seo title="Anúncios" />
      <Announcement />
    </>
  )
}

export default Anuncios
