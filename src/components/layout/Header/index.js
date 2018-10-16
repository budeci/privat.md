// @flow

import React from 'react';
import { withPrefix } from 'gatsby-link';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FormattedHTMLMessage } from 'react-intl';
import Box from '../Box';
import HeaderMenu from '../HeaderMenu';
import Link from 'gatsby-link';
import Tel from './tel.png';
import Language from '../Language';
import MobileMenu from '../MobileMenu';

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  padding: 0 30px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  width: 100%;
`;

const Left = styled.div`
  width: 200px;
  a {
    display: block;
  }
`;
const WrapperLang = styled.div`
  display: none;
  ${breakpoint('desktop')(css`
    display: block;
  `)};
`;
const Right = styled.div`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  > a {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    overflow: hidden;
    white-space: nowrap;
    line-height: 19px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    padding-right: 15px;
    i {
      font-size: 12px;
      opacity: 0.5;
      display: block;
    }
    img {
      ${breakpoint('tablet')(css`
        margin-right: 10px;
      `)};
    }
    p {
      display: none;
      ${breakpoint('tablet')(css`
        display: block;
      `)};
    }
  }
`;

const Header = () => (
  <Wrapper color="white" bg="blue">
    <Left>
      <Link to="/">
        <img src={withPrefix('logo.png')} alt="Logo" />
      </Link>
    </Left>
    <HeaderMenu />
    <Right>
      <a href="tel:+37376767663">
        <img src={Tel} alt="Tel" />
        <p>
          <FormattedHTMLMessage
            id="suna.acum"
            defaultMessage="<i>Sună acuma la nr. </i>+373 76 767663"
          />
        </p>
      </a>
      <WrapperLang>
        <Language />
      </WrapperLang>
      <MobileMenu />
    </Right>
  </Wrapper>
);

export default Header;
