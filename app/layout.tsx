import type { Metadata } from "next";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Software Developer & AWS Solutions Architect | Portfolio",
  description: "Backend Developer y AWS Solutions Architect con +3 años de experiencia diseñando sistemas distribuidos de alta demanda. Especializado en arquitecturas escalables para CRM, ERP y SaaS multitenant.",
  keywords: ["Backend Developer", "AWS Solutions Architect", "Distributed Systems", "Microservices", "Cloud Architecture", "Node.js", "Python", "DevOps"],
  authors: [{ name: "Backend Developer" }],
  openGraph: {
    title: "Software Developer & AWS Solutions Architect",
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
