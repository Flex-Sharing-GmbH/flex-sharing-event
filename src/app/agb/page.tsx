"use client";

import React from "react";

export default function Datenschutz() {
    return (
        <section className="w-full min-h-screen bg-[#f9f9f9] py-24 px-6 md:px-12">
            <div className="bg-white rounded-3xl shadow-lg p-10 md:p-20 max-w-4xl mx-auto text-[#202020]">
                <h1 className="text-lg md:text-5xl font-extrabold uppercase mb-16">
                    Allgemeine Geschäftsbedingungen (AGB)
                </h1>

                <div className="flex flex-col gap-12 text-base md:text-lg leading-relaxed text-[#202020]">
                    <div className="space-y-2">
                        <p className="font-semibold">Flex Sharing Services GmbH</p>
                        <p>Brunsbütteler Damm 112</p>
                        <p>13581 Berlin</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">1. Geltungsbereich</h2>
                        <p>1.1 Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über Bau- und Montageleistungen, die zwischen der Flex Sharing Services GmbH (nachfolgend „Auftragnehmer“) und dem Kunden (nachfolgend „Auftraggeber“) geschlossen werden, soweit nichts anderes ausdrücklich vereinbart ist.</p>
                        <p>1.2 Abweichende, entgegenstehende oder ergänzende AGB des Auftraggebers werden nur dann Vertragsbestandteil, wenn der Auftragnehmer ihrer Geltung ausdrücklich zustimmt.</p>
                        <p>1.3 Für Bauleistungen können die Vorschriften der Vergabe- und Vertragsordnung für Bauleistungen, Teil B (VOB/B), in der jeweils gültigen Fassung vereinbart werden. Die VOB/B wird nur dann Vertragsbestandteil, wenn dies ausdrücklich schriftlich vereinbart ist.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">2. Angebote und Vertragsabschluss</h2>
                        <p>2.1 Angebote des Auftragnehmers sind freibleibend und unverbindlich, es sei denn, sie sind ausdrücklich als verbindlich gekennzeichnet.</p>
                        <p>2.2 Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung des Auftragnehmers oder durch Beginn der Leistungserbringung zustande.</p>
                        <p>2.3 Angaben in Angeboten, Plänen oder Zeichnungen sind nur verbindlich, wenn sie ausdrücklich als verbindlich bezeichnet werden.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">3. Leistungsumfang</h2>
                        <p>3.1 Der Umfang der Leistungen ergibt sich aus dem Vertrag, dem Angebot und der Leistungsbeschreibung. Änderungen oder Ergänzungen bedürfen der schriftlichen Vereinbarung.</p>
                        <p>3.2 Der Auftragnehmer ist berechtigt, Subunternehmer einzusetzen, bleibt jedoch für die ordnungsgemäße Erfüllung der Leistungen verantwortlich.</p>
                        <p>3.3 Der Auftraggeber stellt dem Auftragnehmer alle für die Leistungserbringung erforderlichen Informationen, Unterlagen und Zugänge rechtzeitig und kostenfrei zur Verfügung.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">4. Vergütung und Zahlungsbedingungen</h2>
                        <p>4.1 Die Vergütung richtet sich nach dem Vertrag oder dem Angebot. Preise verstehen sich in Euro zzgl. der gesetzlichen Umsatzsteuer, sofern diese anfällt.</p>
                        <p>4.2 Zahlungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig, sofern nichts anderes vereinbart ist.</p>
                        <p>4.3 Bei Bauleistungen können Abschlagszahlungen gemäß § 632a BGB oder, falls vereinbart, gemäß VOB/B verlangt werden.</p>
                        <p>4.4 Im Falle des Zahlungsverzugs ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz für Unternehmer bzw. 5 Prozentpunkten über dem Basiszinssatz für Verbraucher zu verlangen.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">5. Ausführungsfristen und Termine</h2>
                        <p>5.1 Vereinbarte Termine und Fristen sind nur verbindlich, wenn sie ausdrücklich als verbindlich bezeichnet wurden.</p>
                        <p>5.2 Verzögerungen durch höhere Gewalt, unvorhersehbare Hindernisse oder Verzögerungen des Auftraggebers berechtigen den Auftragnehmer zu einer angemessenen Fristverlängerung.</p>
                        <p>5.3 Der Auftragnehmer haftet nicht für Verzögerungen, die durch den Auftraggeber oder Dritte verursacht werden.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">6. Abnahme</h2>
                        <p>6.1 Der Auftraggeber ist zur Abnahme der Leistungen verpflichtet, sobald der Auftragnehmer die Fertigstellung anzeigt und die Leistung im Wesentlichen vertragsgemäß erbracht wurde.</p>
                        <p>6.2 Geringfügige Mängel, die die Nutzung der Leistung nicht wesentlich beeinträchtigen, stehen der Abnahme nicht entgegen.</p>
                        <p>6.3 Wird keine förmliche Abnahme verlangt, gilt die Leistung als abgenommen, wenn der Auftraggeber die Leistung in Gebrauch nimmt.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">7. Gewährleistung</h2>
                        <p>7.1 Der Auftragnehmer leistet Gewähr für Mängel gemäß den gesetzlichen Vorschriften (§§ 634 ff. BGB) oder, falls vereinbart, gemäß VOB/B.</p>
                        <p>7.2 Die Gewährleistungsfrist beträgt für Bauleistungen 5 Jahre, für sonstige Leistungen 2 Jahre, sofern nichts anderes vereinbart ist. Für Verbraucher gelten die gesetzlichen Fristen.</p>
                        <p>7.3 Mängel müssen unverzüglich nach Entdeckung schriftlich gerügt werden. Der Auftragnehmer ist zur Nacherfüllung berechtigt.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">8. Haftung</h2>
                        <p>8.1 Der Auftragnehmer haftet uneingeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für vorsätzliche oder grob fahrlässige Pflichtverletzungen.</p>
                        <p>8.2 Für einfache Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten, beschränkt auf den vorhersehbaren, vertragstypischen Schaden.</p>
                        <p>8.3 Eine weitergehende Haftung, insbesondere für entgangenen Gewinn oder Folgeschäden, ist ausgeschlossen, soweit gesetzlich zulässig.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">9. Eigentumsvorbehalt</h2>
                        <p>9.1 Gelieferte Materialien und Bauteile bleiben bis zur vollständigen Bezahlung Eigentum des Auftragnehmers.</p>
                        <p>9.2 Der Auftraggeber ist verpflichtet, die Vorbehaltsware pfleglich zu behandeln und vor Beschädigung oder Verlust zu schützen.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">10. Kündigung</h2>
                        <p>10.1 Beide Parteien können den Vertrag aus wichtigem Grund kündigen. Ein wichtiger Grund liegt insbesondere vor, wenn die Fortsetzung des Vertrags unzumutbar ist (z. B. Zahlungsverzug, wesentliche Vertragsverletzung).</p>
                        <p>10.2 Für Bauleistungen gelten die Kündigungsregelungen des § 648 BGB oder, falls vereinbart, der VOB/B.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">11. Datenschutz</h2>
                        <p>11.1 Personenbezogene Daten des Auftraggebers werden gemäß den geltenden datenschutzrechtlichen Bestimmungen verarbeitet. Weitere Informationen finden Sie in unserer Datenschutzerklärung unter: [Link zur Datenschutzseite].</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">12. Gerichtsstand und anwendbares Recht</h2>
                        <p>12.1 Für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist der Gerichtsstand Berlin, soweit der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
                        <p>12.2 Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-bold">13. Schlussbestimmungen</h2>
                        <p>13.1 Änderungen oder Ergänzungen des Vertrags bedürfen der Schriftform. Dies gilt auch für die Aufhebung dieses Schriftformerfordernisses.</p>
                        <p>13.2 Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame Bestimmung wird durch eine Regelung ersetzt, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung möglichst nahekommt.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
