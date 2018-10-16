// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Box from '../Box';
import WidthContainer from '../WidthContainer';
import { Consumer as SidebarConsumer } from '../Sidebar/context';
import SectionContent from '../Section';
import Fb from './fb.svg';
import Skype from './skype.svg';
import Viber from './viber.svg';
import Whatsapp from './whatsapp.svg';
import Instagram from './instagram.svg';

const Wrapper = styled(Box)`
  padding-bottom: 50px;
`;

const Socials = styled.div`
  display: none;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  a {
    display: inline-block;
    margin: 0 30px;
    img {
      width: 36px;
    }
  }
`;
const Menu = styled.div`
  display: none;
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  ${breakpoint('tablet')(css`
    flex-direction: row;
    justify-content: center;
  `)};

  a {
    margin: 5px 0;
    ${breakpoint('tablet')(css`
      margin: 0 30px;
    `)};
    display: inline-block;
    text-decoration: none;
    color: #313a41;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
`;
const CopyRight = styled.div`
  color: #86949d;
  font-size: 16px;
  line-height: 34px;
  text-align: center;
`;
type Props = {
  openSidebar: () => any,
};

const Section = styled(SectionContent)`
  margin-bottom: 0;
`;
const Footer = (props: Props) => (
  <Wrapper>
    <WidthContainer>
      <Socials>
        <a href="">
          <img src={Fb} alt="" />
        </a>
        <a href="">
          <img src={Skype} alt="" />
        </a>
        <a href="">
          <img src={Viber} alt="" />
        </a>
        <a href="">
          <img src={Whatsapp} alt="" />
        </a>
        <a href="">
          <img src={Instagram} alt="" />
        </a>
      </Socials>
      <Menu>
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            props.openSidebar();
          }}
        >
          Aplică acum
        </a>
        <a href="">Privacy&Cookies</a>
        <a href="">Term of Use</a>
      </Menu>
      <CopyRight>
        <p>2018 Privat. All rights reserved.</p>
      </CopyRight>
    </WidthContainer>
  </Wrapper>
);
export default () => (
  <SidebarConsumer>
    {({ open }) => <Footer openSidebar={open} />}
  </SidebarConsumer>
);
