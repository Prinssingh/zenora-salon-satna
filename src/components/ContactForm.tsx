"use client";

import React, { useId, useRef, useState } from "react";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

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
import { sendMail } from "@/service/mail";

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

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

    try {
      const message = `
*New Contact Form Submission from website *

 Name: ${data.name}
 Email: ${data.email}
 Subject: ${data.subject}

 Message:
${data.message}
`;

      const whatsappUrl = `https://wa.me/919753454519?text=${encodeURIComponent(
        message,
      )}`;

      window.open(whatsappUrl, "_blank");

      toast.success("Redirecting to WhatsApp...");

      form.reset();
      onSuccess?.();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl bg-golden border border-golden/20">
      <div className="p-6 md:p-8">
        <h2 className="text-3xl font-bold text-black mb-6">Get in Touch</h2>

        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      id={nameId}
                      placeholder="Enter your name"
                      className="h-12 border-neutral-700 bg-gray-50!"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                      placeholder="Enter your email"
                      className="h-12 border-neutral-700 bg-gray-50!"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      id={subjectId}
                      placeholder="Enter subject"
                      className="h-12 border-neutral-700 bg-gray-50!"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      id={messageId}
                      rows={6}
                      placeholder="Enter your message"
                      className="border-neutral-700 resize-none bg-gray-50!"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer h-12 bg-white text-black rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all disabled:opacity-50"
            >
              <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>

              <Send className="h-4 w-4" />
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
}

function generateEmailHtml(data: any) {
  return ` 
    <div style="font-family:Arial,sans-serif;padding:20px;">
      <h2>New Contact Form Submission</h2>

      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>

      <hr />

      <p>
        Submitted on:
        ${new Date().toLocaleString()}
      </p>
    </div>
  `;
}
