import React from 'react'
import divider from '../assets/divider.png'
import Button from '@material-ui/core/Button';

const BottomDivider = () => {
  return (
    <div style={styles.container}>
    </div>
  )
}

export default BottomDivider

const styles = {
  container: {
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
}