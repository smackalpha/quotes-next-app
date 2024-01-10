import React from 'react'

const ContactPage = () => {
  return (
    <div style={{textAlign:"center"}}>
    <h1>Contact Us</h1>
    <p>If you have any questions, feedback, or would like to get in touch with the Quotes App team, please use the form below. We value your input and will respond as soon as possible.</p>
    
    <form>
      <label htmlFor="name">Name:</label><br />
      <input type="text" id="name" name="name" placeholder="Your Name" required /><br />
      
      <label htmlFor="email">Email:</label><br />
      <input type="email" id="email" name="email" placeholder="Your Email" required /><br />
      
      <label htmlFor="message">Message:</label><br />
      <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea><br />
      
      <button type="submit">Send Message</button>
    </form>
    
    <div>
      <h2>Other ways to reach us:</h2>
      <p><strong>Email:</strong> support@quotesapp.com</p>
      <p><strong>Twitter:</strong> @QuotesAppSupport</p>
    </div>
  </div>
  )
}

export default ContactPage