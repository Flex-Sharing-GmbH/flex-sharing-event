"use client";

import React from "react";

export default function Impressum() {
    return (
        <section className="w-full min-h-screen bg-[#f9f9f9] py-24 px-6 md:px-12">
            <div className="bg-white rounded-3xl shadow-lg p-10 md:p-20 max-w-4xl mx-auto text-[#202020]">
                <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-16">
                    Impressum
                </h1>

                <div className="flex flex-col gap-12 text-base md:text-lg leading-relaxed text-[#202020]">
                    <div className="space-y-2">
                        <p className="font-semibold">Flex Sharing Services GmbH</p>
                        <p>Brunsbütteler Damm 112</p>
                        <p>13581 Berlin</p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-semibold">Vertreten durch:</p>
                        <p>Nikita Dudchenko (Geschäftsführer)</p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-semibold">Kontakt:</p>
                        <p>
                            Telefon:{" "}
                            <a
                                href="tel:+4915679624045"
                                className="underline hover:text-gray-500"
                            >
                                +49 15679 624045
                            </a>
                        </p>
                        <p>
                            E-Mail:{" "}
                            <a
                                href="mailto:info@flex-sharing.de"
                                className="underline hover:text-gray-500"
                            >
                                info@flex-sharing.de
                            </a>
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-semibold">Registereintrag:</p>
                        <p>Eintragung im Handelsregister</p>
                        <p>Registergericht: Amtsgericht Charlottenburg</p>
                        <p>Registernummer: HRB 223502 B</p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-semibold">
                            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                        </p>
                        <p>Nikita Dudchenko</p>
                        <p>Brunsbütteler Damm 112</p>
                        <p>13581 Berlin</p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-semibold">Datenschutz:</p>
                        <p>
                            Unsere Datenschutzerklärung finden Sie unter:
                            <a
                                href="/datenschutz"
                                className="underline hover:text-gray-500 ml-1"
                            >
                                Datenschutzerklärung
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
