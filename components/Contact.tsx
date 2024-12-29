import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    width: '95%',
    margin: '0 auto',
  },
  input: {
    opacity: 0.7,
    minHeight: '3vh',
  },
  textarea: {
    opacity: 0.7,
    minHeight: '12vh',
  },
  label: {
    marginTop: '.5rem',
    marginBottom: '.3rem',
  },
  button: {
    marginTop: '1rem',
    opacity: 1,
    fontSize: '1rem',
    maxHeight: '2rem',
    minHeight: '2rem',
    width: '6rem',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  contactTitle: {
    display: 'flex',
    justifyContent: 'center',
    color: '#fff',
    fontFamily: 'playfair-display',
    fontSize: '2rem',
    margin: '-.2rem',
  },
};

export default function Contact() {
  const [state, handleSubmit] = useForm("mldelqdo");
  if (state.succeeded) {
    return <p>Talk soon!</p>;
  }
  return (
    <div>
      <h2 style={styles.contactTitle}>Contact</h2>
    <form onSubmit={handleSubmit} style={styles.form}>
      <label htmlFor="email" style={styles.label}>
        Email Address:
      </label>
      <input
        id="email"
        type="email"
        name="email"
        style={styles.input}
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message" style={styles.label}>
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        style={styles.textarea}
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} style={styles.button}>
        Send
      </button>
    </form>
    </div>
  );
}