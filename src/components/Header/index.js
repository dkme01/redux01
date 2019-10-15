import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Biraian Shoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>X itens</span>
        </div>
      </Cart>
    </Container>
  );
}
