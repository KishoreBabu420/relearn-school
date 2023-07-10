'use client';

import {
  Hero,
  Mission,
  About,
  CoursesSection,
  Faq,
  Pricing,
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
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
