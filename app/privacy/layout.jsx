import { Navbar, Footer } from '@components';

export const metadata = {
  title: 'Privacy Policy of Relearn School',
  description: `At Relearn School, Protecting Your Privacy is Our Priority. Learn How We Safeguard Your Data. Read Our Privacy Policy Now!
`,
};

const PrivacyLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='./assets/images/favicon.png'
          sizes='any'
        />
      </head>
      <body className='bg-solitude font-Poppins'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default PrivacyLayout;
