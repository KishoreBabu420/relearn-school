'use client';

import { Hero, About, Courses, Faq } from '@components';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Courses />
      <Faq />
    </Fragment>
  );
};

export default Home;
