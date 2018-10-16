// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import Section from '../../layout/Section';
import { List, Feather } from '../../../utils/svg';
import Money from './money.svg';

const ProcesInfo = styled.div`
  /* grid-column-gap: 15%;
  grid-template-columns: 45% 40%; */
  justify-content: flex-start;
  align-items: top;
  flex-direction: row;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr;
  }
  ${breakpoint('desktop')(css`
    @supports (display: grid) {
      grid-column-gap: 15%;
      grid-template-columns: 45% 40%;
    }
  `)};
`;

const Left = styled.div`
  margin-bottom: 40px;
  ${breakpoint('desktop')(css`
    margin-bottom: 0;
  `)};
  > span {
    font-size: 24px;
    display: block;
    margin-bottom: 30px;
    color: ${props => props.theme.colors.blue};
  }
  h3 {
    font-size: 30px;
    line-height: 36px;
    ${breakpoint('desktop')(css`
      font-size: 46px;
      line-height: 56px;
    `)};

    color: #333333;
  }
`;
const Right = styled.div``;
const Steps = styled.div`
  justify-content: flex-start;
  align-items: top;
  flex-direction: row;
  margin: 90px 0;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr;
  }
  ${breakpoint('desktop')(css`
    @supports (display: grid) {
      grid-template-columns: repeat(3, 1fr);
    }
  `)};
`;

const StepIcon = styled.div`
  display: grid;
  grid-template-columns: 84px auto;
  grid-column-gap: 15px;
  align-items: center;
  i {
    height: 84px;
    width: 84px;
    border: 2px solid #ebf0f2;
    border-radius: 100%;
    display: flex;
    align-items: center;
    svg,
    img {
      margin: auto;
    }
  }
  span {
    font-size: 24px;
    color: ${props => props.theme.colors.blue};
  }
`;
const StepBody = styled.div``;
const Step = styled.div`
  border: 1px solid #ebf0f2;
  &:hover {
    hr {
      background-color: ${props => props.theme.colors.blue};
    }
    border-top: 1px solid white;
    box-shadow: 0 20px 24px 0 rgba(134, 148, 157, 0.33);
  }
  hr {
    background-color: transparent;
    margin: 0;
    height: 5px;
    position: relative;
    top: -1px;
  }
  ${StepBody} {
    padding: 40px;
    h3 {
      color: #333333;
      font-size: 24px;
      font-weight: 600;
      line-height: 33px;
      margin: 60px 0 20px 0;
    }
    p {
      a {
        color: ${props => props.theme.colors.blue};
      }
      i {
        color: #333;
        font-style: normal;
      }
    }
  }
`;
const StepsSection = () => (
  <Section>
    <ProcesInfo>
      <Left>
        <span>
          <FormattedMessage id="steps.process" defaultMessage="Procesul" />
        </span>
        <h3>
          <FormattedHTMLMessage
            id="steps.processTitle"
            defaultMessage="De cumpărarea <br /> rapid a locuinței"
          />
        </h3>
      </Left>
      <Right>
        <p>
          <FormattedMessage
            id="steps.processDetails"
            defaultMessage="Cu noi, ai o ofertă în termen de 24 de ore, în acest sens suntem o soluție ideală pentru vânzarea rapidă a locuinței tale. Aplicarea pe site, acceptarea ofertei și semnarea contractului de vînzare a locuinței sunt singurii pași pentru ca să obții banii în numerar."
          />
        </p>
      </Right>
    </ProcesInfo>
    <Steps>
      <Step>
        <hr />
        <StepBody>
          <StepIcon>
            <i>
              <List color="#108EC8" size="24" />
            </i>
            <span>1.</span>
          </StepIcon>
          <h3>
            <FormattedMessage
              id="steps1.tittle"
              defaultMessage="Aplicarea pe site"
            />
          </h3>
          <p>
            <FormattedHTMLMessage
              id="steps1.details"
              defaultMessage="Aplică acum pentru o ofertă gratuită de cumpărare a locuinței tale
            sau sună la <a href='tel:076767663'>076 767-663</a> pentru a lua
            legătura cu opratorul nostru."
            />
          </p>
        </StepBody>
      </Step>
      <Step>
        <hr />
        <StepBody>
          <StepIcon>
            <i>
              {/* <Money color="#108EC8" size="24" /> */}
              <img src={Money} alt="" />
            </i>
            <span>2.</span>
          </StepIcon>
          <h3>
            <FormattedMessage
              id="steps2.tittle"
              defaultMessage="Primește oferta"
            />
          </h3>
          <p>
            <FormattedHTMLMessage
              id="steps2.details"
              defaultMessage="Odată ce am primit mai multe detalii despre proprietatea ta primești
            oferta de cumpărare a locuinței în decurs de <i>24 ore</i>"
            />
          </p>
        </StepBody>
      </Step>
      <Step>
        <hr />
        <StepBody>
          <StepIcon>
            <i>
              <Feather color="#108EC8" size="24" />
            </i>
            <span>3.</span>
          </StepIcon>
          <h3>
            <FormattedMessage
              id="steps3.tittle"
              defaultMessage="Semnarea contractului"
            />
          </h3>
          <p>
            <FormattedHTMLMessage
              id="steps3.details"
              defaultMessage="Îndată după ce acceptați oferta de cumpărare semnăm un contract de
            arvună și în decurs maxim de <i>7 zile </i> finalizăm
            tranzacția la notar."
            />
          </p>
        </StepBody>
      </Step>
    </Steps>
  </Section>
);

export default StepsSection;
