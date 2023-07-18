import {
  Hero,
  Mission,
  About,
  CoursesSection,
  CtaSection,
  Navbar,
  Footer,
} from '@components';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Mission />
      <CoursesSection />
      <About />
      <CtaSection />
      <Footer />
    </Fragment>
  );
};

export default Home;
