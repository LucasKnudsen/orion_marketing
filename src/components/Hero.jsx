import React from 'react'
import { useMediaQuery } from 'react-responsive'
import iphone from '../assets/iphone.png'
import background from '../assets/background.png'
import Button from '@material-ui/core/Button';
import HowTo from './HowTo'

let isTabletOrMobile

const Hero = () => {
  isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })

  const styles = {
    container: {
      height: isTabletOrMobile ? '100vh' : 'auto',
      display: 'flex',
      flexDirection: isTabletOrMobile ? 'column' : 'row',
      background: `url(${background})`,
      backgroundSize: '100vw 70vw',
      backgroundRepeat: 'no-repeat',
      flexWrap: 'wrap'
    },
    infoContainer: {
      color: '#041b20',
      flex: 1,
    },
    imgContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    },
    button: {
      backgroundColor: '#50df40',
      marginTop: 10,
      color: 'white'
    },
    img: {
      height: '40vw'
    }
  }

  return (
    <div style={styles.container}>
      <div style={{ padding: '0 20%', height: '50vw', display: 'flex', alignItems: 'center', flex: 1, marginBottom: 100 }}>
        <div style={styles.infoContainer}>
          <p>Try it for free!</p>
          <h1 style={{ textTransform: 'uppercase' }}>Options for everybody</h1>
          <h3 style={{ color: 'lightgrey', textTransform: 'capitalize' }} >Created to make protection easy</h3>
          <Button style={styles.button}>Try the App</Button>
        </div>
        <div style={styles.imgContainer}>
          <img src={iphone} alt='animation' style={styles.img} />
        </div>
      </div>
      <HowTo />
    </div>
  )
}

export default Hero



