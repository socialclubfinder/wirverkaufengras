import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: ' wirverkaufengras.de',
  description: 'Finden Sie vertrauenswürdige Telemedizin-Anbieter für medizinisches Cannabis in Deutschland. Schnelle und diskrete Online-Konsultationen.',
  keywords: 'medizinisches Cannabis, Telemedizin, Cannabis Rezept, Online Arzt, Cannabis Therapie, Deutschland',
  authors: [{ name: 'wirverkaufengras.de' }],
  openGraph: {
    title: 'Medizinisches Cannabis Telemedizin Directory | wirverkaufengras.de',
    description: 'Finden Sie vertrauenswürdige Telemedizin-Anbieter für medizinisches Cannabis in Deutschland.',
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medizinisches Cannabis Telemedizin Directory',
    description: 'Vertrauenswürdige Telemedizin-Anbieter für medizinisches Cannabis in Deutschland.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://wirverkaufengras.de',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}