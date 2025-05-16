import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flex Sharing – Bühnen- und Eventbau in Berlin",
  description: "Professioneller Bühnen- und Eventbau aus Berlin – maßgeschneiderte Konstruktionen für Konzerte, Festivals, Firmenveranstaltungen und mehr.",
  robots: "index, follow",
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    title: "Flex Sharing – Eventbau & Konstruktionen",
    description: "Event- und Bühnenkonstruktionen für Konzerte, Festivals und Firmenveranstaltungen. Flex Sharing – Ihr Partner in Berlin.",
    url: "https://flexsharing-event.de",
    type: "website",
    siteName: "Flex Sharing",
    images: [
      {
        url: "https://flexsharing-event.de/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Flex Sharing Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flex Sharing – Eventbau in Berlin",
    description: "Professioneller Bühnen- und Eventbau für Events jeder Größe.",
    images: ["https://flexsharing-event.de/images/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
