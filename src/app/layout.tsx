import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melo Mídia - Mercado Livre para Autopeças",
  description:
    "Agência especializada em serviços de Mercado Livre para lojas de autopeças.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark h-full antialiased">
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
