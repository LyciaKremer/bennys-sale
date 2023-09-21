import { BiDotsVerticalRounded } from 'react-icons/bi'
import { BiCopy } from 'react-icons/bi'
import toast from 'react-hot-toast'

import * as S from './style'
import Button from '../Button'
import Snackbar from '@mui/material/Snackbar'
import { useState } from 'react'
import Alert from '@mui/material/Alert'

interface CardProps {
  firstTitle: string
  firstSubtitle: string
  secondTitle?: string
  secondSubtitle?: string
  titleState?: string
  state?: string
  url?: string
}

const CardQuickTab = (props: CardProps) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
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
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    setOpen(true)
  }
  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Anúncio copiado com sucesso!
        </Alert>
      </Snackbar>
      <a href={props.url}>
        <S.TabCard>
          <div className="column">
            <div>
              <div className="title">{props.firstTitle}</div>
              <div className="subtitle">{props.firstSubtitle}</div>
            </div>
          </div>
          <div className="column">
            <Button
              color="white"
              radius="sm"
              onClick={() => copyToClipboard(props.firstSubtitle)}
            >
              <BiCopy fontSize={17} />
            </Button>
          </div>
        </S.TabCard>
      </a>
    </>
  )
}

export default CardQuickTab
