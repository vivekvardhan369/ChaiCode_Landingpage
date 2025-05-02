import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';

import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import UdemyCourseSlider from '../partials/UdemyCourseSlider';
import FreeAPILanding from '../partials/FreeAPILanding';
import CohortBenefits from '../partials/CohortBenefits';
import TopicsCloud from '../partials/TopicsCloud';
import CommunityBanner from '../partials/CommunityBanner';
import StudentTestimonialsSection from '../partials/StudentTestimonialsSection';
import ChaiCodeSection from '../partials/ChaiCodeSection';
import AlumniNetworkSection from '../partials/AlumniNetworkSection';
import TweetLove from '../partials/TweetLove';
import CohortsSection from '../partials/CohortSection';
import ChaiCodeApp from '../partials/ChaiCodeApp';

function Home() {
  const productDemoRef = useRef(null);
  return (
    <>
      <Helmet>
        <title>ChaiCode | Learn Coding</title>
        <meta name="description" content="ChaiCode offers immersive coding courses to transform your career. Join our cohorts and learn from industry experts." />
        <meta name="keywords" content="coding, programming, courses, cohorts, learn to code" />
        <meta name="author" content="ChaiCode" />
        <meta property="og:title" content="ChaiCode | Learn Coding" />
      </Helmet>
      
      {/* Page sections with IDs for navigation */}
      <div id="heroHomeSection">
        <HeroHome productDemoRef={productDemoRef} />
      </div>
      
      <TweetLove />
      
      <FeaturesBlocks />
      
      <div id="cohortsSection">
        <CohortsSection />
      </div>
      
      <div id="studentTestimonialsSection">
        <StudentTestimonialsSection />
      </div>
      
      <div id="udemyCourseSlider">
        <UdemyCourseSlider />
      </div>
      
      <CohortBenefits />
      
      <AlumniNetworkSection />
      
      <ChaiCodeSection />
      
      <TopicsCloud />
      
      <CommunityBanner />
      
      <FreeAPILanding />
      
      <ChaiCodeApp />
    </>
  );
}

export default Home;