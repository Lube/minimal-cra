import React, {PropTypes, Component} from 'react'
import {
    ListItem,
    List
} from 'react-mdl'

import './index.css'

class Categorias extends Component {
    static propTypes = {
        loadCategorias: PropTypes.func,
        categorias: PropTypes.array,
        isFetching: PropTypes.bool,
    }

    state = {
        categoriaSeleccionada: null
    }

    renderCategoria (categoria, i) {
        return (
            <ListItem key={i}>
                {categoria.nombre}
            </ListItem>
        )
    }

    componentDidMount() {
        this.props.loadCategorias()
    }

    render() {
        return (
            <List>
                {this.props.categorias.map(this.renderCategoria)}
            </List>
        )
    }
}

export default Categorias
