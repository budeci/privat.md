// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Link from 'gatsby-link';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import Language from '../Language';
import IconWhite from './iconWhite.svg';
import IconBlue from './iconBlue.svg';

const List = styled.ul`
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
  width: calc(100vw - 55px);
  background-color: white;
  z-index: 100;
  box-shadow: 0px 5px 13px 0px rgba(0, 0, 0, 0.38);
  li {
    a {
      color: ${props => props.theme.colors.blue};
      display: block;
      padding: 10px;
      text-decoration: none;
      line-height: 16px;
      white-space: nowrap;
      /* &.active, */
      &:hover {
        background-color: ${props => props.theme.colors.blue};
        color: white;
      }
    }
  }
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${IconWhite});
`;

const Wrapper = styled.div`
  height: 100%;
  font-size: 14px;
  position: relative;
  background-color: transparent;
  margin-left: 15px;
  ${breakpoint('desktop')(css`
    display: none;
  `)};
  &:hover {
    ${Icon} {
      background-color: white;
      box-shadow: 0px 5px 13px 0px rgba(0, 0, 0, 0.38);
      background-image: url(${IconBlue});
    }
    ${List} {
      display: block;
    }
  }
`;

const Item = styled.li``;

const MobileMenu = () => (
  <Wrapper>
    <Icon />
    <List>
      <Item>
        <Link to="#" activeClassName="active">
          <FormattedMessage
            id="menu.buy"
            defaultMessage="Cumpărăm rapid locuința ta"
          />
        </Link>
      </Item>
      <Item>
        <Link to="#details">
          <FormattedMessage id="menu.details" defaultMessage="Detalii" />
        </Link>
      </Item>
      <Item>
        <Link to="#reviews">
          <FormattedMessage id="menu.reviews" defaultMessage="Comentarii" />
        </Link>
      </Item>
      <Item>
        <Link to="#contacts">
          <FormattedMessage id="menu.contacts" defaultMessage="Contacte" />
        </Link>
      </Item>
      <Item>
        <Language mobile />
      </Item>
    </List>
  </Wrapper>
);

export default MobileMenu;
