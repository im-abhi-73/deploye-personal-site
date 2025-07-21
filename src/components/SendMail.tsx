import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const SendMail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lmfwble',     // ✅ from EmailJS dashboard
        'template_z9rh4de',    // ✅ from EmailJS dashboard
        form.current,
        'ODVngCDAuz8JnKtym'      // ✅ from EmailJS dashboard
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen px-6 py-10 font-mono text-gray-800 bg-white">
      <div className="max-w-xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center">Send Me a Message</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="px-6 py-2 text-white bg-black rounded hover:bg-gray-800"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMail;
