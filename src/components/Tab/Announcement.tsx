import { Tab, Tabs } from 'react-bootstrap'
import * as S from './style'
import CardQuickTab from '../Card/quickTab'
import { useState } from 'react'
import data from './texts.json'

const TabAnnouncement = () => {
  return (
    <>
      <S.Box>
        <S.TabAnnouncements>
          <Tabs
            defaultActiveKey="aberta"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="aberta" title="Aberta">
              <S.BodyCards>
                {data.aberta?.map(item => (
                  <CardQuickTab
                    key={item.text}
                    firstTitle={'Mensagem'}
                    firstSubtitle={item.text}
                  />
                ))}
              </S.BodyCards>
            </Tab>
            <Tab eventKey="fechando" title="Fechando">
              <S.BodyCards>
                {data.fechando?.map(item => (
                  <CardQuickTab
                    key={item.text}
                    firstTitle={'Mensagem'}
                    firstSubtitle={item.text}
                  />
                ))}
              </S.BodyCards>
            </Tab>
            <Tab eventKey="fechada" title="Fechada">
              <S.BodyCards>
                {data.fechada?.map(item => (
                  <CardQuickTab
                    key={item.text}
                    firstTitle={'Mensagem'}
                    firstSubtitle={item.text}
                  />
                ))}
              </S.BodyCards>
            </Tab>
            <Tab eventKey="bennys" title="Benny's">
              <S.BodyCards>
                {data.bennys?.map(item => (
                  <CardQuickTab
                    key={item.text}
                    firstTitle={'Mensagem'}
                    firstSubtitle={item.text}
                  />
                ))}
              </S.BodyCards>
            </Tab>
          </Tabs>
        </S.TabAnnouncements>
      </S.Box>
    </>
  )
}

export default TabAnnouncement
