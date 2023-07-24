import { Navbar, Footer } from '@components';

export const metadata = {
  title: 'Terms and Conditions of Relearn School',
  description: `Read Our Terms and Conditions. Stay Informed About Our Website Usage Guidelines. Know Your Rights and Responsibilities.
`,
};

const TermsLayout = ({ children }) => {
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

export default TermsLayout;
