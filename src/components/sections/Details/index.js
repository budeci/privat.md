// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withPrefix } from 'gatsby-link';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import Box from '../../layout/Box';
import WidthContainer from '../../layout/WidthContainer';
import Section from '../../layout/Section';
import Accordion from '../../ui/Accordion';
import AlertIcon from './alert.svg';

const Wrapper = styled(Box)`
  overflow: hidden;
`;
const Grid = styled.div`
  @supports (display: grid) {
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    flex-direction: column-reverse;
  }
  ${breakpoint('desktop')(css`
    min-height: 1080px;
    border: 1px solid #ebf0f2;
    @supports (display: grid) {
      display: grid;
      grid-template-columns: 60% 40%;
      justify-content: flex-start;
      align-items: top;
      flex-direction: row;
    }
  `)};
`;
const Left = styled.div`
  position: relative;
  padding: 20px 0;
  ${breakpoint('desktop')(css`
    padding: 180px 0px 20px 60px;
  `)};
`;
const Right = styled.div`
  position: relative;
  img.bg {
    border-bottom: 10px solid ${props => props.theme.colors.blue};
    visibility: hidden;
    ${breakpoint('desktop')(css`
      visibility: visible;
      max-width: none;
    `)};
  }
  > span.mobile {
    ${breakpoint('desktop')(css`
      display: none;
    `)};
    width: calc(100% + 20px);
    height: 100%;
    position: absolute;
    bottom: 0;
    left: -20px;
    z-index: 10;
    background: url(${withPrefix('details/bg.jpg')}) no-repeat top left;
    background-size: cover;
  }
`;
const AccordionWrap = styled.div`
  ${breakpoint('desktop')(css`
    min-width: 800px;
    position: relative;
    z-index: 100;
    margin-top: 30px;
  `)};
`;
const Title = styled.h2`
  margin: 40px 0;
  font-size: 30px;
  ${breakpoint('desktop')(css`
    font-size: 46px;
  `)};
  color: #333;
`;
const Decor = styled.div`
  &.desktop {
    display: none;
    top: 0;
    left: 60px;
    ${breakpoint('desktop')(css`
      display: block;
    `)};
  }
  &.mobile {
    display: block;
    bottom: 0;
    left: 0;
    ${breakpoint('desktop')(css`
      display: none;
    `)};
  }
  z-index: 100;
  position: absolute;
  height: 180px;
  width: 132px;
  background: ${props => props.theme.colors.blue};
  img {
    width: 50px;
    position: absolute;
    bottom: 40px;
    left: calc(50% - 25px);
  }
`;
const DetailsSection = () => (
  <Wrapper id="details">
    <WidthContainer>
      <Grid>
        <Left>
          <Title>
            <FormattedMessage id="details.title" defaultMessage="Detalii" />
          </Title>
          <AccordionWrap>
            <Accordion />
          </AccordionWrap>
          <Decor className="desktop">
            <img src={AlertIcon} alt="" />
          </Decor>
        </Left>
        <Right>
          <img className="bg" src={withPrefix('details/bg.jpg')} alt="" />
          <span className="mobile" />
          <Decor className="mobile">
            <img src={AlertIcon} alt="" />
          </Decor>
        </Right>
      </Grid>
    </WidthContainer>
  </Wrapper>
);

export default DetailsSection;
