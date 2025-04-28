"use client";

import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Index() {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    nachricht: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    telefon: "",
  });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) => /^[+]?[\d\s\-()]{7,}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value) ? "" : "Ungültige E-Mail",
      }));
    }

    if (name === "telefon") {
      setErrors((prev) => ({
        ...prev,
        telefon: validatePhone(value) ? "" : "Ungültige Nummer",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email) || !validatePhone(formData.telefon)) {
      return;
    }
    // send email
    alert("Formular erfolgreich gesendet!");
  };

  return (
    <section id="contact" className="w-full bg-white text-[#202020] py-20 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2 flex flex-col justify-start">
          <h2 className="text-5xl font-bold mb-4">
            Nehmen Sie Kontakt mit uns auf
          </h2>
          <p className="mb-6 text-xl text-gray-700 leading-relaxed">
            Rufen Sie uns an oder senden Sie uns eine E-Mail. 
            Wir melden uns schnellstmöglich zurück und beraten 
            Sie persönlich und kompetent rund um Ihre Veranstaltung
          </p>

          <div className="flex items-center gap-3 mb-3 text-xl font-medium">
            <FaPhone className="text-[#202020] w-5 h-5" />
            +49 15679 624045
          </div>
          <div className="flex items-center gap-3 mb-3 text-xl font-medium">
            <FaEnvelope className="text-[#202020] w-5 h-5" />
            info@flex-sharing.de
          </div>
          <div className="flex items-center gap-3 text-xl font-medium">
            <FaMapMarkerAlt className="text-[#202020] w-5 h-5" />
            Brunsbütteler Damm 112, 13581, Berlin
          </div>
        </div>

        {/* Right form */}
        <div className="lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f9f9f9] p-8 rounded-3xl shadow-xl"
          >
            <Input
              label="Vorname"
              name="vorname"
              type="text"
              value={formData.vorname}
              onChange={handleChange}
            />
            <Input
              label="Nachname"
              name="nachname"
              type="text"
              value={formData.nachname}
              onChange={handleChange}
            />
            <Input
              label="E-Mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              className="md:col-span-2"
            />
            <Input
              label="Telefonnummer"
              name="telefon"
              type="tel"
              value={formData.telefon}
              onChange={handleChange}
              error={errors.telefon}
              className="md:col-span-2"
            />
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">
                Nachricht
              </label>
              <textarea
                name="nachricht"
                rows={5}
                placeholder="Ihre Nachricht"
                value={formData.nachricht}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#202020] transition resize-none"
              />
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="mt-4 bg-[#202020] text-white px-8 py-3 rounded-2xl hover:bg-white hover:text-[#202020] border-2 border-[#202020] transition font-semibold"
              >
                Nachricht senden
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// Reusable Input Component
function Input({
  label,
  name,
  type,
  value,
  onChange,
  error = "",
  className = "",
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-2xl border ${
          error ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-[#202020] transition`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
