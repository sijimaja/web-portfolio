import React, { useRef, useState } from 'react';
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);  // Track submission state

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_u2dgkyh",
      "template_f4j0d21",
      form.current,
      { publicKey: "TD6ZKD9AZWn4TOSFD" }
    ).then(
      () => {
        console.log("SUCCESS!");
        form.current.reset();  // Reset the form after successful sending
        setFormSubmitted(true);  // Update the state to indicate submission

        // Reset the submission state after 5 seconds
        setTimeout(() => setFormSubmitted(false), 5000);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <form ref={form} onSubmit={sendEmail} className="contact__content__form">
          <div className="contact__content__form__controlswrapper">
            <div>
              <input
                required
                name="user_name"
                className="inputName"
                type="text"
              />
              <label htmlFor="name" className="nameLabel">
                Name
              </label>
            </div>
            <div>
              <input
                required
                name="user_email"
                className="inputEmail"
                type="text"
              />
              <label htmlFor="email" className="emailLabel">
                Email
              </label>
            </div>
            <div>
              <textarea
                required
                name="message"
                className="inputDescription"
                type="text"
                rows="5"
              />
              <label htmlFor="description" className="descriptionLabel">
                Description
              </label>
            </div>
          </div>
          <input type="submit" value="Send" />
          {formSubmitted && (
            <p className="success-message">Thank you! Your message has been sent.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
