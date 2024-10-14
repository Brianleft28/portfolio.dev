import React, { useContext, useRef } from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { LangContext } from '../context/Lang';
import { text } from '../components/features/Contact/Text';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { lang } = useContext(LangContext);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_kmzigd4',
          'template_r04r9ir',
          form.current,
          'Ku5T6ti6-MJdSRcB5'
        )
        .then(
          (result) => {
            console.log(result.text);
            alert('Message sent successfully!');
          },
          (error) => {
            console.log(error.text);
            alert('Failed to send the message, please try again.');
          }
        );
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-ee-3xl shadow-lg flex bg-gradient-to-br from-background/25 via-background/10 to-background/25 flex-col justify-center p-6"
      >
        <h2 className="text-3xl font-bold mb-4 text-center md:text-start">
          {text[0][lang].textCard.title}
        </h2>
        <p className="text-lg text-foreground mb-8 text-center">
          {text[0][lang].textCard.paragraph}
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4"
        >
          <Input
            variant="underlined"
            fullWidth={true}
            color="secondary"
            size="lg"
            placeholder={text[0][lang].inputs.name}
            name="user_name"
          />
          <Input
            variant="underlined"
            fullWidth={true}
            color="secondary"
            size="lg"
            placeholder={text[0][lang].inputs.email}
            name="user_email"
          />
          <Textarea
            variant="underlined"
            fullWidth={true}
            color="secondary"
            size="lg"
            placeholder={text[0][lang].inputs.message}
            name="message"
          />
          <Button
            className="rounded-ee-lg"
            type="submit"
            color="secondary"
            radius="none"
            variant="ghost"
          >
            {text[0][lang].button.sendEmail}
          </Button>
        </form>

        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="https://www.linkedin.com/in/brian-benegas-44770729b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-foreground/50 hover:text-foreground/25" />
          </a>
          <a
            href="https://github.com/Brianleft28"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl text-foreground/50 hover:text-foreground/25" />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
