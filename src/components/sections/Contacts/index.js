// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withPrefix } from 'gatsby-link';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import Map from '../../ui/Map';
import Section from '../../layout/Section';
import SectionHeader from '../../typography/SectionHeader';
import Pin from './pin.svg';
import Phone from './phone.svg';
import Email from './mail.svg';
import Clock from './clock.svg';

const Wrapper = styled.div``;
const Contacts = styled.div`
  margin-top: 40px;
  /* @supports (display: grid) {
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    flex-direction: column-reverse;
  }
  ${breakpoint('desktop')(css`
    min-height: 700px;
    @supports (display: grid) {
      display: grid;
      grid-template-columns: 50% 50%;
      justify-content: flex-start;
      align-items: top;
      flex-direction: row;
    }
  `)}; */
`;
const Left = styled.div`
  display: none;
`;
const Right = styled.div`
  padding: 75px 60px 20px 60px;
  background-color: ${props => props.theme.colors.blue};
  color: #ffffff;
  /* img {
    margin-bottom: 20px;
  } */
  span {
    display: block;
    font-size: 14px;
    line-height: 24px;
    opacity: 0.5;
    display: flex;
    align-items: center;
    img {
      width: 16px;
      margin-right: 10px;
    }
  }
  ul {
    margin-bottom: 40px;
    &:last-child {
      li {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;
        > div {
          min-width: 150px;
        }
      }
    }
    li {
      font-size: 19px;
      a {
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
`;
const Grid = styled.div`
  margin-top: 30px;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  ${breakpoint('desktop')(css`
    @supports (display: grid) {
      grid-template-columns: repeat(3, 1fr);
      justify-content: flex-start;
      align-items: top;
      flex-direction: row;
    }
  `)};
`;
const Item = styled.div``;

const ContactsSection = () => (
  <Section>
    <Wrapper id="contacts">
      <SectionHeader>
        <FormattedMessage id="contacts.title" defaultMessage="Contacte" />
      </SectionHeader>
      <Contacts>
        <Left>{/* <Map height="700px" width="100%" /> */}</Left>
        <Right>
          <img src={withPrefix('logo.png')} alt="Logo" />
          <Grid>
            <Item>
              <span>
                <img src={Pin} alt="" /> Addresa
              </span>
              <ul>
                <li>
                  <p>
                    Or. Chișinău <br /> str. Mihai Eminescu, 35
                  </p>
                </li>
              </ul>
            </Item>
            <Item>
              <span>
                <img src={Phone} alt="" /> Telefon
              </span>
              <ul>
                <li>
                  <p>
                    <a href="tel:+37376767663">+ (373) 76-767-663</a>
                  </p>
                </li>
              </ul>
            </Item>
            <Item>
              <span>
                <img src={Email} alt="" /> E-mail
              </span>
              <ul>
                <li>
                  <p>
                    <a href="mailto:info@privat.md">info@privat.md</a>
                  </p>
                </li>
              </ul>
            </Item>
          </Grid>
        </Right>
      </Contacts>
    </Wrapper>
  </Section>
);

export default ContactsSection;
