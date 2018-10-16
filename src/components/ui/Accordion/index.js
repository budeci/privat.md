// @flow

import React from 'react';
import styled from 'styled-components';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Wrapper = styled.div`
  .accordion {
    background-color: white;
    .accordion__title {
      background-color: white;
      padding: 25px 15px;
      h3 {
        position: relative;
        padding-left: 33px;
        font-size: 19px;
        color: #333333;
        i {
          top: 16px;
          left: 0;
          right: none;
        }
      }
    }
  }
`;

const AccordionContainer = () => (
  <Wrapper>
    <Accordion>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>
            <FormattedMessage id="details.question1" defaultMessage="Ce sumă din valoarea de piață îmi veți oferi pentru locuința mea?" />
            <i className="accordion__arrow" role="presentation" />
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            <FormattedMessage id="details.answer1" defaultMessage="În dependență de starea locuinței, ce condiții de trai întrunește și în ce regiune se află. Deobicei oferta include 85%-90% din valoarea locuinței de piață." />
          </p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>
            <FormattedMessage id="details.question2" defaultMessage="În cazul în care am nevoie urgent de bani din cauza unor probleme personale și vreau să vînd imobilul rapid mă puteți ajuta?" />
            <i className="accordion__arrow" role="presentation" />
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            <FormattedMessage id="details.answer2" defaultMessage="Cumpărăm rapid locuința în orice situație vă aflați, fie că aveți probleme financiare, de familie, sau doar doriți să vă schimbați locuința." />
          </p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>
            <FormattedMessage id="details.question3" defaultMessage="În cît timp primesc banii din vînzarea locuinței?" />
            <i className="accordion__arrow" role="presentation" />
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            <FormattedMessage id="details.answer3" defaultMessage="După acceptarea ofertei noastre primiți arvuna iar în 7 zile primiți restul sumei." />
          </p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>
            <FormattedMessage id="details.question4" defaultMessage="Sunt careva costuri pentru serviciul de cumpărare rapidă a locuinței?" />
            <i className="accordion__arrow" role="presentation" />
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p><FormattedMessage id="details.answer4" defaultMessage="Nu sunt, serviciul de cupărare rapidă a locuinței este gratuit" /></p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>
            <FormattedMessage id="details.question5" defaultMessage="Locuința mea trebuie să fie în stare bună?" />
            <i className="accordion__arrow" role="presentation" />
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p><FormattedMessage id="details.answer5" defaultMessage="Nu, cumpărăm locuința în orice stare nu s-ar afla." /></p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>
            <FormattedMessage id="details.question6" defaultMessage="Ce tipuri de proprietați cumparați?" />
            <i className="accordion__arrow" role="presentation" />
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p><FormattedMessage id="details.answer6" defaultMessage="Cumpărăm toate tipurile de proprietăți imobilare locative." /></p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>
            <FormattedMessage id="details.question7" defaultMessage="Aș vrea să-mi faceți o ofertă. Ce trebuie să fac în continuare?" />
            <i className="accordion__arrow" role="presentation" />
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            <FormattedMessage id="details.answer7" defaultMessage="Simplu completați formularul nostru online sau sunați la 076767663 pentru a discuta cu operatorul nostru." />
          </p>
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  </Wrapper>
);

export default AccordionContainer;
