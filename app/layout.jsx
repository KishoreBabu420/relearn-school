import '@styles/globals.css';

export const metadata = {
  title: 'Relearn School - Empowering Young Minds',
  description: `At Relearn School, we empower young minds to excel in cutting-edge technologies by equipping them with the skills and knowledge needed to thrive in tomorrow's world. Join the revolution and upskill your child to succeed in an ever-evolving world.
`,
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='./assets/images/favicon.png'
          sizes='any'
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
