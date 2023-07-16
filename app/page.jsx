'use client';
import { useState } from 'react';

import {
  Hero,
  Mission,
  About,
  CoursesSection,
  CtaSection,
  Form,
  Navbar,
  Footer,
} from '@components';
import { Fragment } from 'react';

const Home = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <Fragment>
      <Navbar
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
      />
      <Hero />
      <Mission />
      <CoursesSection />
      <About />
      <CtaSection />
      <Form
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
      />
      <Footer />
    </Fragment>
  );
};

export default Home;
