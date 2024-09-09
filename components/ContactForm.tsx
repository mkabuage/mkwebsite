import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { sendEmail } from "@/utils/sendEmail";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await sendEmail(formData);
      setSuccess(true);
    } catch (err) {
      setError("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl mb-6">Contact Us</h2>
      {success ? (
        <div className="text-green-500">
          Your message has been sent successfully!
        </div>
      ) : (
        <>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 bg-gray-100 rounded-lg"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 bg-gray-100 rounded-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              className="w-full px-4 py-2 bg-gray-100 rounded-lg"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </>
      )}
    </form>
  );
};
