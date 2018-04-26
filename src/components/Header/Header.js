import React, { Component } from 'react';
import '../../styles/header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__inner">
          <div>SoundCloud-Client</div>
          <div>Deep Hous</div>
          <div>登录</div>
        </div>
      </div>
    )
  }
}

export default Header;