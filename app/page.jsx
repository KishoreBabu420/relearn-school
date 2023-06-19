'use client';

import { Hero, About, Courses, Instructor } from '@components';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Courses />
      <Instructor />
    </Fragment>
  );
};

export default Home;
