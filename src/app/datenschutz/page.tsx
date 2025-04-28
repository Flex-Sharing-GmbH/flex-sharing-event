"use client";

import React from "react";

export default function Datenschutz() {
    return (
        <section className="w-full min-h-screen bg-[#f9f9f9] py-24 px-6 md:px-12">
            <div className="bg-white rounded-3xl shadow-lg p-10 md:p-20 max-w-4xl mx-auto text-[#202020]">
                <h1 className="text-lg md:text-5xl font-extrabold uppercase mb-16">
                    Datenschutzerklärung
                </h1>

                <div className="flex flex-col gap-12 text-base md:text-lg leading-relaxed text-[#202020]">
                    <div className="space-y-2">
                        <p>Wir, die Flex Sharing Services GmbH, nehmen den Schutz Ihrer
                            persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie
                            gemäß Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO) über
                            die Verarbeitung Ihrer personenbezogenen Daten bei der Nutzung unserer
                            Website.</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="font-bold">1. Name und Kontaktdaten des Verantwortlichen</h2>
                        <p>Flex Sharing Services GmbH</p>
                        <p>Brunsbütteler Damm 112</p>
                        <p>13581 Berlin</p>
                        <p> Telefon:{" "}
                            <a href="tel:+4915679624045" className="underline hover:text-gray-500">
                                +49 15679 624045
                            </a>
                        </p>
                        <p> E-Mail:{" "}
                            <a href="mailto:info@flex-sharing.de" className="underline hover:text-gray-500">
                                info@flex-sharing.de
                            </a>
                        </p>
                        <p>Vertreten durch: Nikita Dudchenko (Geschäftsführer)</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck ihrer Verwendung</h2>
                        <h2 className="font-bold">2.1 Beim Besuch der Website (Server-Logfiles)</h2>
                        <p>
                            Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät eingesetzten Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in sogenannten Server-Logfiles gespeichert. Folgende Daten werden dabei erhoben:
                        </p>

                        <ul className="list-disc list-inside pl-4">
                            <li>IP-Adresse des anfragenden Rechners</li>
                            <li>Datum und Uhrzeit des Zugriffs</li>
                            <li>Name und URL der abgerufenen Datei</li>
                            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
                        </ul>

                        <p>
                            Die genannten Daten werden zu folgenden Zwecken verarbeitet:
                        </p>

                        <ul className="list-disc list-inside pl-4">
                            <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website</li>
                            <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
                            <li>Auswertung der Systemsicherheit und -stabilität</li>
                        </ul>

                        <p>
                            Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den oben genannten Zwecken. Die Daten werden anonymisiert und nicht mit anderen personenbezogenen Daten verknüpft.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="font-bold">2.2 Bei Nutzung unseres Kontaktformulars oder Kontaktaufnahme per E-Mail</h2>
                        <p>
                            Wenn Sie uns über ein Kontaktformular oder per E-Mail kontaktieren,
                            erheben wir die von Ihnen freiwillig übermittelten Daten (z. B. Name, EMail-Adresse, Telefonnummer, Inhalt Ihrer Anfrage). Diese Daten
                            verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage und zur
                            Kommunikation mit Ihnen.
                        </p>
                        <p>
                            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                            DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags oder
                            vorvertraglichen Maßnahmen zusammenhängt, oder auf Grundlage von
                            Art. 6 Abs. 1 lit. f DSGVO, wenn es sich um eine sonstige Anfrage handelt.
                            Unser berechtigtes Interesse liegt in der Beantwortung Ihrer Anfrage.
                        </p>
                        <p>
                            Die Daten werden gelöscht, sobald sie für die Bearbeitung Ihrer Anfrage
                            nicht mehr erforderlich sind, es sei denn, gesetzliche
                            Aufbewahrungspflichten stehen dem entgegen.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="font-bold">2.3 Cookies</h2>
                        <p>
                            Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die
                            auf Ihrem Endgerät gespeichert werden und bestimmte Informationen
                            enthalten. Wir verwenden folgende Arten von Cookies:
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li>
                                Technisch notwendige Cookies: <p>Diese sind erforderlich, um
                                    grundlegende Funktionen der Website zu gewährleisten (z. B.
                                    Navigation, Speicherung von Formulareingaben). Rechtsgrundlage
                                    ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                                    Bereitstellung einer funktionsfähigen Website).</p>
                            </li>
                            <li>
                                Nicht-notwendige Cookies: <p>Diese dienen der Analyse des
                                    Nutzerverhaltens (z. B. Tracking-Cookies) oder der Einbindung von
                                    Drittanbieter-Inhalten (z. B. Social-Media-Buttons). Diese Cookies
                                    setzen wir nur mit Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a
                                    DSGVO.</p>
                            </li>
                        </ul>
                        <p>
                            Beim ersten Besuch unserer Website zeigen wir Ihnen ein Cookie-Banner,
                            über das Sie Ihre Einwilligung für nicht-notwendige Cookies erteilen oder
                            verweigern können. Sie können Ihre Cookie-Einstellungen jederzeit über
                            [Link zu Cookie-Einstellungen] anpassen.
                        </p>
                        <p>
                            Die Speicherdauer von Cookies variiert. Einige Cookies (Session-Cookies)
                            werden nach dem Schließen des Browsers gelöscht, andere (persistente
                            Cookies) bleiben für eine bestimmte Zeit gespeichert (z. B. bis zu 2 Jahre).
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="font-bold">2.4 Tracking-Tools (Google Analytics)</h2>
                        <p>
                            Wir nutzen Google Analytics, einen Webanalysedienst der Google Ireland
                            Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“). Google
                            Analytics verwendet Cookies, um die Nutzung unserer Website zu
                            analysieren. Dabei werden folgende Daten erhoben:
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li>IP-Adresse (anonymisiert)</li>
                            <li>Seitenaufrufe, Verweildauer, Klickpfade</li>
                            <li>Geräte- und Browserinformationen</li>
                        </ul>
                        <p>
                            Die durch das Cookie erzeugten Informationen über Ihre Nutzung der
                            Website werden in der Regel an einen Server von Google in den USA
                            übertragen und dort gespeichert. Wir verwenden die Funktion
                            „anonymizeIP“, wodurch Ihre IP-Adresse innerhalb der EU bzw. des EWR
                            gekürzt wird, bevor sie an Google übermittelt wird.
                        </p>
                        <p>
                            Die Verarbeitung erfolgt auf Basis Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit.
                            a DSGVO, die Sie über unser Cookie-Banner erteilen können. Sie können
                            Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookie-Einstellungen
                            anpassen.
                        </p>
                        <p>
                            Weitere Informationen zum Datenschutz bei Google Analytics finden Sie
                            unter: <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="font-bold">2.6 Newsletter</h2>
                        <p>Wir bieten einen Newsletter an, für den Sie sich über ein Formular auf unserer Website anmelden können. Dabei erheben wir folgende Daten:</p>
                        <ul className="list-disc list-inside pl-4">
                            <li>E-Mail-Adresse (erforderlich)</li>
                            <li>Name (optional, falls angegeben)</li>
                        </ul>
                        <p>Die Anmeldung erfolgt über ein Double-Opt-In-Verfahren: Nach Eingabe Ihrer Daten erhalten Sie eine E-Mail mit einem Bestätigungslink, um Ihre Anmeldung zu verifizieren. Die Verarbeitung Ihrer Daten erfolgt auf Basis Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.</p>
                        <p>Ihre Daten werden ausschließlich für den Versand des Newsletters verwendet und nicht an Dritte weitergegeben, es sei denn, wir nutzen einen Newsletter-Dienstleister (z. B. Mailchimp), der als Auftragsverarbeiter gemäß Art. 28 DSGVO handelt.</p>
                        <p>Sie können sich jederzeit vom Newsletter abmelden, indem Sie den Abmeldelink in der Newsletter-E-Mail nutzen oder uns unter info@flex-sharing.de kontaktieren. Ihre Daten werden nach der Abmeldung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">3. Weitergabe von Daten</h2>
                        <p>Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn:</p>
                        <ul className="list-disc list-inside pl-4">
                            <li>Sie Ihre ausdrückliche Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO erteilt haben (z. B. für Tracking oder Social-Media-Buttons),</li>
                            <li>die Weitergabe gemäß Art. 6 Abs. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist,</li>
                            <li>eine gesetzliche Verpflichtung gemäß Art. 6 Abs. 1 lit. c DSGVO besteht,</li>
                            <li>es gesetzlich zulässig und gemäß Art. 6 Abs. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.</li>
                        </ul>
                        <p>Wir setzen folgende Dienstleister ein, die Ihre Daten im Rahmen einer Auftragsverarbeitung gemäß Art. 28 DSGVO verarbeiten:</p>
                        <ul className="list-disc list-inside pl-4">
                            <li>Hosting-Dienstleister für den Betrieb unserer Website</li>
                            <li>Ggf. Newsletter-Dienstleister (z. B. Mailchimp, falls genutzt)</li>
                        </ul>
                        <p>Bei der Nutzung von Google Analytics und Social-Media-Buttons können Daten in die USA übermittelt werden. In solchen Fällen stützen wir uns auf Ihre Einwilligung und ggf. Standardvertragsklauseln gemäß Art. 46 DSGVO.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">4. Ihre Rechte</h2>
                        <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
                        <ul className="list-disc list-inside pl-4">
                            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                            <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                        </ul>
                        <p>Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren (Art. 77 DSGVO). Die zuständige Aufsichtsbehörde ist:</p>
                        <p>Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
                        <p>Friedrichstraße 219, 10969 Berlin</p>
                        <p> Telefon:{" "}
                            <a href="tel:+493013889-0" className="underline hover:text-gray-500">
                                +49 30 13889-0
                            </a>
                        </p>
                        <p> E-Mail:{" "}
                            <a href="mailto:mailbox@datenschutz-berlin.de" className="underline hover:text-gray-500">
                                mailbox@datenschutz-berlin.de
                            </a>
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">5. Datensicherheit</h2>
                        <p>Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder unbefugten Zugriff zu schützen. Unsere Website nutzt eine SSL-Verschlüsselung für die Übertragung von Daten.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">6. Aktualität und Änderung dieser Datenschutzerklärung</h2>
                        <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2025. Änderungen aufgrund gesetzlicher oder behördlicher Vorgaben oder Weiterentwicklung unserer Website sind möglich.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">7. Kontakt</h2>
                        <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p>
                        <p>Flex Sharing Services GmbH</p>
                        <p>Nikita Dudchenko</p>
                        <p>Brunsbütteler Damm 112, 13581 Berlin</p>
                        <p> E-Mail:{" "}
                            <a href="mailto:info@flex-sharing.de" className="underline hover:text-gray-500">
                                info@flex-sharing.de
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

