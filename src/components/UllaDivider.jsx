import React, { useState } from 'react'
import divider from '../assets/divider.png'
import ulla from '../assets/ulla.png'
import infovideo from '../assets/infovideo.mp4'
import play from '../assets/playbutton.png'

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const UllaDivider = () => {
  const [open, setOpen] = useState(false)

  return (
    <div style={styles.container}>
      <div style={styles.infoWrapper}>
        <h1 style={{ textTransform: 'uppercase', color: 'white' }}>Watch <em style={{ textDecoration: 'underline' }}>Video</em> Presentation</h1>
      </div>
      <div style={styles.imgWrapper}>
        <img src={play} alt="play" style={{ zIndex: 1, alignSelf: 'center', paddingLeft: 40, height: '70%', cursor: 'pointer' }} onClick={() => setOpen(true)} />
        <img src={ulla} alt='ulla' style={styles.img} />
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={styles.modal}>
            <video src={infovideo} controls style={styles.video}/>
          </div>
        </Fade>
      </Modal>
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
  },
  modal: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid white'
  },
  video: {
    width: '60vw',
  }
}