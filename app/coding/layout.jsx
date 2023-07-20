import { Navbar, Footer } from '@components';

export const metadata = {
  title: 'Relearn School - Programming and Coding',
  description: `Re-Learn teaches Coding for Kids and introduces children to computer programming, teaching them the basics of coding through interactive activities and projects that foster creativity and problem-solving skills.`,
};

const RoboticsLayout = ({ children }) => {
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

export default RoboticsLayout;
