"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:nicmocard@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
  };

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nicolemorcar", icon: "💼" },
    { label: "Instagram", href: "https://www.instagram.com/nicolemorcar/", icon: "📸" },
    { label: "GitHub", href: "https://github.com/NicoleMCardenas", icon: "💻" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-zinc-200 px-6">
      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 text-zinc-400 hover:text-white transition text-sm flex items-center gap-2"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">
        Get in Touch ✉️
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-800/40 rounded-xl border border-zinc-700 p-8 flex flex-col gap-5 hover:border-zinc-500 transition"
        >
          <p className="text-zinc-300 text-sm">
            Please fill out the form below to send me an email — I’ll get back to you as soon as possible.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 bg-zinc-900 border border-zinc-700 rounded-md text-white focus:outline-none focus:border-zinc-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 bg-zinc-900 border border-zinc-700 rounded-md text-white focus:outline-none focus:border-zinc-400"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="p-3 bg-zinc-900 border border-zinc-700 rounded-md text-white focus:outline-none focus:border-zinc-400 resize-none"
            required
          />

          <button
            type="submit"
            className="w-fit px-6 py-3 mt-2 border border-zinc-400 text-white rounded-md hover:bg-white hover:text-black transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Socials */}
        <div className="flex flex-col justify-between gap-8">
          {/* Location */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Contact Info</h3>
            <p className="text-zinc-400">📍 México</p>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Find me on</h3>
            <div className="flex items-center gap-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center text-center text-zinc-300 hover:text-white transition transform hover:scale-105"
                >
                  <div className="text-4xl mb-2">{social.icon}</div>
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
