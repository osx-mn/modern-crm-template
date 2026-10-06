import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern CRM Template",
  description: "CRM template built with Next.js, NestJS, PostgreSQL and Prisma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b border-neutral-200 bg-white">
          <nav className="mx-auto flex max-w-5xl items-center gap-6 px-6 py-3">
            <span className="font-semibold tracking-tight text-[#000]">Modern CRM</span>
            <Link
              href="/"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Inicio
            </Link>
            <Link
              href="/customers"
              className="text-sm text-neutral-600 hover:text-black"
            >
              Clientes
            </Link>
          </nav>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}