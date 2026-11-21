import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'शुभ विवाह | राकेश संग पूजा (Rakesh & Pooja)',
  description: '॥ श्री गणेशाय नमः ॥ हमारे परिवार के मांगलिक वैवाहिक उत्सव में आपका हार्दिक स्वागत एवं अभिनंदन है। वर: राकेश यादव संग वधू: पूजा यादव।',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#100b08] text-[#332211] min-h-screen selection:bg-amber-200 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
