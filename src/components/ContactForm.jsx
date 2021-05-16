import React from 'react';
// https://medium.com/@placidowang/how-to-add-an-email-form-to-your-react-website-for-free-using-emailjs-and-react-hook-form-7267d6365291

const ContactForm = () => {
  return (
    <div style={styles.container} id='contact'>
      <form id='contact-form' style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <input type='text' name='user_name' placeholder='Name' style={styles.input} />
          <br />
          <input type='email' name='user_email' placeholder='Email' style={styles.input} />
          <br />
          <input type='submit' value='Send' style={styles.button} />
        </div>
        <div>
          <textarea name='message' placeholder='Message' style={{ ...styles.input, height: 200 }} />
          <br />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    marginBottom: 50,
  },
  input: {
    padding: 10,
    borderRadius: 5,
    margin: 25,
    fontSize: 15,
  },
  button: {
    padding: '10px 15px',
    borderRadius: 10,
    backgroundColor: '#50df40',
    color: 'white',
    border: 'none',
    fontWeight: 'bold',
    boxShadow: '0 0 2px 1px black',
  },
};
