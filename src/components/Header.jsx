import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div style={styles.container}>
      <img src={logo} alt='logo' style={styles.img} height='40' />
      <Link to="hero">
        <p style={styles.menuButton}>Download Now</p>
      </Link>
      <Link to="howTo" smooth={true} offset={-200}>
        <p style={styles.menuButton}>Check Value</p>
      </Link>
      <Link to="sideHustle" smooth={true}>
        <p style={styles.menuButton}>Side Hustle</p>
      </Link>
      <Link to="about" smooth={true}>
        <p style={styles.menuButton}>About</p>
      </Link>
      <Link to="contact" smooth={true}>
        <p style={styles.menuButton}>Contact</p>
      </Link>
    </div>
  )
}

export default Header

const styles = {
  container: {
    position: 'fixed',
    backgroundColor: 'white',
    width: '100vw',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 2px -2px gray',
    zIndex: 1,
  },
  img: {
    fontSize: 40,
  },
  menuButton: {
    padding: '0 35px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
}