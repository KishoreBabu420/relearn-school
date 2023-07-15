'use client';

import {
  Hero,
  Mission,
  About,
  CoursesSection,
  CtaSection,
  Contact,
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

      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
