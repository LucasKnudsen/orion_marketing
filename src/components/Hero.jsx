import React from 'react';
import { useMediaQuery } from 'react-responsive';
import gif from '../assets/giff.gif';
import appstore from '../assets/appstore.png';
import googleplay from '../assets/googleplay.png';
import background from '../assets/background.png';
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll';
import HowTo from './HowTo';

const Hero = () => {
  let isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  const styles = {
    container: {
      height: 'auto',
      display: 'flex',
      background: `url(${background})`,
      backgroundSize: isMobile ? '100vw' : '100vw 70vw',
      backgroundRepeat: 'no-repeat',
      flexWrap: 'wrap',
    },
    wrapper: {
      padding: isMobile ? '25px 25px' : '0 20%',
      marginTop: isMobile && 50,
      height: isMobile ? '100vh' : '50vw',
      display: 'flex',
      flexDirection: isMobile ? 'column-reverse' : 'row',
      alignItems: 'center',
      flex: 1,
      marginBottom: 100,
    },
    infoContainer: {
      color: '#041b20',
      flex: 1,
      textAlign: isMobile && 'center',
    },
    imgContainer: {
      flex: !isMobile && 1,
      display: 'flex',
      justifyContent: 'center',
      marginBottom: isMobile && 25,
    },
    button: {
      marginTop: 25,
      color: 'white',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: 71,
      width: 205,
    },
    img: {
      height: isMobile ? '40vh' : '40vw',
    },
  };

  return (
    <div style={styles.container} id='hero'>
      <div style={styles.wrapper}>
        <div style={styles.infoContainer}>
          <p>Try it for free!</p>
          <h1 style={{ textTransform: 'uppercase' }}>Options for everybody</h1>
          <h3
            style={{
              color: 'lightgrey',
              textTransform: 'capitalize',
            }}>
            Created to make protection easy
          </h3>
          <Link to='contact'>
            <Button
              style={{ background: `url(${googleplay})`, ...styles.button }}
            />
          </Link>
          <Link to='contact'>
            <Button
              style={{ background: `url(${appstore})`, ...styles.button }}
            />
          </Link>
        </div>
        <div style={styles.imgContainer}>
          {!isMobile && (
            <img
              src={gif}
              alt='animation'
              style={{
                opacity: 0.2,
                position: 'absolute',
                transform: 'translate(-8px, 5px)',
                zIndex: -1,
                height: '40vw',
              }}
            />
          )}
          <img src={gif} alt='animation' style={styles.img} />
        </div>
      </div>
      <HowTo />
    </div>
  );
};

export default Hero;
