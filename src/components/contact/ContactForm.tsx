"use client";
import React, { useState, useId, useRef } from "react";
import { Send, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormDataType, formSchema } from "@/lib/validation";
import { contactInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import { sendMail } from "@/service/mail";

interface ContactFormProps {
  blogDetailsForm?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ blogDetailsForm }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const location = usePathname();

  const form = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormDataType) => {
    setIsSubmitting(true);
    const toastId = toast.loading("Sending message...");

    try {
      if (!formRef.current) throw new Error("Form reference is not available");

      const htmlBody = generateEmailHtml(data);
      const isSent = await sendMail("New contact from website", htmlBody);
      if (!isSent) throw new Error();

      toast.success("Message sent successfully!", { id: toastId });
      form.reset();
    } catch (error: any) {
      toast.error(
        error?.text ||
          error?.statusText ||
          "Failed to send message. Check keys or network.",
        { id: toastId }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isBlogForm = blogDetailsForm ?? false;

  return (
    <div
      className={cn(
        isBlogForm
          ? ""
          : location === "/"
          ? "text-black bg-white"
          : " text-white relative bg-white"
      )}
    >
      {!isBlogForm && location !== "/" && (
        <div className="absolute inset-0 bg-cover bg-center  min-h-[100vh] h-full ">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-linear(45deg, transparent, transparent 35px, rgba(217, 119, 6, 0.1) 35px, rgba(217, 119, 6, 0.1) 70px)`,
              }}
            ></div>
          </div>
        </div>
      )}
      {/* <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact Us</h1> */}
      <div
        className={cn(
          isBlogForm
            ? ""
            : location === "/"
            ? " py-0 lg:py-0 !px-5 "
            : "max-w-7xl mx-auto   py-10 lg:py-30 !px-6"
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}

          {/* Contact Info */}
          {!isBlogForm && (
            <div className="lg:space-y- space-y-3 relative">
              {!isBlogForm && (
                <div className="absolute -inset-4 bg-linear-to-r from-golden/20 to-golden/20 rounded-3xl "></div>
              )}
              {/* Business Hours */}
              <div className="bg-linear-to-br  from-golden to-golden rounded-2xl shadow-xl p-5 text-black">
                <div
                  className={cn(
                    "flex items-center space-x-2 mb-3",
                    location === "/" ? "" : ""
                  )}
                >
                  <Clock className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span className="font-semibold">9am - 8pm</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">9am - 9pm</span>
                  </div>
                </div>
              </div>

              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={cn(
                    location === "/"
                      ? "border border-golden/20 rounded-2xl shadow-lg p-4 hover:shadow-amber-500/40 transform hover:-translate-y-1 transition-all duration-300 relative mb-2 bg-golden"
                      : "border border-golden/20 rounded-2xl shadow-lg p-4 hover:shadow-amber-500/40 transform hover:-translate-y-1  bg-linear-to-br  from-golden to-golden transition-all duration-300 relative mb-2"
                  )}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={cn(
                        location === "/"
                          ? "bg-white p-4 rounded-xl"
                          : "bg-white p-4 rounded-xl"
                      )}
                    >
                      <info.icon
                        className={cn(
                          location === "/"
                            ? "text-black"
                            : "w-6 h-6 text-golden"
                        )}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 cursor-pointer">
                        {info.title === "+91 97534 54519" ? (
                          <a
                            href="tel:+919753454519"
                            className={cn(
                              location === "/"
                                ? " text-black font-medium "
                                : "text-black font-medium"
                            )}
                          >
                            +91 97534 54519
                          </a>
                        ) : (
                          <div
                            className={cn(
                              location === "/"
                                ? "text-black   font-medium"
                                : "text-black font-medium"
                            )}
                          >
                            {info.title}
                          </div>
                        )}
                      </h3>
                      <p
                        className={cn(
                          location === "/"
                            ? "text-gray-200  text-sm leading-relaxed"
                            : "text-gray-200 text-sm leading-relaxed"
                        )}
                      >
                        {info.subtitle} 
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Contact Cards */}
          <div
            className={cn(
              isBlogForm ? "col-span-4 mt-20 " : "lg:col-span-2 relative"
            )}
          >
            <div
              className={cn(
                isBlogForm
                  ? "bg-white rounded-2xl border border-gray-200 shadow-xl transition-all duration-300"
                  : location === "/"
                  ? "relative bg-golden rounded-2xl border border-golden/20 transition-all duration-300"
                  : "relative bg-golden backdrop-blur-xl rounded-2xl border border-golden/20 transition-all duration-300"
              )}
            >
              {!isBlogForm && (
                <div className="absolute -inset-4 bg-linear-to-r from-golden/20 to-golden/20 rounded-3xl "></div>
              )}

              <div className="p-3 md:p-8">
                <h1
                  className={cn(
                    "text-2xl md:text-3xl font-bold mb-5",
                    location === "/" ? "text-black" : "text-black"
                  )}
                >
                  {isBlogForm ? "Leave a Reply" : "Get in Touch "}
                </h1>

                <Form {...form}>
                  <form
                    ref={formRef}
                    className="lg:space-y-8 space-y-4"
                    onSubmit={form.handleSubmit(onSubmit)}
                  >
                    {/* Name */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              id={nameId}
                              type="text"
                              placeholder="Enter your name"
                              className={
                                isBlogForm
                                  ? "w-full px-4 py-6 bg-transparent border-2 border-gray-200 rounded-xl focus:border-gray-950 focus:ring-4 focus:ring-gray-950 transition-all duration-200 text-white placeholder-gray-500"
                                  : location === "/"
                                  ? // from-golden to-golden
                                    "w-full px-4 py-6 bg-transparent border-2 border-neutral-700 rounded-xl focus:border-golden focus:ring-4 focus:ring-amber-100 transition-all duration-200 text-white! placeholder-gray-300! relative  "
                                  : "w-full px-4 py-6 bg-transparent border-2 border-neutral-700 rounded-xl focus:border-golden focus:ring-4 focus:ring-amber-100 transition-all duration-200 text-white placeholder-gray-500 relative"
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              id={emailId}
                              type="email"
                              placeholder="Email"
                              className={
                                isBlogForm
                                  ? "w-full px-4 py-6 bg-transparent border-2 border-gray-200 rounded-xl  focus:border-gray-950 focus:ring-4 focus:ring-gray-950  transition-all duration-200 text-white placeholder-gray-500"
                                  : location === "/"
                                  ? "w-full px-4 py-6 bg-transparent border-2 border-neutral-700 rounded-xl focus:border-golden focus:ring-4 focus:ring-amber-100 transition-all duration-200 text-white! placeholder-gray-300! relative"
                                  : "w-full px-4 py-6 bg-transparent border-2 border-neutral-700 rounded-xl focus:border-golden focus:ring-4 focus:ring-amber-100 transition-all duration-200 text-white placeholder-gray-500 relative"
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Subject */}
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="lg:mb-7 mb-4">
                          <FormControl>
                            <Input
                              {...field}
                              id={subjectId}
                              type="text"
                              placeholder="Enter Subject"
                              className={
                                isBlogForm
                                  ? "w-full px-4 py-6 bg-transparent border-2 border-gray-200 rounded-xl focus:border-golden focus:ring-4 focus:ring-amber-100 transition-all duration-200 text-white placeholder-gray-500"
                                  : location === "/"
                                  ? "w-full px-4 py-6 bg-transparent border-2 border-neutral-700 rounded-xl focus:border-gray-950 focus:ring-4 focus:ring-gray-950 transition-all duration-200 text-white! placeholder-gray-300! relative"
                                  : "w-full px-4 py-6 bg-transparent border-2 border-neutral-700 rounded-xl focus:border-golden focus:ring-4 focus:ring-amber-100 transition-all duration-200 text-white placeholder-gray-500 relative"
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormControl>
                            <Textarea
                              {...field}
                              id={messageId}
                              placeholder="Enter Message"
                              rows={6}
                              className={
                                isBlogForm
                                  ? "w-full px-4 py-6 bg-transparent border-2 border-gray-200 rounded-xl focus:border-gray-950 focus:ring-4 focus:ring-gray-950 transition-all duration-200 text-white placeholder-gray-500"
                                  : location === "/"
                                  ? "w-full px-4 py-6 bg-transparent border-2 border-neutral-700 rounded-xl focus:border-golden focus:ring-4 focus:ring-amber-100 transition-all duration-200 text-white! placeholder-gray-300! relative"
                                  : "w-full px-4 py-6 bg-transparent border-2 border-neutral-700 rounded-xl focus:border-golden focus:ring-4 focus:ring-amber-100 transition-all duration-200 text-white placeholder-gray-500 relative"
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="!w-full flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={
                          isBlogForm
                            ? "group w-full lg:w-auto justify-center relative cursor-pointer px-8 py-2.5 bg-linear-to-r from-golden to-golden text-white font-semibold rounded-xl hover:from-golden hover:to-golden transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                            : location === "/"
                            ? "group w-full lg:w-auto justify-center relative cursor-pointer px-8 py-2.5 !bg-white text-black font-semibold rounded-xl hover:bg-white! transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                            : "group w-full lg:w-auto justify-center relative cursor-pointer px-8 py-2.5 !bg-white text-black font-semibold rounded-xl hover:bg-white! transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                        }
                      >
                        <span>{isSubmitting ? "SENDING..." : "SEND"}</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {!isBlogForm && location !== "/" && (
        <div className="relative bg-linear-to-br py-10 from-neutral-900/80 px-2 via-black/80 to-zinc-900 text-white overflow-hidden">
          <h1 className="text-center p-10 font-bold text-4xl text-golden">
            Find Us
          </h1>
          <div className="mb-8 max-w-7xl mx-auto rounded-2xl lg:px-0  overflow-hidden shadow-2xl border border-golden/30">
            <div className="rounded-xl h-64 md:h-96 flex items-center justify-center relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116129.13824641498!2d80.77115093906251!3d24.553432888129663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f001afef357%3A0x3bedce5534666dad!2sZenora%20Unisex%20Family%20Salon%20%7C%20Satna!5e0!3m2!1sen!2sin!4v1764401640428!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
  //EMAIL FORMATTING
  function generateEmailHtml(data:any) {
    return `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #2b6cb0;">New Contact Form Submission</h2>

      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 150px;">Name:</td>
          <td style="padding: 8px;">${data.name}</td>
        </tr>

        <tr style="background: #f8f8f8;">
          <td style="padding: 8px; font-weight: bold;">Email:</td>
          <td style="padding: 8px;">${data.email}</td>
        </tr>

        <tr>
          <td style="padding: 8px; font-weight: bold;">Phone:</td>
          <td style="padding: 8px;">${data.phone}</td>
        </tr>

        <tr style="background: #f8f8f8;">
          <td style="padding: 8px; font-weight: bold;">Subject:</td>
          <td style="padding: 8px;">${data.subject}</td>
        </tr>

        <tr>
          <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td>
          <td style="padding: 8px; white-space: pre-line;">${data.message}</td>
        </tr>
      </table>

      <p style="margin-top: 25px; font-size: 12px; color: #777;">
        Submitted on: ${new Date().toLocaleString()}
      </p>
    </div>
  `;
  }

export default ContactForm;
