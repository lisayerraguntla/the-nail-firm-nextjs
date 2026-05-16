import './globals.css';

export const metadata = {
  title: 'The Nail Firm | Luxury Nails in Norwich',
  description: 'Luxury nail artistry in Norwich for Gel X, BIAB, detailed nail art, and polished appointments.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
