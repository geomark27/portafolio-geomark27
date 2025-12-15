import type { Metadata } from "next";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcos Ramos | Portfolio",
  description: "Software Developer y AWS Solutions Architect con +3 años de experiencia diseñando sistemas distribuidos de alta demanda. Especializado en arquitecturas escalables para CRM, ERP y SaaS multitenant.",
  keywords: ["Software Developer", "AWS Solutions Architect", "Distributed Systems", "Microservices", "Cloud Architecture", "Node.js", "Python", "DevOps"],
  authors: [{ name: "Software Developer" }],
  openGraph: {
    title: "Marcos Ramos",
    description: "Especializado en arquitecturas escalables y sistemas distribuidos de alta demanda",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
