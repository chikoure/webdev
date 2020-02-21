import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <Footer />
      </Aux>
    );
  }
}
