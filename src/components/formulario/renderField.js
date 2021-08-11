import css from './formulario.module.css'

const RenderField = ({
    input,
    label,
    type,
    meta: {  touched, error }
  }) => (
    <div>
      <div>
        <input {...input} className={css.input} type={type} placeholder={label} />
        {touched && error && <span className={css.error}>{error}</span>}
      </div>
    </div>
  )

export default RenderField