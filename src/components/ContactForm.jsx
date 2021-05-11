import React from 'react'
// https://medium.com/@placidowang/how-to-add-an-email-form-to-your-react-website-for-free-using-emailjs-and-react-hook-form-7267d6365291

const ContactForm = () => {
  return (
    <div style={styles.container}>
      <form id='contact-form'>
        <input type='text' name='user_name' placeholder='Name' />
        <br />
        <input type='email' name='user_email' placeholder='Email' />
        <br />
        <textarea name='message' placeholder='Message' />
        <br />
        <input type='submit' value='Send' />
      </form>
    </div>
  )
}

export default ContactForm

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    marginBottom: 50,
  }

}