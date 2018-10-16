// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import GatsbyLink from 'gatsby-link';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

const Wrapper = styled.nav`
  height: 100%;
  font-size: 14px;
  display: none;
  ${breakpoint('desktop')(css`
    display: block;
  `)};
`;

const List = styled.ul`
  display: flex;
  height: 100%;
  > li {
    margin-right: 60px;
    height: 100%;
    &::last-child {
      margin-right: 0;
    }
  }
`;

const Item = styled.li``;

const Link = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.2s;
  box-sizing: border-box;
  white-space: nowrap;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  &.active {
    pointer-events: none;
    border-bottom: solid 3px white;
    color: rgba(255, 255, 255, 1);
  }
`;

const HeaderMenu = () => (
  <Wrapper>
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
    </List>
  </Wrapper>
);

export default HeaderMenu;
