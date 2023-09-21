import { LuSettings } from 'react-icons/lu'
import * as S from './style'
import { Field } from 'formik'

interface CheckboxProps {
  title: string
  value: string
  click: any
}

const CheckboxRound = (props: CheckboxProps) => {
  return (
    <S.Checkbox>
      <label>
        <Field
          type="checkbox"
          name="checked"
          value={props.value}
          onClick={props.click}
        />
        <div className="btn btn-rnd">
          <span>
            <LuSettings />
            {props.title}
          </span>
        </div>
      </label>
    </S.Checkbox>
  )
}

export default CheckboxRound
