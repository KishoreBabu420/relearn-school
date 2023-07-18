import '@styles/globals.css';
import Script from 'next/script';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';

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

        <GoogleAnalytics measurementId='G-YMJ4SG3LRL' />
        <Script
          id='fb_pixel'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1954325961591455'); 
                fbq('track', 'PageView');`,
          }}
        />

        <noscript>
          <img
            height='1'
            width='1'
            src='https://www.facebook.com/tr?id=1954325961591455&ev=PageView
&noscript=1'
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
