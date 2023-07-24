import { Navbar, Footer } from '@components';

export const metadata = {
  title: 'Robotics Training Courses for Kids | Re-Learn School',
  description: `Explore our comprehensive robotics training courses for kids at Re-Learn School. Our hands-on workshops and classes empower young minds to learn robotics in a fun and engaging way.
`,
  keyword:
    ' robotics training courses, robotics classes for kids, hands-on robotics workshops, robotics education for children, robotics training programs, robotics courses for young learners, robotics curriculum, robotics learning center, robotics training institute, robotics classes in Coimbatore, best robotics courses, robotics for beginners, advanced robotics training, robotics for kids, STEM education, robotics skills, robotics programming, robotics concepts, robotics projects, robotics competitions, coding and robotics, hands-on learning, fun robotics classes, robotics for children',
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
