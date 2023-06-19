'use client';

import { Hero, About, Courses, Faq, Pricing } from '@components';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Courses />
      <Pricing />
      <Faq />
    </Fragment>
  );
};

export default Home;
