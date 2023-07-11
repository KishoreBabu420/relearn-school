import { Navbar, Footer } from '@components';

export const metadata = {
  title: 'Relearn School - Robotics and Artificial Intelligence',
  description: `At Relearn School, we empower young minds to excel in cutting-edge technologies by equipping them with the skills and knowledge needed to thrive in tomorrow's world. Join the revolution and upskill your child to succeed in an ever-evolving world.
`,
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
