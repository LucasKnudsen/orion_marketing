import React from 'react'
import ChooseStock from './ChooseStock'

const steps = [
  { title: 'Download App', content: 'Download our app from Google Play or App Store' },
  { title: 'Write Amount ($)', content: 'How much do you plan to invest in the stock?' },
  { title: 'Select Stock', content: 'Choose your own favourite stock or one of our recommended ones' },
  { title: 'Protect', content: 'Review our guide of how to protect that stock along automatic notifications' },
]

const HowTo = () => {
  return (
    <div style={styles.container} id='howTo'>
      <p>Try it for free!</p>
      <h1 style={{ textTransform: 'uppercase' }}>How it <em style={{ textDecoration: 'underline' }}>Works</em></h1>
      <div style={styles.steps}>
        <div style={{borderTop: '1px solid lightgrey', width: '80%', position: 'absolute', marginTop: 25, zIndex: -1}}></div>
        {steps.map((step, i) => (
          <div style={styles.step}>
            <h1 style={styles.stepNum}>{i + 1}</h1>
            <h4>{step.title}</h4>
            <p style={{ marginTop: 10 }}>{step.content}</p>
          </div>
        ))}
      </div>
      <ChooseStock />
    </div>
  )
}

export default HowTo

const styles = {
  container: {
    padding: '0 20%',
    width: '100%'
  },
  steps: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingRight: 25
  },
  stepNum: {
    backgroundColor: '#174e70',
    color: 'white',
    borderRadius: '50%',
    alignSelf: 'center',
    textAlign: 'center',
    width: 50,
    height: 50,
    marginBottom: 25,
  }
}
