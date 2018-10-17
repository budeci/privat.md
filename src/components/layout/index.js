// @flow

import React from 'react';
import Helmet from 'react-helmet';
import reset from 'styled-reset';
import styled from 'styled-components';
import { withPrefix } from 'gatsby-link';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { injectIntl } from 'react-intl';
import theme from '../../theme';
import Page from './Page';
import Header from './Header';
import Footer from './Footer';
import GlobalTypography from '../typography/Global';
import SidebarProvider from './Sidebar/context';
import Sidebar from './Sidebar';
import GoogleTagManager from '../../utils/tag-manager';

injectGlobal`
  ${reset};
  body {
    color: #86949d;
    line-height: 34px;
    font-size: 16px;
  }
  html,
  input,
  select,
  button {
    font-family: 'Open Sans', sans-serif;
  }
  html.overflow-hidden { 
    overflow-y: hidden;
  }
`;

type Data = {
  site: {
    siteMetadata: {
      title: string,
    },
  },
};

type Props = {
  data: Data,
  children: () => any,
};

// To Do: Responsive design remove min-width
const Main = styled.div`
  /* min-width: 1170px; */
`;
const Layout = ({ children, data, intl }: Props) => (
  <ThemeProvider theme={theme}>
    <SidebarProvider>
      <GoogleTagManager gtmId="GTM-NH9LWLP" />
      <GlobalTypography>
        <Helmet
          title={intl.formatMessage({ id: 'title' })}
          meta={[
            {
              name: 'description',
              content: intl.formatMessage({ id: 'description' }),
            },
            {
              name: 'keywords',
              content: intl.formatMessage({ id: 'keywords' }),
            },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: withPrefix('favicon-32x32.png'),
            },
          ]}
        />

        <Header siteTitle={intl.formatMessage({ id: 'title' })} />
        <Main>{children}</Main>
        <Footer />

        <Sidebar />
      </GlobalTypography>
    </SidebarProvider>
  </ThemeProvider>
);

export default injectIntl(Layout);

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
