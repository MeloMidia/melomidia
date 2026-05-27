import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

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
    <html lang="pt-BR" className="dark h-full antialiased scroll-smooth">
      <body className={`${outfit.variable} ${jakarta.variable} min-h-full bg-[#030304] text-foreground font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
