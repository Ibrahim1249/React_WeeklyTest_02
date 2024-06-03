import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';

function Contact() {
  return (
    <>
        <h1 className="text-center text-4xl text-white bg-[#0E182C] 2xl:w-4/6 xl:w-[75%] w-[100%] mx-auto underline" id="contact">Contact</h1>
      <div className="contact-container px-16 py-16 bg-[#0E182C] 2xl:w-4/6 xl:w-[75%] w-[100%] mx-auto text-[#F3F4F6]">
        <h1 className=" mb-6 text-4xl">Let's Get in Touch: Ways to Connect with Me</h1>
        <p>
          Thank you for your interest in getting in touch with me. I welcome
          your feedback, questions, and suggestions. If you have a specific
          question or comment, please feel free to email me directly at
          dummy@gmail.com. I make an effort to respond to all
          messages within 24 hours, although it may take me longer during busy
          periods. Finally, if you prefer to connect on social media, you can
          connect with me using the social media links below.
        </p>
        <div className="social-icon mt-4">
            <div className="icon flex gap-4 mb-3  cursor-pointer">
        
            <a href="https://www.linkedin.com/in/ibrahim-momin-a7761a1aa/" target="_blank"><LinkedInIcon /></a>
            <a  href="https://www.linkedin.com/in/ibrahim-momin-a7761a1aa/" target="_blank"><p>LinkedIn</p></a>
           
            </div>
            <div className="icon flex gap-4 mb-3 cursor-pointer">
           
            <a href="https://github.com/Ibrahim1249" target="_blank"> <GitHubIcon /> </a>
                <a href="https://github.com/Ibrahim1249" target="_blank" ><p>Github</p></a>
            </div>
            <div className="icon flex gap-4 mb-3 cursor-pointer">
                <EmailIcon />
                <p>Email</p>
            </div>
            <div className="icon flex gap-4 mb-3 cursor-pointer">
                <XIcon />
                <p>Twitter</p>
            </div>
            <hr  className="my-4"/>
        </div>

        <p className="text-center">© 2024 Ibrahim Momin. All Rights Reserved</p>
      </div>
    </>
  );
}

export default Contact;
