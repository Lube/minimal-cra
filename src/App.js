import React, { PropTypes, Component } from 'react';
import logo from './logo.svg';

import Categorias from 'containers/Categorias'

import {
  Layout,
  Header,
  HeaderRow,
  HeaderTabs,
  Tab,
  Drawer,
  Content
} from 'react-mdl'

import {
  Route,
  Link
} from 'react-router-dom'

import './App.css'

const getRouteFromTab = {
  0: '/cositas',
  1: '/productos',
  2: '/changuito'
}

class App extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    const push = this.context.router.history.push
    
    return (
        <Layout fixedHeader fixedTabs>
            <Header>
                <HeaderRow title="VicciCompras" />
                <HeaderTabs ripple onChange={tab => push(getRouteFromTab[tab])}>
                    <Tab>Cositas</Tab>
                    <Tab>Productos</Tab>
                    <Tab>Changuito</Tab>
                </HeaderTabs>
            </Header>
            <Drawer title="Title" />
            <Content>
              <Route exact path="/cositas" component={Categorias}/>
              <Route exact path="/productos" component={() => <h1> Productos </h1>}/>
              <Route exact path="/changuito" component={() => <h1> Changuito </h1>}/>
            </Content>
        </Layout>
    );
  }
}

export default App;
