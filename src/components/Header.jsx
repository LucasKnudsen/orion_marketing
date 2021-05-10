import React from 'react'

const Header = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ORION</h1>
      <p style={styles.menuButton}>Try It</p>
      <p style={styles.menuButton}>Check Value</p>
      <p style={styles.menuButton}>Side Hustle</p>
      <p style={styles.menuButton}>About</p>
      <p style={styles.menuButton}>Contact</p>

    </div>
  )
}

export default Header

const styles = {
  container: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '0 15%',
    boxShadow: '0 4px 2px -2px gray',
  },
  title: {
    fontSize: 40,
  },
  menuButton: {
    padding: '0 35px',
    cursor: 'pointer',
    fontWeight: 'bold',

  }
}