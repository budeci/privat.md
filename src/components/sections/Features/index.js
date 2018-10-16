// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withPrefix } from 'gatsby-link';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import Box from '../../layout/Box';
import WidthContainer from '../../layout/WidthContainer';
import SectionHeader from '../../typography/SectionHeader';
import CheckUrl from './check.svg';
import { More, Check } from '../../../utils/svg';
const Wrapper = styled.div`
  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: flex-start;
    align-items: top;
    flex-direction: row;
  }
  ${breakpoint('desktop')(css`
    @supports (display: grid) {
      grid-template-columns: 45% 55%;
      min-height: 800px;
    }
  `)};
`;

const Left = styled.div`
  position: relative;
  img {
    visibility: hidden;
    ${breakpoint('desktop')(css`
      visibility: visible;
      max-width: none;
      position: absolute;
      right: 0px;
      z-index: 5;
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
    background: url(${withPrefix('features/bg.jpg')}) no-repeat top left;
    background-size: cover;
    i {
      display: block;
      width: 236px;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 10;
      background: url(${CheckUrl}) no-repeat left bottom;
      background-size: contain;
    }
  }
`;
const Right = styled.div`
  border: 1px solid #ebf0f2;
  border-left: none;

  padding: 50px 20px 20px 20px;
  ${breakpoint('desktop')(css`
    padding: 60px 65px 20px 70px;
  `)};
  > p {
    margin: 25px 0;
  }
`;
const Section = styled.div`
  position: relative;
  ${breakpoint('desktop')(css`
    height: 800px;
  `)};
  > span.desktop {
    display: none;
    ${breakpoint('desktop')(css`
      display: block;
    `)};
    width: 236px;
    height: 253px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 10;
    background: url(${CheckUrl}) no-repeat left bottom;
  }
`;

const Options = styled.div`
  p {
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 30px;
  }
`;
const List = styled.ul`
  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr;
  }
  ${breakpoint('tablet')(css`
    grid-column-gap: 5%;
    grid-template-columns: 40% 55%;
  `)};
`;
const Item = styled.li`
  margin-bottom: 20px;
  color: #333333;
  display: flex;
  align-items: center;
  font-size: 19px;
  svg {
    margin-right: 10px;
  }
`;
const FeaturesSection = () => (
  <Box my={[6, 6, 6]}>
    <Section>
      <WidthContainer>
        <Wrapper>
          <Left>
            <img src={withPrefix('features/bg.jpg')} alt="" />
            <span className="mobile">
              <i />
            </span>
          </Left>
          <Right>
            <SectionHeader>
              <FormattedMessage
                id="features.buy"
                defaultMessage="Cumparăm rapid locuinta ta"
              />
            </SectionHeader>
            <p>
              <FormattedMessage
                id="features.experience"
                defaultMessage="După expierența noastră cunoaștem cît este de greu să vinzi rapid un imobil motiv pentru care am găsit o modalitate pentru proprietarii de locuințe să accelereze procesul de vânzare și poți să obții banii din vânzarea locuinței în 24 ore."
              />
            </p>
            <Options>
              <p>
                <FormattedHTMLMessage
                  id="features.situationTitle"
                  defaultMessage="Cumpărăm locuința ta indiferent <br /> de situația în care te afli"
                />
              </p>
              <List>
                <Item>
                  <Check color="#108EC8" size="24" />
                  <FormattedMessage
                    id="features.situation1"
                    defaultMessage="Divort"
                  />
                </Item>
                <Item>
                  <Check color="#108EC8" size="24" />
                  <FormattedMessage
                    id="features.situation2"
                    defaultMessage="Divizare"
                  />
                </Item>
                <Item>
                  <Check color="#108EC8" size="24" />
                  <FormattedMessage
                    id="features.situation3"
                    defaultMessage="Emigrare"
                  />
                </Item>
                <Item>
                  <Check color="#108EC8" size="24" />
                  <FormattedMessage
                    id="features.situation4"
                    defaultMessage="Schimbarea locuinței"
                  />
                </Item>
                <Item>
                  <Check color="#108EC8" size="24" />
                  <FormattedMessage
                    id="features.situation5"
                    defaultMessage="Datorii"
                  />
                </Item>
                <Item>
                  <Check color="#108EC8" size="24" />
                  <FormattedMessage
                    id="features.situation6"
                    defaultMessage="Moștenire"
                  />
                </Item>
                <Item>
                  <Check color="#108EC8" size="24" />
                  <FormattedMessage
                    id="features.situation7"
                    defaultMessage="Doliu"
                  />
                </Item>
                <Item>
                  <More color="#108EC8" size="24" />
                  <FormattedMessage
                    id="features.situationOther"
                    defaultMessage="Alte motive"
                  />
                </Item>
              </List>
            </Options>
          </Right>
        </Wrapper>
      </WidthContainer>
      <span className="desktop" />
    </Section>
  </Box>
);

export default FeaturesSection;
