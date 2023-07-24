import { Navbar, Footer } from '@components';

export const metadata = {
  title: 'Relearn School - Mathematics and Vedic Maths',
  description: `Mathematics is an important life skill which helps children in developing their cognitive abilities. We teach shortcuts and calculation techniques to solve mathematical problems quickly and effectively.`,
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
