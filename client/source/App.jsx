import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { HomePageDesktop } from './pages/home.desktop';
import { HomePageMobile } from './pages/home.mobile';

const Header = styled.header`
  width: 100%;
  height: 4rem;
  box-shadow: rgba(0, 174, 239, 0.1) 0px 0.714286rem 1.42857rem 0px;
  background: #00aeef;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 2rem;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header>
          React AW Starter
        </Header>
        {
          this.props.config.deviceType === 'desktop' ? <HomePageDesktop /> : <HomePageMobile />
        }
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    config: state.core.config
  };
};

export default connect(mapStateToProps, {})(App);