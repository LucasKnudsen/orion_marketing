import React from 'react'
import about from '../assets/about.png'

const About = () => {
  return (
    <div style={styles.container}>
      <div style={{ flex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={about} alt='about' style={{ height: '25vw' }} />
      </div>
      <div style={{ flex: 2, paddingRight: 50, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <p>Who are we?</p>
        <h1 style={{ textTransform: 'uppercase' }}>We offer <em style={{ textDecoration: 'underline' }}>professional</em> protection</h1>
        <br />
        <p>We have been in business for the last 25 years in investment funds and capital markets industry holding both DFC (Derivatives Fundamentals)
        and FLC (Futures Licensing) designations. Exclusively focused on trade forecasting, adjustments and hedging options risk.
        </p>
        <br />
        <p>We own a fund in Copenhagen to service clients in Europe and same in Toronto to service North America</p>
        <br />
        <p>We <b>believe</b> it is time to offer same professional protection for retail investors and give the opportunity in a simple and easy way to gain the same professional protection as the wealthiest people out there.</p>
        <p>On top of <b>easy</b>, we will also make it <b>very affordable</b> for everybody. Try it for <b>FREE</b>. Download our App <a href='/'>here</a></p>
      </div>
    </div>
  )
}

export default About

const styles = {
  container: {
    display: 'flex',
    marginBottom: 50,
  }
}