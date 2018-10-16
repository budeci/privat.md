// @flow

import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Wrapper = styled.h2`
  position: relative;
  padding-top: 15px;
  font-size: 30px;
  line-height: 36px;
  ${breakpoint('desktop')(css`
    padding-top: 50px;
    font-size: 46px;
    line-height: 56px;
  `)};
  /* max-width: 400px; */
  color: black;
  word-wrap: normal;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 72px;
    height: 6px;
    background: ${props => props.theme.colors.blue};
  }
`;

type Props = {
  children?: any,
};

const SectionHeader = (props: Props) => <Wrapper>{props.children}</Wrapper>;

export default withTheme(SectionHeader);
