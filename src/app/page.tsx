"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendData = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!name.trim() || !email.trim()) {
      alert("Please enter both your name and email.");
      return;
    }

    setLoading(true);

    try {
      // Only send variables that exist in your EmailJS template
      await emailjs.send(
        "service_bbz1ult",      // Your Service ID
        "template_4h7l0cn",     // Your Template ID
        {
          name: name,
          email: email,
        },
        "9yZJHMeU1AAaMIju6"     // Your Public Key
      );

      alert("Email sent successfully!");
      router.push("/admin"); // Redirect to admin page
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send email. Make sure your template uses only 'name' and 'email'.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-white text-black px-6 py-6">
      <div className="text-center max-w-2xl">

        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <Image src="/logo.png" alt="School Logo" width={144} height={144} />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Paradise Children <br /> Academy & College
        </h1>

        <p className="text-lg text-black/80 mb-10">
          Welcome to Paradise Children Academy & College. A modern institution dedicated to quality education, student success, and building bright futures.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          Login Dashboard
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white drop-shadow-lg drop-shadow-green-900 p-8 rounded-xl shadow-xl w-[80%] lg:w-1/3 animate-fadeIn flex flex-col items-center">
          <Image src="/logo.png" alt="" width={60} height={60}/>
            <h2 className="text-xl font-bold mb-6 text-center my-3">Login to PMS</h2>

            <form onSubmit={sendData} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-3 rounded-lg focus:outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-3 rounded-lg focus:outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Continue"}
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:opacity-90 transition"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}