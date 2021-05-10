import React from 'react'
import divider from '../assets/divider.png'
import Button from '@material-ui/core/Button';

const HustleDivider = () => {
  return (
    <div style={styles.container}>
      <div>
        <h1 style={{ textTransform: 'uppercase', color: 'white' }}>Side <em style={{ textDecoration: 'underline' }}>Hustle</em></h1>
        <p style={{color: 'white', opacity: 0.6}}>Join and help us spread the word</p>
      </div>
      <div>
        <Button style={styles.button}>Earn 30% - Join Us Now</Button>
      </div>
    </div>
  )
}

export default HustleDivider

const styles = {
  container: {
    marginBottom: 50,
    display: 'flex',
    minHeight: 200,
    maxHeight: 271,
    padding: '0 20%',
    background: `url(${divider})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#50df40',
    marginTop: 10,
    color: 'white',
    borderRadius: 15,
    padding: 15,
    fontSize: 17
  }
}