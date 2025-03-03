import React from 'react';

const Contact = () => {
  //update later
  return (
    <section id="contact" className="py-16 p-8 bg-[#1111]">
      <div className="container mx-auto border-t-2 border-t-black">
        {/* Get in Touch Section */}
        <h2 className="text-4xl font-bold mb-4 pt-12">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-6xl">
          Let&apos;s discuss your brand and business goals and objectives. I&apos;d love to hear from you! You have a question, project idea, or just want to say hello, feel free to drop me a message.
        </p>
        
        <a 
          href="mailto:your.email@example.com" 
          className="block text-softblue text-2xl font-semibold hover:underline break-words whitespace-normal"
        >
          Click here to email me, timothyaremu63@gmail.com
        </a>

        <div className="mt-12">
          <h3 className="text-lg font-bold mb-4">Or connect with me on</h3>
          <div className="flex font-semibold flex-col gap-6 md:flex-row md:justify-between max-w-5xl">
            <a 
              href="https://www.linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-900 text-2xl w-fit hover:border-b-softblue hover:border-b-2 "
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-700 text-2xl w-fit hover:border-b-softblue hover:border-b-2"
            >
              Twitter
            </a>
            <a 
              href="https://wa.me/yourwhatsapplink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-green-700 text-2xl w-fit hover:border-b-softblue hover:border-b-2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
