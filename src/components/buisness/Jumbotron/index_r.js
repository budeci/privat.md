// @flow

import React, { PureComponent, Component } from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withPrefix } from 'gatsby-link';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import Recaptcha from 'react-google-recaptcha';

import Modal from './components/Modal';
import Box from '../../layout/Box';
import { ReactComponent as IconPhone } from './phone.svg';
import TagUrl, { ReactComponent as Tag } from './tag.svg';
import Button from '../../ui/Button';
import WidthContainer from '../../layout/WidthContainer';
// import imgJumbotron from '../../../assets/img/jumbotron.png';

const RECAPTCHA_KEY =
  process.env.SITE_RECAPTCHA_KEY || '6LcLDW8UAAAAAKLdS1cZj0NoclXWHcUegzyL24z7';

const Wrapper = styled(Box)`
  overflow: hidden;
  ${breakpoint('desktop')(css`
    height: 900px;
  `)};
`;

const Info = styled.div`
  @supports (display: grid) {
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    flex-direction: column-reverse;
  }
  ${breakpoint('desktop')(css`
    min-height: 900px;
    @supports (display: grid) {
      display: grid;
      grid-column-gap: 15%;
      grid-template-columns: 45% 40%;
      flex-direction: row;
      align-items: center;
    }
  `)};
`;
const Left = styled.div`
  padding: 40px 0;
  ${breakpoint('desktop')(css`
    padding: 0;
  `)};
  h3 {
    font-weight: 300;
    margin-bottom: 40px;
    font-size: 30px;
    line-height: 36px;
    ${breakpoint('desktop')(css`
      font-size: 48px;
      line-height: 56px;
    `)};
    strong {
      display: block;
      font-weight: 600;
    }
  }
  p {
    font-size: 18px;
    ${breakpoint('desktop')(css`
      font-size: 24px;
    `)};
    margin-bottom: 50px;
  }
  form {
    ul {
      display: grid;
      grid-column-gap: 14px;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      grid-template-columns: 70px repeat(4, 55px);
      ${breakpoint('desktop')(css`
        grid-template-columns: 70px repeat(4, 95px);
      `)};
      li {
        line-height: 24px;
        font-size: 14px;
        position: relative;
        input {
          opacity: 0;
          position: absolute;
          left: calc(50% - 6.5px);
          bottom: 0;
          &:checked + label {
            background-color: rgb(255, 255, 255);
            color: ${props => props.theme.colors.blue};
          }
        }
        label {
          height: 60px;
          text-align: center;
          width: 100%;
          cursor: pointer;
          border: 1px solid rgb(255, 255, 255);
          border-radius: 4px;
          display: block;
          line-height: 58px;
        }
      }
    }
    .hidden {
      display: none;
    }
  }
`;
const Right = styled.div`
  position: relative;
  left: -20px;
  min-width: 100vw;
  max-height: 240px;
  overflow: hidden;
  margin-bottom: 40px;
  img {
    max-width: none;
    display: block;
  }
  display: none;
  ${breakpoint('desktop')(css`
    display: block;
    margin-bottom: 0;
    left: 0;
    min-width: auto;
    max-height: initial;
    overflow: initial;
  `)};
`;
const Label = styled.div`
  /* width: 400px; */
  display: flex;
  align-items: center;
  height: 90px;
  ${breakpoint('desktop')(css`
    height: 140px;
  `)};
  position: absolute;
  bottom: 0;
  right: 0;
  ${breakpoint('desktop')(css`
    left: 0;
  `)};
  background-color: rgb(255, 255, 255);
  p {
    min-width: 200px;
    padding: 0 25px;
    font-size: 18px;
    line-height: 24px;
    ${breakpoint('desktop')(css`
      min-width: 315px;
      padding: 25px;
      font-size: 24px;
    `)};
    color: #333333;
    font-weight: 600;
    /* line-height: 33px; */
  }
  > span {
    min-width: 140px;
    height: 100%;
    background-color: ${props => props.theme.colors.lightGreen};
    text-align: center;
    img {
      width: 48px;
      position: relative;
      top: calc(50% - 20px);
      display: block;
      margin: 0 auto;
      ${breakpoint('desktop')(css`
        top: calc(50% - 25px);
      `)};
    }
  }
`;

