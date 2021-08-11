import Producto from './producto'
import { connect } from 'react-redux'
import { delProducto} from '../../redux/index'

const mapStateToProps = (store) => {
    return {
        logged: store.auth.logged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {        
        borrarProducto: (_id) => dispatch(delProducto(_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Producto)