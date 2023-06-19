'use client';

import { Hero, About, Courses, Faq, Pricing, Contact } from '@components';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Courses />
      <Pricing />
      <Faq />

      <Contact />
    </Fragment>
  );
};

export default Home;
