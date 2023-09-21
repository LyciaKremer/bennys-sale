import { Tab, Tabs } from 'react-bootstrap'
import * as S from './style'

interface CheckboxProps {
  venda: any[]
  custo: any[]
}

const TabCalculator = (props: CheckboxProps) => {
  return (
    <>
      <S.Box>
        <S.TabAnnouncements>
          <Tabs
            defaultActiveKey="venda"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="venda" title="Venda">
              <S.BodyCards>{props.venda}</S.BodyCards>
            </Tab>
            <Tab eventKey="custo" title="Custo">
              <S.BodyCards>{props.custo}</S.BodyCards>
            </Tab>
          </Tabs>
        </S.TabAnnouncements>
      </S.Box>
    </>
  )
}

export default TabCalculator
