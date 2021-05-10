import React from 'react'
import divider from '../assets/divider.png'
import ulla from '../assets/ulla.png'
import play from '../assets/playbutton.png'

const UllaDivider = () => {
  return (
    <div style={styles.container}>
      <div style={styles.infoWrapper}>
        <h1 style={{ textTransform: 'uppercase', color: 'white' }}>Watch <em style={{ textDecoration: 'underline' }}>Video</em> Presentation</h1>
      </div>
      <div style={styles.imgWrapper}>
        <img src={play} alt="play" style={{ zIndex: 1, alignSelf: 'center', paddingLeft: 40, height: '70%', cursor: 'pointer' }} onClick={()=> alert('FILM')} />
        <img src={ulla} alt='ulla' style={styles.img} />
      </div>

    </div>
  )
}

export default UllaDivider

const styles = {
  container: {
    marginTop: 150,
    marginBottom: 50,
    display: 'flex',
    minHeight: 200,
    maxHeight: 271,
    flex: 1,
    justifyContent: 'flex-start',

    padding: '0 20%',
    background: `url(${divider})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  img: {
    height: '30vw',
    maxHeight: 300,
    position: 'absolute',

  },
  imgWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    position: 'relative'
  },
  infoWrapper: {
    alignSelf: 'center',
    width: '50%'
  }
}