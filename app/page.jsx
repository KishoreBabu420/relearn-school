'use client';

import {
  Hero,
  Mission,
  About,
  Courses,
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
      <About />
      <Courses />
      <Pricing />
      <Faq />

      <Contact />
    </Fragment>
  );
};

export default Home;
