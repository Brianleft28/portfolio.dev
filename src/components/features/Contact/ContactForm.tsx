import { motion } from "framer-motion"
import { Lang } from "../../../context/Lang"
import { text } from "./Text";
import { useRef } from "react";
import emailjs from 'emailjs-com';
import { Button, Input, Textarea } from "@nextui-org/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ContactFormProps {
    lang: Lang;
}

const ContactForm: React.FC<ContactFormProps> = ( { lang } ) => {
    
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
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="shadow-sm flex flex-col justify-center p-6"
        >
          <h3 className="text-6xl font-secondary font-bold mb-3 text-center md:text-start">
            {text[0][lang].textCard.title}
          </h3>
          <p className="font-primary text-foreground mb-8 text-center md:text-start">
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
  )
}

export default ContactForm