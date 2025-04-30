"use client";

import '@ant-design/v5-patch-for-react-19';
import { message } from 'antd';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const formSchema = z.object({
  firstName: z.string().min(2, "Der Vorname muss mindestens 2 Zeichen lang sein"),
  lastName: z.string().min(2, "Der Nachname muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(7, "Die Telefonnummer muss mindestens 7 Zeichen lang sein"),
  message: z.string().min(10, "Die Nachricht muss mindestens 10 Zeichen lang sein"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden der Nachricht.");
      }
      message.success("Nachricht wurde erfolgreich gesendet");
      reset();
    } catch (error) {
      console.error(error);
      message.error("Fehler beim Senden. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <section className="w-full bg-white text-[#202020] lg:py-20 py-5 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left */}
        <div className="lg:w-1/2 flex flex-col justify-start">
          <h2 className="text-4xl lg:text-5xl font-extrabold font-heading mb-4">
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

        {/* Right: Form */}
        <div id="contact" className="lg:w-1/2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f9f9f9] p-8 rounded-3xl shadow-xl"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Vorname</label>
              <input
                {...register("firstName")}
                type="text"
                placeholder="Vorname"
                className={`w-full px-4 py-3 rounded-2xl border ${errors.firstName ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-[#202020] transition`}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Nachname</label>
              <input
                {...register("lastName")}
                type="text"
                placeholder="Nachname"
                className={`w-full px-4 py-3 rounded-2xl border ${errors.lastName ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-[#202020] transition`}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">E-Mail</label>
              <input
                {...register("email")}
                type="email"
                placeholder="E-Mail"
                className={`w-full px-4 py-3 rounded-2xl border ${errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-[#202020] transition`}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">Telefonnummer</label>
              <input
                {...register("phone")}
                type="tel"
                placeholder="Telefonnummer"
                className={`w-full px-4 py-3 rounded-2xl border ${errors.phone ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-[#202020] transition`}
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">Nachricht</label>
              <textarea
                {...register("message")}
                placeholder="Ihre Nachricht"
                rows={5}
                className={`w-full px-4 py-3 rounded-2xl border ${errors.message ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-[#202020] transition resize-none`}
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 bg-[#202020] text-white px-8 py-3 rounded-2xl hover:bg-white hover:text-[#202020] border-2 border-[#202020] transition font-semibold"
              >
                {isSubmitting ? "Senden..." : "Nachricht senden"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
