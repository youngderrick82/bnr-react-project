import { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContainer,
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import ContactForm from "../components/contactform";

function ContactUs() {
  return (
    <div className="container">
      <h1>Contact Black Nerd Rises</h1>
      <p>
        Got questions? Need details? Or just want to share some love? We’re all
        ears! Drop us a line right here, and we’ll get back to you faster than a
        ninja in a manga! We're keen to hear about your experiences, answer your
        queries, and celebrate nerd culture together. We typically respond
        within 24 to 48 hours, so hang tight - we’re on it!
      </p>
      <hr className="divider"></hr>
      <div className="reach-out">
      <h2>**Why Reach Out?**</h2>
      <p className="t-center">
        You're interested in booking us for a con or an event.
      </p>
      <p className="t-center">
        You have a stellar content idea you think we should hear about.
      </p>
      <p className="t-center">
        You're curious about our merch, or there's something you need help with.
      </p>
      <p className="t-center">
        You want to share your experiences or show us some love.
      </p>
      <p className="t-center">
        You have general questions about who we are and what we do.
      </p>

      <p className="t-center">Whatever it is, don't hesitate to get in touch!</p>
      </div>

      <hr className="divider"></hr>
      
      <ContactForm />

    </div>
  );
}

export default ContactUs;
