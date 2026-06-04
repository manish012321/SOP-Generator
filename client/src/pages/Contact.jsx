import React, { useState } from 'react'
import Header from '../components/Header'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };


  return (
    <>
        <Header />
      
  <section
    id="contact"
    className="py-24 bg-gradient-to-b from-white to-purple-50"
  >
    <div className="max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
          Contact Us
        </span>

        <h2 className="mt-6 text-5xl font-bold text-gray-900">
          Get In Touch
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about SOP Generator? We'd love to hear from you.
          Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-3xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Email
            </h3>
            <p className="text-gray-600">
              manishsuriyal21.com
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Phone
            </h3>
            <p className="text-gray-600">
              +91 9411393411
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Address
            </h3>
            <p className="text-gray-600">
              Dehradun, Uttarakhand, India
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name" value={formData.name} onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              name="email" value={formData.email} onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              name="subject" value={formData.subject} onChange={handleChange} 
              placeholder="Subject"
              className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
            name="message" value={formData.message} onChange={handleChange} 
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

           <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && <p>Message sent successfully!</p>}
      {status === "error" && <p>Something went wrong. Try again.</p>}
          </form>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default Contact