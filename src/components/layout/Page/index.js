// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { injectIntl } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { Consumer as SidebarConsumer } from '../Sidebar/context';

type Props = {
  sidebarIsOpen: boolean,
  children?: any,
};

const Wrapper = styled.div`
  position: relative;

  &::after {
    content: '';
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    background: black;
    opacity: 0.5;
  }

  ${ifProp(
    'sidebarIsOpen',
    css`
      &::after {
        display: block;
      }
    `,
  )};
`;

const Page = (props: Props) => (
  <Wrapper sidebarIsOpen={props.sidebarIsOpen}>{props.children}</Wrapper>
);
const PageWraper = ({ children }) => (
  <SidebarConsumer>
    {({ isOpen }) => <Page sidebarIsOpen={isOpen} children={children} />}
  </SidebarConsumer>
);

export default injectIntl(PageWraper);
