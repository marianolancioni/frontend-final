import React from 'react'
import css from './formulario.module.css'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import RenderField from './renderField'

class Formulario extends React.Component {

  componentWillMount = () => {
    
    if (!this.props.logged) {
      this.props.history.push('/');
    }
    if (this.props.match.params.id) {
      let productoEditado = this.props.productos.filter(obj => {
        return obj._id === this.props.match.params.id
      })
      if (productoEditado) {
        this.props.initialize({ 
          _id: productoEditado[0]._id,
          nombre: productoEditado[0].nombre,
          descripcion: productoEditado[0].descripcion,
          precio: productoEditado[0].precio,
        });
      }
    }
  }

  render = () => {
      return (
          <div className={css.app}>
          <div className={css.container}>
            <section className={css.addSection}>  
              <div className={css.informationSection}>
                  <span className={css.titleAlumno}>Producto:</span>
                  <Field name="_id" className={css.hiddenInput} component="input" type="text" />
                  <Field label="Nombre" name="nombre" component={RenderField} type="text" />
                  <Field label="Descripción" name="descripcion" component={RenderField} type="text" />
                  <Field label="Precio" name="precio" component={RenderField} type="text" />
                  <button id="saveButton" className={css.buttonSave} onClick={this.saveNewProducto}>Guardar Información</button>
              </div>
            </section>
            <button 
                className={css.button} 
                onClick={() => {
                        this.props.history.push('/');
                    }}>
                    Volver
            </button>
          </div>
        </div>
      )
  }

  saveNewProducto = () => {
      const result = this.props.handleSubmit();
      if (result === undefined) {
        this.props.history.push('/');
      }
  }
}
export default reduxForm({
  form: 'formulario',
  validate,
  undefined,
  asyncChangeFields: ['']
})(Formulario)