const Divider = styled.hr`
  margin: 40px 0;
  height: 1px;
  background: rgb(255, 255, 255);
  border: none;
  opacity: 0.5;
`;
const FieldsTel = styled.div`
  margin-top: 20px;
  position: relative;
  input {
    border: 1px solid #c2c9ce;
    background: rgb(255, 255, 255);
    height: 50px;
    width: 100%;
    border-radius: 4px;
    padding: 0 10px 0 65px;
    ${breakpoint('tablet')(css`
      height: 60px;
    `)};
  }
  svg {
    position: absolute;
    font-size: 24px;
    left: 25px;
    top: 13px;
    color: ${props => props.theme.colors.blue};
    z-index: 10;
    ${breakpoint('tablet')(css`
      top: 21px;
    `)};
  }
`;
const FieldsAgree = styled.div`
  margin-bottom: 20px;
  label {
    font-size: 14px;
    display: flex;
    line-height: 20px;
    cursor: pointer;
    .checkbox {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      position: relative;
      line-height: 1;
      vertical-align: middle;
      margin-right: 10px;
      input {
        position: absolute;
        left: 0;
        z-index: 9999;
        cursor: pointer;
        opacity: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        &:checked + span {
          border-color: ${props => props.theme.colors.lightGreen};
          background-color: ${props => props.theme.colors.lightGreen};
        }
      }
      .checkbox-inner {
        width: 20px;
        height: 20px;
        position: relative;
        top: 0;
        left: 0;
        display: inline-block;
        border-radius: 3px;
        border: 1px solid #d9d9d9;
        background-color: #fff;
        &:after {
          transform: rotate(45deg);
          position: absolute;
          left: 6px;
          top: 2px;
          width: 6px;
          height: 11px;
          display: table;
          border: 2px solid #fff;
          border-top: 0;
          border-left: 0;
          content: ' ';
        }
      }
    }
  }
`;
type Props = {
  openSidebar: () => any,
};

