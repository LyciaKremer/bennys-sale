import TabAnnouncement from '@/components/Tab/Announcement'
import * as S from './style'
import SiderBar from '@/components/Layout/Sidebar'
import Header from '@/components/Layout/Header'

const Announcement = () => {
  const formInitialValues = {
    tst: ''
  }

  return (
    <>
      <S.ContainerGrid>
        <S.MainContainer>
          <S.Box>
            <TabAnnouncement />
          </S.Box>
        </S.MainContainer>
      </S.ContainerGrid>
    </>
  )
}

export default Announcement
