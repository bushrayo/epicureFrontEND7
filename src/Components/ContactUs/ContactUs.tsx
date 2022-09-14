import React from "react";
import { useState } from "react";
import { Body, Form, Input, Textarea, Button } from "./Style";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <Body>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Your name" name="name" required />

        <Input type="email" placeholder="Email" name="email" required />

        <Textarea placeholder="Your message" name="message" required />

        <Button type="submit">Send a message</Button>
      </Form>
    </Body>
  );
}
