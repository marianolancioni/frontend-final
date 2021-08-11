const validate = values => {
    const errors = {}
    if (!values.nombre) {
      errors.nombre = 'Requerido!'
    }
    if (!values.descripcion) {
      errors.descripcion = 'Requerido!'
    }
    if (!values.precio) {
      errors.precio = 'Requerido!'
    }
    if (isNaN(values.precio)) {
      errors.precio = 'Valor no numérico!'
    }
    return errors
  }
  
  export default validate