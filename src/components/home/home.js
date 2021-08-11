import React from 'react';
import css from './home.module.css';
import Producto from '../producto/index'

class Productos extends React.Component {

  componentDidMount = () => {
      this.props.fetchProductos();
  }

  render() {
    return (
      <div className={css.app}>
        <div className={css.container}>
          <button className={css.button} onClick={this.loginLogout}>{this.props.logged ? "Logout" : "Login"}</button>
          <section className={css.listSection}>    
          {!this.props.isFetchingProductos && !this.props.fail && <span className={css.listTitle}>Lista de Productos:</span>}
          {this.props.isFetchingProductos && <span className={css.listTitle}>Cargando productos...</span>} 
          {this.props.fail && <span className={css.listTitle}>Error al cargar productos...</span>}
            {
              this.props.productos.map((producto) => {
                return <Producto history={this.props.history} key={producto._id} item={producto}/>
              })
            }
          </section>          
          <button hidden={!this.props.logged} className={css.button} onClick={this.addProducto}>Agregar Producto</button>
        </div>
      </div>
    );
  }

  loginLogout = () => {
    if (this.props.logged) {
      this.props.logout();
    } else {
      this.props.history.push("/login")
    }
  }

  addProducto = () => {
    this.props.history.push("/formulario")
  }
}


export default Productos;
