import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const ContactMeLeft = () => {
  const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_3zc48ee', 'template_esgtlvo', form.current, {
      publicKey: 'XkA69SFjQZahOB6Np',
    })
    .then(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thanks for reaching out. I’ll reply as soon as possible.',
          confirmButtonColor: '#06b6d4',
          showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp animate__faster'
          }
        });
        form.current.reset();
      },
      (error) => {
        console.error('FAILED...', error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later.',
          confirmButtonColor: '#f43f5e',
          showClass: {
            popup: 'animate__animated animate__shakeX animate__faster'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp animate__faster'
          }
        });
      }
    );
};
  return (
    <div className="w-full max-w-lg mx-auto">
      <div>
        <h2 className="text-orange-400 font-bold text-3xl mb-6">Get In Touch</h2>
        <p className="text-white text-lg leading-relaxed">
          Feel free to reach out if you'd like to collaborate.<br />
          You’re just a few clicks away!
        </p>
      </div>

      {/* ✅ FORM FIXED HERE */}
      <form ref={form} onSubmit={sendEmail} className="mt-10 space-y-6">
        <input
          type="text"
          placeholder="Your Full Name"
          name="name"
          required
          className="w-full p-3 rounded-xl bg-rose-700 text-white placeholder-gray-200 border border-amber-100 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <input
          type="email"
          placeholder="Your Email"
          name="email"
          required
          className="w-full p-3 rounded-xl bg-rose-700 text-white placeholder-gray-200 border border-amber-100 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <textarea
          placeholder="Your Message"
          name="message"
          rows={5}
          required
          className="w-full p-3 rounded-xl bg-rose-700 text-white placeholder-gray-200 border border-amber-100 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded-xl hover:from-orange-500 hover:to-pink-600 transition-all font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMeLeft;
