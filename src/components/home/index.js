import Productos from './home'
import { connect } from 'react-redux'
import { fetchProductos } from '../../redux'
import { logout } from '../../redux/modulos/auth'

const mapStateToProps = (store) => {
    return {
        productos: store.productos.lista,
        isFetchingProductos: store.productos.isFetchingProductos,
        fail: store.productos.fail,
        logged: store.auth.logged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductos: () => dispatch(fetchProductos()),
        logout:() => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Productos)