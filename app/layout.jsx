import '@styles/globals.css';
import Script from 'next/script';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';

import { ModalProvider } from '@context/modal.context';

export const metadata = {
  title: 'Relearn School - Empowering Young Minds',
  description: `Re-Learn School offers robotics training, coding classes, and Vedic Math programs for kids in Coimbatore. Empower your child with future-ready skills.`,
  keywords:
    'robotics training for kids, coding classes for children, Vedic Math courses, conceptual learning, robotics and coding education, best robotics training in Coimbatore, coding classes in India, Vedic Math programs for children, STEM education for kids, empowering young minds, future-ready skills, hands-on robotics and coding workshops, innovative learning for kids, cutting-edge technology education, skill development for children, creative problem-solving, Re-Learn School, Coimbatore,  robotics workshops, coding courses, Vedic Math training, conceptual education, STEM learning, Coimbatore education, coding skills, problem-solving abilities, critical thinking, logical reasoning, ReLearn School, relearn school, relearnschool,',
  'revisit-after': '10 days',
  author: 'Relearn School',
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

        {/* <!-- Open Graph / Facebook --> */}
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://www.relearnschool.in/'
        />
        <meta
          property='og:title'
          content='Relearn School - Empowering Young Minds'
        />
        <meta
          property='og:description'
          content='Re-Learn School offers robotics training, coding classes, and Vedic Math programs for kids in Coimbatore. Empower your child with conceptual learning and future-ready skills. Join the revolution today!.'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/skill-safari/image/upload/v1690182507/relearn_OG.png'
        />

        {/* <!-- Twitter --> */}
        <meta
          property='twitter:card'
          content='summary_large_image'
        />
        <meta
          property='twitter:url'
          content='https://www.relearnschool.in/'
        />
        <meta
          property='twitter:title'
          content='Relearn School - Empowering Young Minds'
        />
        <meta
          property='twitter:description'
          content='Re-Learn School offers robotics training, coding classes, and Vedic Math programs for kids in Coimbatore. Empower your child with conceptual learning and future-ready skills. Join the revolution today!.'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/skill-safari/image/upload/v1690182507/relearn_OG.png'
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
                    fbq('init', '660667355687232'); 
                    fbq('track', 'PageView');
                    `,
          }}
        />

        <noscript>
          <img
            height='1'
            width='1'
            src='https://www.facebook.com/tr?id=660667355687232&ev=PageView
&noscript=1'
            alt='facebook'
          />
        </noscript>

        <Script
          id='microsoft_clarity'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "i4ua5pagbl");
            `,
          }}
        />
      </head>
      <body>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
