'use client';
import React, { useRef, useState } from 'react';
import './index.css';
import { Container, Text, TextInput, Textarea, Button, Title } from '@mantine/core';
import emailjs from "@emailjs/browser";

export default function ContactSection() {
    const refForm = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                refForm.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
            )
            .then(
                () => {
                    alert("Message successfully sent! I will get back to you within 1 to 2 business days.");
                    refForm.current.reset();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                },
                (error) => {
                    console.error('Failed to send email:', error);
                    alert("Failed to send the message, please try again");
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contactContainer">
            <Container className="contactInner">
                <div className='contactHeader'>
                    <Title className="gradientTitle">
                        Thanks for viewing my portfolio!
                    </Title>
                    <div style={{max:'2'}} >
                        <Text className="contactSubtitle">
                            I'm always eager to hear from you, whether it's a question, feedback, potential collaboration, or even just to make a new friend. Please feel free to reach out by filling out the form below. I look forward to hearing from you and will get back to you as soon as possible.
                        </Text>
                    </div>
                </div>
                <form className="contactForm" ref={refForm} onSubmit={sendEmail}>
                    <div className="formGroup">
                        <label>Name</label>
                        <TextInput
                            name="user_name"
                            placeholder="Your Name"
                            className="formInput"
                            required
                        />
                    </div>

                    <div className="formGroup">
                        <label>Email</label>
                        <TextInput
                            name="user_email"
                            placeholder="contact@example.com"
                            type="email"
                            className="formInput"
                            required
                        />
                    </div>

                    <div className="formGroup">
                        <label>Message</label>
                        <Textarea
                            name="message"
                            placeholder="Your message here..."
                            minRows={4}
                            className="formInput"
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="sendButton"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </Button>
                </form>
            </Container>
        </div>
    );
}