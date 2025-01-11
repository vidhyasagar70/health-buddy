import React from 'react';
import './header.css';
import Headericon from './headericon';
import { BsCart3 } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src="/images/logo.svg" className="logo" alt="MediaBuddy" />
        </div>
        <div className="icons-container">
          <CiWallet className="icon" />
          <BsCart3 className="icon" />
        </div>
      </header>

      <div className="search-container">
        <div className="search-wrapper">
          <CiSearch className="search-icon" />
          <input
            type="search"
            className="search-input"
            placeholder="Find lab tests, diagnostics centres"
          />
        </div>
      </div>
      <Headericon/>
    </div>
  );
}

export default Header;