class Jumbotron extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      form: {
        nrRoom: '',
        phone: '',
        agree: false,
      },
      isOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(name, value) {
    this.setState({
      form: { ...this.state.form, [name]: value },
    });
  }
  handleChangeForm = () => {
    //this.clearErrors();
  };

  handleRecaptcha = value => {
    this.setState({
      form: { ...this.state.form, 'g-recaptcha-response': value },
    });
  };
  clearForm = () => {
    this.setState({
      form: {},
    });
  };
  handleOpenModal = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isOpen: false,
    });
  };
  handleSubmit = (event: Event) => {
    event.preventDefault();
    // this.props.openSidebar();
    //window.localStorage.setItem('primaryForm', JSON.stringify(this.state.form));
    this.handleOpenModal();
  };
  render() {
    const { form, isOpen } = this.state;
    return (
      <Wrapper color="white" bg="blue" id="jumbotron">
        <WidthContainer>
          <Info>
            <Left>
              <h3>
                <FormattedHTMLMessage
                  id="jumbotron.buy"
                  defaultMessage="Cumpărăm locuința ta <strong>în timp de 24 ore</strong>"
                />
              </h3>
              <p>
                <FormattedHTMLMessage
                  id="jumbotron.fara.intermediar"
                  defaultMessage="Fără intermediar, Comisioane <br /> și Timp Pierdut"
                />
              </p>
              <form
                onSubmit={this.handleSubmit}
                onChange={this.handleChangeForm}
                action="/success"
                name="contact-home"
                method="POST"
                data-netlify="true"
                // data-netlify-recaptcha="true"
                netlify-honeypot="bot-field"
              >
                <p className="hidden">
                  <label>
                    <input name="bot-field" />
                  </label>
                </p>
                <FieldsTel>
                  <IconPhone />
                  <FormattedMessage
                    id="jumbotron.input.placeholder"
                    defaultMessage="Telefon"
                  >
                    {placeholder => (
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone || ''}
                        placeholder={placeholder}
                        onChange={(event: Event) => {
                          this.handleChange('phone', event.currentTarget.value);
                        }}
                      />
                    )}
                  </FormattedMessage>
                </FieldsTel>
                <Divider />
                <ul>
                  <li>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Nume"
                      value=""
                      size="200"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Prenume"
                    />
                  </li>
                  <li>
                    <input type="email" name="email" id="email" />
                  </li>
                  <li>
                    <input
                      type="text"
                      name="street"
                      id="street"
                      placeholder="Strada"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name="nrBlock"
                      id="nrBlock"
                      placeholder="Nr. bloc"
                    />
                  </li>
                  <li>
                    <select name="reasonSale" id="reasonSale">
                      <option value="">Selectați</option>
                      <option value="Divorț">Divorț</option>
                      <option value="Emigrare">Emigrare</option>
                      <option value="Divizare">Divizare</option>
                      <option value="Mostenire">Mostenire</option>
                      <option value="Schimbarea locuinței">
                        Schimbarea locuinței
                      </option>
                      <option value="Datorii">Datorii</option>
                      <option value="Doliu">Doliu</option>
                      <option value="Alte motive">Alte motive</option>
                    </select>
                  </li>
                  <li>
                    <select name="typeDwelling" id="typeDwelling">
                      <option value="">Selectați</option>
                      <option value="Apartament">Apartament</option>
                      <option value="Cămin">Cămin</option>
                      <option value="Casa la sol">Casa la sol</option>
                    </select>
                  </li>
                  <li>
                    <select name="nrRoom" id="nrRoom">
                      <option value="">Selectați</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="+4">+4</option>
                    </select>
                  </li>
                  <li>
                    <select
                      name="etaj"
                      className="form-control"
                      id="etaj"
                      onChange={this.handleChange}
                      value={form.etaj || ''}
                    >
                      <FormattedMessage
                        id="form.contact.selectDefault"
                        defaultMessage="Selectați"
                      >
                        {message => <option value="">{message}</option>}
                      </FormattedMessage>
                      <FormattedMessage
                        id="form.contact.etaj.primul"
                        defaultMessage="Primul"
                      >
                        {message => <option value="Primul">{message}</option>}
                      </FormattedMessage>
                      <FormattedMessage
                        id="form.contact.etaj.intermediar"
                        defaultMessage="Intermediar"
                      >
                        {message => (
                          <option value="Intermediar">{message}</option>
                        )}
                      </FormattedMessage>
                      <FormattedMessage
                        id="form.contact.etaj.ultimul"
                        defaultMessage="Ultimul"
                      >
                        {message => <option value="Ultimul">{message}</option>}
                      </FormattedMessage>
                    </select>
                    <select
                      name="sector"
                      className="form-control"
                      id="sector"
                      onChange={this.handleChange}
                      value={form.sector || ''}
                    >
                      <FormattedMessage
                        id="form.contact.selectDefault"
                        defaultMessage="Selectați"
                      >
                        {message => <option value="">{message}</option>}
                      </FormattedMessage>
                      <FormattedMessage
                        id="form.contact.sector.botanica"
                        defaultMessage="Botanica"
                      >
                        {message => <option value="Botanica">{message}</option>}
                      </FormattedMessage>
                      <FormattedMessage
                        id="form.contact.sector.buiucani"
                        defaultMessage="Buiucani"
                      >
                        {message => <option value="Buiucani">{message}</option>}
                      </FormattedMessage>
                      <FormattedMessage
                        id="form.contact.sector.riscani"
                        defaultMessage="Riscani"
                      >
                        {message => <option value="Riscani">{message}</option>}
                      </FormattedMessage>
                      <FormattedMessage
                        id="form.contact.sector.ciocana"
                        defaultMessage="Ciocana"
                      >
                        {message => <option value="Ciocana">{message}</option>}
                      </FormattedMessage>
                      <FormattedMessage
                        id="form.contact.sector.telecentru"
                        defaultMessage="Telecentru"
                      >
                        {message => (
                          <option value="Telecentru">{message}</option>
                        )}
                      </FormattedMessage>
                      <FormattedMessage
                        id="form.contact.sector.centru"
                        defaultMessage="Centru"
                      >
                        {message => <option value="Centru">{message}</option>}
                      </FormattedMessage>
                      <FormattedMessage
                        id="form.contact.sector.posta.veche"
                        defaultMessage="Posta Veche"
                      >
                        {message => (
                          <option value="Posta Veche">{message}</option>
                        )}
                      </FormattedMessage>
                      <FormattedMessage
                        id="form.contact.sector.aeroport "
                        defaultMessage="Aeroport "
                      >
                        {message => (
                          <option value="Aeroport ">{message}</option>
                        )}
                      </FormattedMessage>
                      <FormattedMessage
                        id="form.contact.sector.durlesti"
                        defaultMessage="Durlesti"
                      >
                        {message => <option value="Durlesti">{message}</option>}
                      </FormattedMessage>
                    </select>
                  </li>
                </ul>
                {/* <Recaptcha
                  ref="recaptcha"
                  sitekey={RECAPTCHA_KEY}
                  onChange={this.handleRecaptcha}
                /> */}
                <Button type="submit" arrow={true} size="big">
                  <FormattedMessage
                    id="jumbotron.apply"
                    defaultMessage="Aplică acum"
                  />
                </Button>
              </form>
            </Left>
            <Right>
              <img src={withPrefix('jumbotron/bg.jpg')} alt="" />
              {/* <img src="https://picsum.photos/g/1000/900/?random" alt="" /> */}
              <Label>
                <p>
                  <FormattedMessage
                    id="jumbotron.free.offer"
                    defaultMessage="Primește oferta gratuit acum"
                  />
                </p>
                <span>
                  <img src={TagUrl} alt="" />
                </span>
              </Label>
            </Right>
          </Info>
        </WidthContainer>
        {isOpen && (
          <Modal
            isOpen={isOpen}
            onClose={this.handleCloseModal}
            clearForm={this.clearForm}
            primaryForm={form}
          />
        )}
      </Wrapper>
    );
  }
}

export default Jumbotron;
