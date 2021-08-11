import React from 'react'
import { Field, reduxForm } from 'redux-form'
import css from './login.module.css'
import validate from './validate'

const TextInput = (
    {
      input,
      label,
      type,
        meta: {  touched, error }
    }) => {
      return (
        <div>
          <input 
            className={css.input}
            type={type}
            placeholder={label}
            {...input} 
          />
          {touched && error && <span className={css.error}>{error}</span>}
        </div>
  )
}

class Login extends React.Component {

  componentDidUpdate = () => {
    if(this.props.logged) {
      this.props.history.push('/')
    }
  }

  render = () => {
    return (
      <div className={css.app}>
        <div className={css.container}>
          <div className={css.title}>Login</div>
            <Field label="Email" name="email" component={TextInput} type="text" />
            <Field label="Password" name="password" component={TextInput} type="password" />
            <div className={css.error}>{this.props.messageError}</div>
          <button
            type="button"
            className={css.button}
            onClick={this.props.handleSubmit}
          >
            {this.props.isFetching ? "Cargando" : "Iniciar sesión"}
          </button>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'login',
  validate,
  undefined,
  asyncChangeFields: ['']
})(Login)
