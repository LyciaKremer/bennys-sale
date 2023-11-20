import Modal from 'styled-react-modal'

import { breakpoints, sizes } from '../../styles/breakpoints'

export const ToggleModal = Modal.styled`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 2rem;
  background-color: white;
  max-height: 85vh;
  overflow-y: auto;
  @media ${breakpoints.lessThan(sizes.desktop)} {
    width: 90%;
  }
`
export const ToggleModalTiny = Modal.styled`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: white;
  width: 500px;
  @media ${breakpoints.lessThan(sizes.desktop)} {
    width: 90%;
  }
`
/* isOpen (Boolean)
[onBackgroundClick] (Function):
[onEscapeKeydown] (Function):
[backgroundProps] (Object):
[allowScroll] (Boolean):
[beforeOpen] (Function):
[afterOpen] (Function):
[beforeClose] (Function):
[afterClose] (Function):
*/
