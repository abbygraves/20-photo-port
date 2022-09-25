function ContactForm() {
  // JSX
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        {/* NAME INPUT  */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        {/* EMAIL INPUT  */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        {/* MESSAGE TEXT AREA */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
