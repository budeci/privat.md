// @flow

import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Slider from 'react-slick';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Box from '../../layout/Box';
import WidthContainer from '../../layout/WidthContainer';
import SectionHeader from '../../typography/SectionHeader';
import { ArrowLeft, ArrowRight } from '../../../utils/svg';
import Point from './point.png';
import Unimedia from './unimedia.png';
import Diez from './diez.png';

const Wrapper = styled.div`
  min-height: 100px;
  @supports (display: grid) {
    display: grid;
    justify-content: flex-start;
    align-items: flex-end;
    flex-direction: row;
    grid-template-columns: repeat(1, 1fr);
  }
  ${breakpoint('desktop')(css`
    grid-template-columns: repeat(2, 1fr);
  `)};
`;
const Left = styled.div``;
const Right = styled.div``;
const Arrow = styled.div`
  &.top {
    display: none;
    ${breakpoint('desktop')(css`
      display: grid;
    `)};
  }
  &.bottom {
    display: grid;
    margin-top: 30px;
    ${breakpoint('desktop')(css`
      display: none;
    `)};
  }
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  grid-column-gap: 10px;
  grid-template-columns: 70px 70px;
  margin-bottom: 10px;
  button {
    height: 60px;
    padding: 16px 10px;
    border: 1px solid ${props => props.theme.colors.blue};
    border-radius: 4px;
    background-color: #ffffff;
  }
`;
const Section = styled.div``;
const News = styled.div`
  width: 100%;
  margin-top: 90px;
  position: relative;
  overflow: hidden;
  .slick-slide {
    *:focus {
      outline: none;
    }
  }
  .slick-active:first-child {
    box-shadow: 0 20px 24px 0 rgba(134, 148, 157, 0.33);
  }
`;

const Slide = styled.div`
  padding: 0 15px;
  /* width: 470px; */
`;
const Content = styled.div`
  padding: 40px;
  border: 1px solid #ebf0f2;
  > p {
    font-size: 16px;
    min-height: 150px;
  }
`;
const Logo = styled.div`
  margin-top: 20px;
`;
class PressSection extends PureComponent {
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
      className: 'center',
      centerMode: true,
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            centerMode: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box my={[6, 6, 6]}>
        <Section>
          <WidthContainer>
            <Wrapper>
              <Left>
                <SectionHeader>
                  <FormattedMessage
                    id="press.title"
                    defaultMessage="Articole în Presă"
                  />
                </SectionHeader>
              </Left>
              <Right>
                <Arrow className="top">
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
          <News>
            <Slider {...settings} ref={c => (this.slider = c)}>
              <Slide key={1} className="slide">
                <Content>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                  <Logo>
                    <img src={Point} alt="" />
                  </Logo>
                </Content>
              </Slide>
              <Slide key={2} className="slide">
                <Content>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                  <Logo>
                    <img src={Unimedia} alt="" />
                  </Logo>
                </Content>
              </Slide>
              <Slide key={3} className="slide">
                <Content>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                  <Logo>
                    <img src={Diez} alt="" />
                  </Logo>
                </Content>
              </Slide>
              <Slide key={4} className="slide">
                <Content>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                  <Logo>
                    <img src={Point} alt="" />
                  </Logo>
                </Content>
              </Slide>
              <Slide key={5} className="slide">
                <Content>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                  <Logo>
                    <img src={Unimedia} alt="" />
                  </Logo>
                </Content>
              </Slide>
              <Slide key={6} className="slide">
                <Content>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                  <Logo>
                    <img src={Diez} alt="" />
                  </Logo>
                </Content>
              </Slide>
            </Slider>
          </News>
          <WidthContainer>
            <Arrow className="bottom">
              <button className="button" onClick={this.previous}>
                <ArrowLeft color="#108EC8" size="24" />
              </button>
              <button className="button" onClick={this.next}>
                <ArrowRight color="#108EC8" size="24" />
              </button>
            </Arrow>
          </WidthContainer>
        </Section>
      </Box>
    );
  }
}

export default PressSection;
