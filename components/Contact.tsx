import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mldelqdo");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '33%', margin: '0 auto', padding: '1rem', borderRadius: '8px', backgroundColor: 'rgba(51, 51, 51, 0.8)' }}>
      <label htmlFor="email">
        Email Address:
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        style={{ opacity: 0.7 }}
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message" style={{ marginTop: '1rem' }}>
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        style={{ opacity: 0.7 }}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} style={{ marginTop: '1rem', opacity: 1 }}>
        Submit
      </button>
    </form>
  );
}