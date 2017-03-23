import { connect } from 'react-redux'
import Categorias from './components'

import {
    isFetching,
    getCategorias,
    loadCategorias
} from 'modules/categorias'

const mapStateToProps = state => {
    return {
        categorias: getCategorias(state),
        isFetching: isFetching(state)
    }
}

const mapActionsToProps = {
    loadCategorias
}

export default connect(mapStateToProps, mapActionsToProps)(Categorias)