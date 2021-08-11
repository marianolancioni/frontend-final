import React from 'react'
import css from './producto.module.css'


class Producto extends React.Component {
        
    render = () => {
        return (
            <div className={css.counter}>
                <span className={css.label}>
                    <b>Nombre:</b> {this.props.item.nombre}<br></br>
                    <b>Descripcion:</b> {this.props.item.descripcion}<br></br>
                    <b>Precio:</b> ${this.props.item.precio}<br></br>
                </span>
                <button hidden={!this.props.logged} className={css.button} onClick={this.editarProducto}>Editar</button>
                <button hidden={!this.props.logged} className={css.button} onClick={this.deleteProducto}>Eliminar</button>
            </div>
        )
    }

    editarProducto = () => {
      this.props.history.push("/formulario/"+this.props.item._id)
    }
    deleteProducto = () => {
        this.props.borrarProducto(this.props.item._id);
    }
}
export default Producto