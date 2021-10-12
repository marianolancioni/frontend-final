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
   
    return errors
  }
  
  export default validate