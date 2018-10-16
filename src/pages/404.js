import React from 'react';
import { withIntl, Link } from '../i18n';
import Section from '../components/layout/Section';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <Section>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Section>
  </Layout>
);
export default withIntl(NotFoundPage);
