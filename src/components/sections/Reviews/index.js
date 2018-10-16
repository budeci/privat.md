// @flow

import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withPrefix } from 'gatsby-link';
import Slider from 'react-slick';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Box from '../../layout/Box';
import WidthContainer from '../../layout/WidthContainer';
import SectionHeader from '../../typography/SectionHeader';
import QuoteIco from './quote.svg';
import AuthorImg from './author.png';
import { ArrowLeft, ArrowRight } from '../../../utils/svg';

const Section = styled.div`
  overflow: hidden;
  ${breakpoint('desktop')(css`
    height: 810px;
  `)};
`;
const Wrapper = styled.div`
  min-height: 810px;
  ${breakpoint('desktop')(css`
    display: grid;
    grid-template-columns: 45% 55%;
    justify-content: flex-start;
    align-items: top;
    flex-direction: row;
  `)};
`;
const Left = styled.div`
  position: relative;
  img {
    display: block;
    ${breakpoint('desktop')(css`
      max-width: none;
      position: absolute;
      right: 0;
      z-index: 5;
    `)};
  }
  span {
    display: block;
    width: 191px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    height: 100%;
    background: url(${QuoteIco}) no-repeat top right;
    background-size: contain;
  }
`;
const Right = styled.div`
  border: 1px solid #ebf0f2;
  padding: 50px 20px;
  ${breakpoint('desktop')(css`
    border-left: none;
    padding: 75px 65px 20px 75px;
  `)};
`;

const Comments = styled.div`
  margin-top: 30px;
  /* min-height: 450px; */
  .slick-slide {
    *:focus {
      outline: none;
    }
  }
`;
const Slide = styled.div`
  > p {
    font-size: 19px;
    font-style: italic;
  }
`;
const Author = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  margin: 40px 0;
  line-height: 24px;
  img {
    margin-right: 20px;
    display: none !important;
  }
  p {
    color: #333;
    font-size: 19x;
  }
  span {
    color: #86949d;
    font-size: 14px;
  }
`;
const Arrow = styled.div`
  display: grid;
  justify-content: flex-end;
  ${breakpoint('desktop')(css`
    justify-content: flex-start;
  `)};
  flex-direction: row;
  align-items: center;
  grid-column-gap: 10px;
  grid-template-columns: 70px 70px;
  button {
    height: 60px;
    padding: 16px 10px;
    border: 1px solid ${props => props.theme.colors.blue};
    border-radius: 4px;
    background-color: #ffffff;
  }
`;

class ReviewsSection extends PureComponent {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Box my={[6, 6, 6]} id="reviews">
        <Section>
          <WidthContainer>
            <Wrapper>
              <Left>
                <img src={withPrefix('comments/bg.jpg')} alt="" />
                <span />
              </Left>
              <Right>
                <SectionHeader>
                  <FormattedMessage
                    id="reviews.title"
                    defaultMessage="Comentarii"
                  />
                </SectionHeader>
                <Comments>
                  <Slider {...settings} ref={c => (this.slider = c)}>
                    <Slide key={1}>
                      <p>
                        <FormattedMessage
                          id="reviews.comments1"
                          defaultMessage="Am decis cu fratele meu să vindem locuința rămasă ca moștenire de la părinți. Dar pentru vînzare imobilului la un preț de piață era necesar de investit bani și timp în reparație. Am depus cererea de cumpărare online de pe sit-ul www.privat.md și am primit cea mai bună ofertă în termenul 24 ore."
                        />
                      </p>
                      <Author>
                        <img src={AuthorImg} alt="" />
                        <div>
                          <p>Andrei Ț.</p>
                          <span>Chișinău</span>
                        </div>
                      </Author>
                    </Slide>
                    <Slide key={2}>
                      <p>
                        <FormattedMessage
                          id="reviews.comments2"
                          defaultMessage="Am avut o problemă financiară din cauza căreia mi-a fost sechestrată locuința și urma vînzarea silită a imobilului. Datorită companiei Privat și serviciului de cumpărare rapidă a locuinței am reușit să primesc cea mai bună ofertă de cumpărare în 24 de ore și sigur am acceptat. Mulțumesc echipei pentru corectitudine și profesionalism."
                        />
                      </p>
                      <Author>
                        <img src={AuthorImg} alt="" />
                        <div>
                          <p>Veceslav P.</p>
                          <span>Chișinău</span>
                        </div>
                      </Author>
                    </Slide>
                  </Slider>
                </Comments>
                <Arrow>
                  <button className="button" onClick={this.previous}>
                    <ArrowLeft color="#108EC8" size="24" />
                  </button>
                  <button className="button" onClick={this.next}>
                    <ArrowRight color="#108EC8" size="24" />
                  </button>
                </Arrow>
              </Right>
            </Wrapper>
          </WidthContainer>
        </Section>
      </Box>
    );
  }
}

export default ReviewsSection;
