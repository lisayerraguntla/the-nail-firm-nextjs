import './globals.css';

export const metadata = {
  title: 'The Nail Firm | Beauty Appointments in Norwich',
  description: 'Affordable beauty appointments in Norwich for nails, BIAB, lashes, teeth whitening, waxing, peels, and polished finishes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
