import React, { useState } from 'react';
import logo from '../assets/logo.png';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [open, setOpen] = useState(false);
  let isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  const menu = () => (
    <>
      <Link to='hero'>
        <p
          style={
            isMobile ? styles.menuButtonMobile : styles.menuButtonComputer
          }>
          Download Now
        </p>
      </Link>
      <Link to='howTo' smooth={true} offset={-200}>
        <p
          style={
            isMobile ? styles.menuButtonMobile : styles.menuButtonComputer
          }>
          Check Value
        </p>
      </Link>
      <Link to='sideHustle' smooth={true}>
        <p
          style={
            isMobile ? styles.menuButtonMobile : styles.menuButtonComputer
          }>
          Side Hustle
        </p>
      </Link>
      <Link to='about' smooth={true}>
        <p
          style={
            isMobile ? styles.menuButtonMobile : styles.menuButtonComputer
          }>
          About
        </p>
      </Link>
      <Link to='contact' smooth={true}>
        <p
          style={
            isMobile ? styles.menuButtonMobile : styles.menuButtonComputer
          }>
          Contact
        </p>
      </Link>
    </>
  );

  return (
    <div style={styles.container}>
      <img src={logo} alt='logo' style={styles.img} height='40' />
      {isMobile ? (
        <>
          <IconButton
            onClick={() => setOpen(true)}
            style={{ marginLeft: '40%' }}>
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor='top'
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}>
            {menu()}
          </SwipeableDrawer>
        </>
      ) : (
        menu()
      )}
    </div>
  );
};

export default Header;

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
  menuButtonComputer: {
    padding: '0 35px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  menuButtonMobile: {
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  drawer: {},
};
