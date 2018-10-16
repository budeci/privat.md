// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import Section from '../../layout/Section';
import SectionHeader from '../../typography/SectionHeader';
import { Clock, Minus, Plus } from '../../../utils/svg';
const Wrapper = styled.div`
  justify-content: flex-start;
  align-items: top;
  flex-direction: row;
  min-height: 700px;
  border: 1px solid #ebf0f2;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr;
  }
  ${breakpoint('desktop')(css`
    display: grid;
    grid-template-columns: 50% 50%;
  `)};
`;
const Left = styled.div`
  background-color: #ebf0f2;
  padding: 60px 30px 20px 30px;
  ${breakpoint('desktop')(css`
    padding: 75px 60px 20px 60px;
  `)};
  ${Time} {
    color: #333;
  }
`;
const Right = styled.div`
  padding: 60px 30px 20px 30px;
  ${breakpoint('desktop')(css`
    padding: 75px 60px 20px 60px;
  `)};
  ${Time} {
    color: ${props => props.theme.colors.blue};
  }
`;
const List = styled.ul`
  margin-top: 20px;
  ${breakpoint('desktop')(css`
    margin-top: 40px;
  `)};
`;
const Item = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  display: grid;
  grid-column-gap: 5%;
  grid-template-columns: 70% 25%;
  align-items: center;
`;
const Cell = styled.div`
  color: #333333;
  font-size: 19px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
  span {
    font-weight: 500;
    display: block;
    margin-right: 5px;
    color: #9e9e9e;
  }
`;
const Time = styled.div`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin: 30px 0;
  svg {
    margin-right: 10px;
  }
`;
const TitleSection = styled.div`
  h2 {
    font-size: 28px;
  }
`;

const OfferSection = () => (
  <Section>
    <Wrapper>
      <Left>
        <TitleSection>
          <SectionHeader>
            <FormattedMessage
              id="offer.individual.sale"
              defaultMessage="Vânzarea individuală"
            />
          </SectionHeader>
        </TitleSection>
        <List>
          <Item>
            <Cell>
              <Minus color="#86949D" size="24" />
              <FormattedMessage
                id="offer.individual1"
                defaultMessage="Prețul anunțat"
              />
            </Cell>
            <Cell>
              <span>€</span> 50.000
            </Cell>
          </Item>
          <Item>
            <Cell>
              <Minus color="#86949D" size="24" />
              <FormattedMessage
                id="offer.individual2"
                defaultMessage="Prețul acceptat după negocieri"
              />
            </Cell>
            <Cell>
              <span>€</span> 47.000
            </Cell>
          </Item>
          <Item>
            <Cell>
              <Minus color="#86949D" size="24" />
              <FormattedMessage
                id="offer.individual3"
                defaultMessage="Comisionul Agentului 3%-4%"
              />
            </Cell>
            <Cell>
              <span>€</span> 1500
            </Cell>
          </Item>
          <Item>
            <Cell>
              <Minus color="#86949D" size="24" />
              <FormattedMessage
                id="offer.individual4"
                defaultMessage="Reparații și aranjări"
              />
            </Cell>
            <Cell>
              <span>€</span> 1000
            </Cell>
          </Item>
          <Item>
            <Cell>
              <Minus color="#86949D" size="24" />
              <FormattedMessage
                id="offer.individual5"
                defaultMessage="Prețul final"
              />
            </Cell>
            <Cell>
              <span>€</span> 44.500
            </Cell>
          </Item>
        </List>
        <Time>
          <Clock color="#86949D" size="24" />
          <FormattedMessage
            id="offer.individual.time"
            defaultMessage="6 - 9 luni"
          />
        </Time>
      </Left>
      <Right>
        <TitleSection>
          <SectionHeader>
            <FormattedMessage id="offer.weOffer" defaultMessage="Noi oferim" />
          </SectionHeader>
        </TitleSection>
        <List>
          <Item>
            <Cell>
              <Plus color="#108EC8" size="24" />
              <FormattedMessage
                id="offer.weOffer1"
                defaultMessage="Valoarea de piață"
              />
            </Cell>
            <Cell>
              <span>€</span> 50.000
            </Cell>
          </Item>
          <Item>
            <Cell>
              <Plus color="#108EC8" size="24" />
              <FormattedMessage
                id="offer.weOffer2"
                defaultMessage="Oferta propusă"
              />
            </Cell>
            <Cell>
              <span>€</span> 43.000
            </Cell>
          </Item>
          <Item>
            <Cell>
              <Plus color="#108EC8" size="24" />
              <FormattedMessage
                id="offer.weOffer3"
                defaultMessage="Comisionul Agentului"
              />
            </Cell>
            <Cell>
              <span>€</span> 0
            </Cell>
          </Item>
          <Item>
            <Cell>
              <Plus color="#108EC8" size="24" />
              <FormattedMessage
                id="offer.weOffer4"
                defaultMessage="Reparatii şi aranjări"
              />
            </Cell>
            <Cell>
              <span>€</span> 0
            </Cell>
          </Item>
          <Item>
            <Cell>
              <Plus color="#108EC8" size="24" />
              <FormattedMessage
                id="offer.weOffer5"
                defaultMessage="Prețul final"
              />
            </Cell>
            <Cell>
              <span>€</span> 43.200
            </Cell>
          </Item>
        </List>
        <Time>
          <Clock color="#108EC8" size="24" />
          <FormattedMessage
            id="offer.weOffer.time"
            defaultMessage="24 ore - 7 zile"
          />
        </Time>
      </Right>
    </Wrapper>
  </Section>
);

export default OfferSection;
