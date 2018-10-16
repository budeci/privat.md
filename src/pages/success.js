import React from 'react';
import { withIntl, Link } from '../i18n';
import Layout from '../components/layout';
import Jumbotron from '../components/buisness/Jumbotron';
import StepsSection from '../components/sections/Steps';
import FeaturesSection from '../components/sections/Features';
import OfferSection from '../components/sections/Offer';
import DetailsSection from '../components/sections/Details';
import ReviewsSection from '../components/sections/Reviews';
import PressSection from '../components/sections/Press';
import ContactsSection from '../components/sections/Contacts';

const IndexPage = () => (
  <Layout>
    <Jumbotron isOpen={true} tabIndex={2} page="success" />
    <StepsSection />
    <FeaturesSection />
    <OfferSection />
    <DetailsSection />
    <ReviewsSection />
    {/* <PressSection /> */}
    <ContactsSection />
  </Layout>
);

export default withIntl(IndexPage);
