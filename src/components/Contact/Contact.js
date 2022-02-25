import React from "react";

function Contact() {
  return (
    <div className="ContactSection" name="contact">
      <div className="ContactMessage">
        <h1 className="SubTitle Big"> I'd love to hear from you</h1>
        <p className="Description">
          For job inquiries or any questions please feel free to send me a
          message and I'll get back to you as soon as possible.
        </p>
      </div>
      <form
        className="ContactForm"
        action="https://formsubmit.co/colewinslow174@gmail.com"
        method="POST"
      >
        <input
          className="Email"
          type="email"
          name="email"
          placeholder="Enter Your Email Address"
        />
        <textarea
          className="EmailBody"
          type="text"
          name="Message Body"
          placeholder="Enter Your Message Here"
          required
        ></textarea>
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://colewinslowportfolio.netlify.app/"
        />
        <button className="Btn CTA" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;