import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wirverkaufengras.de'),
  title: {
    default: 'Cannabis kaufen in Deutschland | Gras legal bestellen | wirverkaufengras.de',
    template: '%s | wirverkaufengras.de'
  },
  description: 'Cannabis legal kaufen in Deutschland ✓ Medizinisches Gras bestellen ✓ Telemedizin Rezept ✓ Cannabis Samen & Stecklinge ✓ 100% diskret & sicher',
  keywords: [
    'cannabis kaufen',
    'gras kaufen',
    'cannabis bestellen',
    'gras bestellen',
    'cannabis rezept',
    'medizinisches cannabis',
    'cannabis samen',
    'cannabis stecklinge',
    'legal gras kaufen',
    'cannabis deutschland',
    'telemedizin cannabis',
    'online cannabis rezept',
    'gras online kaufen',
    'cannabis online kaufen',
    'wie kann ich gras in deutschland kaufen',
    'stecklinge kaufen',
    'cali weed online kaufen',
    'wir verkaufen gras',
    'gras kaufen deutschland',
    'gras verkaufen',
    'cannabis verkaufen',
    'cannabis auf rezept online',
    'tele cannabis'
  ].join(', '),
  authors: [{ name: 'wirverkaufengras.de' }],
  openGraph: {
    title: 'Cannabis legal kaufen in Deutschland | wirverkaufengras.de',
    description: 'Medizinisches Cannabis legal bestellen ✓ Schnelles Rezept via Telemedizin ✓ Große Auswahl an Cannabis Samen & Stecklingen ✓',
    type: 'website',
    locale: 'de_DE',
    siteName: 'wirverkaufengras.de',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cannabis legal kaufen in Deutschland',
    description: 'Medizinisches Cannabis bestellen ✓ Online Rezept ✓ Samen & Stecklinge ✓',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://wirverkaufengras.de',
  },
  verification: {
    google: '',
  
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
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
        <link rel="alternate" hrefLang="de" href="https://wirverkaufengras.de" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}