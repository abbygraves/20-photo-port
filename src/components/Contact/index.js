import React, { useState } from "react";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  // HANDLES CHANGES IN THE FORM INPUTS
  /* "[e.target.name]" is used to make the property name dynamic. 
     The property name will be determined based on which form element the user types in
     allowing us to have only 1 function vs 3 (1 for each form element). 
      ⬇︎ ⬇︎ ⬇︎ */
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  // console.log(formState);

  // HANDLES FORM SUBMIT BUTTON
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // JSX
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* NAME INPUT  */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        {/* EMAIL INPUT  */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        {/* MESSAGE TEXT AREA */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
