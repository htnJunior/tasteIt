import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'

import HomeScreen from './pages/HomeScreen'
import Tela2Screen from './pages/Tela2Screen'

import { Container, Menu, PageBody } from './AppStyled'

import  MenuItem  from './components/MenuItem'
import PriveteRoute from './components/PriveteRoute'

import Cart from './components/Cart'


export default () => {
  const name = useSelector((state) => state.user.name)

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem title="Loja" icon="/assets/store.png" link="/" />
          <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
          <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile" />
        </Menu>
        <PageBody>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <PriveteRoute path="/orders">
                <div>Tela de pedidos</div>
            </PriveteRoute>
            <PriveteRoute path="/profile">
                <div>Tela de perfil</div>
            </PriveteRoute>
            <Route path="/tela2/:nome">
              <Tela2Screen />
            </Route>
          </Switch>
        </PageBody>
        <Cart/>
        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  )
}
