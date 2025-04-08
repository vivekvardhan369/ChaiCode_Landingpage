import React,{useRef} from 'react';
import { Helmet } from 'react-helmet';

import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';
import FeatureComparisonSlider from '../partials/FeatureComparisonSlider';
import FeaturesAndOptions from '../partials/FeaturesAndOptions';
import ProductDemoVideo from '../partials/ProductDemoVideo';
import DataInsights from '../partials/DataInsights';
import SecurityFeatures from '../partials/SecurityFeatures';
import NewsSection from '../partials/NewsSection';
import ValuePropositionMain from '../partials/ValuePropositionMain';
import QuanfiaDifference from '../partials/QuanfiaDifference';
import ChatServiceArchitecture from '../partials/ChatServiceArchitecture';

function Home() {
  const productDemoRef = useRef(null);
  return (
<>
<Helmet>
  <title>Quanfia | Home</title>
  <meta name="description" content="Quanfia leverages AI to transform financial workflows, reducing manual knowledge work by 80% or more. It is a chat service that helps you to get more leads and increase sales." />
  <meta name="keywords" content="Quanfia, chat service, leads, increase sales" />
  <meta name="author" content="Quanfia" />
  <meta property="og:title" content="Quanfia | Home" />
</Helmet>
      {/*  Page sections */}
      <HeroHome productDemoRef={productDemoRef} />
      <ValuePropositionMain />
      <FeaturesAndOptions />
      <ChatServiceArchitecture />
      <QuanfiaDifference />
      <DataInsights />
      <SecurityFeatures />
      <FeaturesBlocks />
      {/* <FeaturesZigZag /> */}
      {/* <FeatureComparisonSlider /> */}
      {/* <NewsSection /> */}
      <div ref={productDemoRef}>
      <ProductDemoVideo />
      </div>
    </>
  );
}

export default Home;