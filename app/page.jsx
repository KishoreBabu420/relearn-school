'use client';

import {
  Hero,
  Mission,
  About,
  CoursesSection,
  Faq,
  Pricing,
  Contact,
} from '@components';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Mission />
      <CoursesSection />
      <About />
      <Pricing />
      <Faq />

      <Contact />
    </Fragment>
  );
};

export default Home;
