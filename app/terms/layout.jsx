import { Navbar, Footer } from '@components';

export const metadata = {
  title: 'Terms and Conditions of Relearn School',
  description: `At Relearn School, we empower young minds to excel in cutting-edge technologies by equipping them with the skills and knowledge needed to thrive in tomorrow's world. Join the revolution and upskill your child to succeed in an ever-evolving world.
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
