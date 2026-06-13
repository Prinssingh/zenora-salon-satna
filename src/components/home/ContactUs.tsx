"use client"
import React from 'react'
import ContactForm from '../contact/ContactForm'

export default function ContactUs() {
  

  return (
    <section className=" bg-white py-10 ">
      {/* <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact Us</h1> */}
      <div className="flex justify-center hover:scale-105 transition-all ease-in-out duration-300 mb-6">
        <span className="inline-block px-4 sm:px-6 py-2 text-sm font-semibold tracking-wide uppercase rounded-full bg-linear-to-r from-golden to-golden/90 text-gray-50">
          Contact Us
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl text-black mt-5 lg:text-6xl font-black uppercase leading-tight text-center mb-12 ">
        Contact Us
        <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-golden to-golden/90">
          Let’s Connect
        </span>
        <div className="w-20 h-1 bg-linear-to-r from-transparent via-golden to-transparent mx-auto mt-4"></div>
      </h2>
      <ContactForm />
    </section>
  );
}
