// @flow

import React, { PureComponent, Component } from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withPrefix } from 'gatsby-link';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

import Modal from './components/Modal';
import Box from '../../layout/Box';
import { ReactComponent as IconPhone } from './phone.svg';
import TagUrl, { ReactComponent as Tag } from './tag.svg';
import { encodeForm } from '../../../utils/encode-form';

import Button from '../../ui/Button';
import WidthContainer from '../../layout/WidthContainer';
// import imgJumbotron from '../../../assets/img/jumbotron.png';
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
        'bot-field': '',
      },
      isOpen: this.props.isOpen || false,
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
    this.handleChange('bot-field', '');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeForm({ 'form-name': 'first-form', ...this.state.form }),
    })
      .then(res => {
        console.log(res);
        this.handleOpenModal();
      })
      .catch(error => alert(error));
    this.handleOpenModal();
  };
  render() {
    const { form, isOpen } = this.state;
    const { tabIndex, page } = this.props;
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
                name="first-form"
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <p className="hidden">
                  <label>
                    <input name="bot-field" />
                  </label>
                </p>
                <ul>
                  <li>
                    <FormattedMessage
                      id="jumbotron.nr.room"
                      defaultMessage="Numărul camerelor"
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="nrRoom"
                      id="nrRoom1"
                      required
                      value="1"
                      checked={form.nrRoom == '1' || false}
                      onChange={(event: Event) => {
                        this.handleChange('nrRoom', event.currentTarget.value);
                      }}
                    />
                    <label htmlFor="nrRoom1">1</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="nrRoom"
                      id="nrRoom2"
                      value="2"
                      checked={form.nrRoom == '2' || false}
                      onChange={(event: Event) => {
                        this.handleChange('nrRoom', event.currentTarget.value);
                      }}
                    />
                    <label htmlFor="nrRoom2">2</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="nrRoom"
                      id="nrRoom3"
                      value="3"
                      checked={form.nrRoom == '3' || false}
                      onChange={(event: Event) => {
                        this.handleChange('nrRoom', event.currentTarget.value);
                      }}
                    />
                    <label htmlFor="nrRoom3">3</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="nrRoom"
                      id="nrRoom4"
                      value="+4"
                      checked={form.nrRoom == '+4' || false}
                      onChange={(event: Event) => {
                        this.handleChange('nrRoom', event.currentTarget.value);
                      }}
                    />
                    <label htmlFor="nrRoom4">+4</label>
                  </li>
                </ul>
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
                        required
                        onChange={(event: Event) => {
                          this.handleChange('phone', event.currentTarget.value);
                        }}
                      />
                    )}
                  </FormattedMessage>
                </FieldsTel>
                <Divider />
                <FieldsAgree>
                  <label htmlFor="agree">
                    <span className="checkbox">
                      <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        checked={form.agree || false}
                        required
                        onChange={() => {
                          this.handleChange('agree', !form.agree);
                        }}
                      />
                      <span className="checkbox-inner" />
                    </span>
                    <FormattedMessage
                      id="jumbotron.agree"
                      defaultMessage="Consimțământul pentru prelucrarea datelor cu caracter personal"
                    />
                  </label>
                </FieldsAgree>
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
            tabIndex={parseInt(tabIndex, 10) || 0}
            onClose={this.handleCloseModal}
            clearForm={this.clearForm}
            primaryForm={form}
            page={page}
          />
        )}
      </Wrapper>
    );
  }
}

export default Jumbotron;
