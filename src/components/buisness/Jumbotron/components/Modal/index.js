// @flow
import React, { PureComponent, Component } from 'react';
import styled, { css } from 'styled-components';
import { withPrefix, navigateTo } from 'gatsby-link';
import breakpoint from 'styled-components-breakpoint';
import Recaptcha from 'react-google-recaptcha';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
import { encodeForm } from '../../../../../utils/encode-form';
import { langToSlug } from '../../../../../utils/lang-to-slug';
import Modal from '../../../../ui/Modal';
import Button from '../../../../ui/Button';

const RECAPTCHA_KEY =
  process.env.SITE_RECAPTCHA_KEY || '6LcLDW8UAAAAAKLdS1cZj0NoclXWHcUegzyL24z7';

type Props = {
  isOpen: boolean,
  onClose: () => void,
  clearForm: () => void,
};

const Form = styled.form`
  .react-tabs {
    overflow-y: hidden;
    .react-tabs__tab-list {
      height: auto;
      /* display: flex;
			flex-flow: column;
			list-style-type: none;
			padding: 0;
			align-items: center;
			z-index: 5;
			position: relative;
			font-size: 14px;
			@supports (display: grid) {
				display: grid;
				grid-template-columns: 33.33% 33.33% 33.33%;
			} */
      text-align: center;
      font-size: 0;
      li {
        padding: 10px;
        border-bottom: 1px solid #c2c9ce;
        color: #000000;
        font-weight: 600;
        font-size: 14px;
        width: 100%;
        display: none;
        ${breakpoint('tablet')(css`
          padding: 10px 0;
          width: 33.33%;
          display: inline-block;
        `)};
        cursor: pointer;
        &.react-tabs__tab--selected {
          color: ${props => props.theme.colors.blue};
          border-bottom: 1px solid ${props => props.theme.colors.blue};
          display: inline-block;
          &:focus {
            outline: none;
          }
        }
        &.react-tabs__tab--disabled {
          color: GrayText;
          cursor: no-drop;
        }
      }
    }
    .react-tabs__tab-panel {
      overflow-y: auto;
      display: none;
      &.react-tabs__tab-panel--selected {
        display: block;
        height: calc(100% - 53px);
      }
      * {
        height: auto;
      }
    }
  }
  .form-group {
    margin-bottom: 5px;
    ${breakpoint('tablet')(css`
      margin-bottom: 15px;
    `)};
    label {
      margin-bottom: 3px;
      font-size: 14px;
      color: #86949d;
    }
    .form-control {
      display: block;
      width: 100%;
      padding: 5px;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      border-radius: 4px;
      height: 36px;
      ${breakpoint('tablet')(css`
        padding: 10px;
        height: 46px;
      `)};
    }
    .g-recaptcha-error {
      border: 1px solid red;
      display: inline-block;
      overflow: hidden;
    }
  }
  button {
    margin-top: 20px;
  }
  .hidden {
    display: none;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  color: #333;
`;
const TabContent = styled.div`
  padding: 20px 0;
  height: calc(100% - 165px);
  /* min-height: 620px; */
`;
const Label = styled.p``;
const IconSuccess = styled.i`
  display: block;
  text-align: center;
  margin-top: 70px;
  span {
    background-color: #8bc34a;
    width: 107px;
    height: 107px !important;
    display: inline-block;
    border-radius: 50%;
    position: relative;
    &:after {
      transform: rotate(45deg);
      position: absolute;
      left: 43px;
      top: 18px;
      width: 25px;
      height: 55px !important;
      display: table;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      content: ' ';
    }
  }
`;
class Popup extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: this.props.tabIndex,
      tab1Disabled: props.page === 'index' ? false : true,
      tab2Disabled: true,
      tab3Disabled: props.page === 'index' ? true : false,
      btnSendFormDisabled: true,
      form: {
        nrRoom: props.primaryForm.nrRoom || '',
        phone: props.primaryForm.phone || '',
      },
    };
  }
  clearForm = () => {
    this.setState({
      form: {},
      tab2Disabled: true,
    });
    this.props.clearForm();
  };
  handleChange = e => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };
  handleRecaptcha = value => {
    this.setState({
      btnSendFormDisabled: false,
      form: {
        ...this.state.form,
        'g-recaptcha-response': value,
        'bot-field': '',
      },
    });
  };
  validate(): boolean {
    const formData = this.state.form;

    if (
      !formData.hasOwnProperty('firstName') ||
      formData.firstName.length === 0
    ) {
      return false;
    }

    if (
      !formData.hasOwnProperty('lastName') ||
      formData.lastName.length === 0
    ) {
      return false;
    }

    // if (!formData.hasOwnProperty('email') || formData.email.length === 0) {
    //   return false;
    // }

    if (!formData.hasOwnProperty('phone') || formData.phone.length === 0) {
      return false;
    }

    if (!formData.hasOwnProperty('sector') || formData.sector.length === 0) {
      return false;
    }

    if (!formData.hasOwnProperty('street') || formData.street.length === 0) {
      return false;
    }

    if (!formData.hasOwnProperty('nrBlock') || formData.nrBlock.length === 0) {
      return false;
    }

    if (!formData.hasOwnProperty('etaj') || formData.etaj.length === 0) {
      return false;
    }

    if (!formData.hasOwnProperty('nrRoom') || formData.nrRoom.length === 0) {
      return false;
    }

    if (
      !formData.hasOwnProperty('reasonSale') ||
      formData.reasonSale.length === 0
    ) {
      return false;
    }

    if (
      !formData.hasOwnProperty('typeDwelling') ||
      formData.typeDwelling.length === 0
    ) {
      return false;
    }
    // if (
    //   !formData.hasOwnProperty('g-recaptcha-response') ||
    //   formData['g-recaptcha-response'].length === 0
    // ) {
    //   return false;
    // }

    return true;
  }
  handleSubmit = (event: Event) => {
    event.preventDefault();
    const tabIndex = this.state.tabIndex + 1;
    if (tabIndex == 2 && !this.validate()) {
      return;
    }
    this.setState({
      tab2Disabled: false,
      tabIndex: tabIndex,
      form: {
        ...this.state.form,
        'bot-field': '',
      },
    });
    if (tabIndex == 2) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({ 'form-name': 'contact-home', ...this.state.form }),
      })
        .then(res => {
          console.log(res);
          // this.clearForm();
          navigateTo(langToSlug('/success'), true);
        })
        .catch(error => alert(error));
    }
  };

  handleChangeTab = (idx, nextTab) => {
    this.setState({ tabIndex: idx });
  };
  handleOnClose = () => {
    this.props.onClose;
    navigateTo(langToSlug('/'), true);
  };
  render() {
    resetIdCounter();
    const { isOpen } = this.props;
    const {
      btnSendFormDisabled,
      tab1Disabled,
      tab2Disabled,
      tab3Disabled,
      tabIndex,
      form,
    } = this.state;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={this.handleOnClose}
        noIosScroll
        right
      >
        <Form
          onSubmit={this.handleSubmit}
          name="contact-home"
          action="/success"
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
          <Tabs
            selectedIndex={tabIndex}
            onSelect={tabIndex => this.handleChangeTab(tabIndex, false)}
          >
            <TabList>
              <Tab disabled={tab1Disabled}>
                <FormattedMessage
                  id="tab.contact.details"
                  defaultMessage="Datele de Contact"
                />
              </Tab>
              <Tab disabled={tab2Disabled}>
                <FormattedMessage
                  id="tab.dwelling.details"
                  defaultMessage="Detaliile locuinței"
                />
              </Tab>
              <Tab disabled={tab3Disabled}>
                <FormattedMessage
                  id="tab.receive.offer"
                  defaultMessage="Primește oferta"
                />
              </Tab>
            </TabList>
            <TabPanel>
              <TabContent>
                {/* <Title>
                  <FormattedMessage
                    id="tab.contact.details.title"
                    defaultMessage="Completeaza Datele de Contact"
                  />
                </Title> */}
                <div className="form-group">
                  <label htmlFor="firstName">
                    <FormattedMessage
                      id="form.contact.name"
                      defaultMessage="Nume"
                    />
                  </label>
                  <FormattedMessage
                    id="form.contact.name"
                    defaultMessage="Nume"
                  >
                    {placeholder => (
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        id="firstName"
                        placeholder={placeholder}
                        required
                        onChange={this.handleChange}
                        value={form.firstName || ''}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">
                    <FormattedMessage
                      id="form.contact.prenume"
                      defaultMessage="Prenume"
                    />
                  </label>
                  <FormattedMessage
                    id="form.contact.prenume"
                    defaultMessage="Prenume"
                  >
                    {placeholder => (
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder={placeholder}
                        required
                        onChange={this.handleChange}
                        value={form.lastName || ''}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <FormattedMessage
                      id="form.contact.email"
                      defaultMessage="Email"
                    />
                  </label>
                  <FormattedMessage
                    id="form.contact.email"
                    defaultMessage="Email"
                  >
                    {placeholder => (
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder={placeholder}
                        onChange={this.handleChange}
                        value={form.email || ''}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <FormattedMessage
                      id="form.contact.phone"
                      defaultMessage="Telefon"
                    />
                  </label>
                  <FormattedMessage
                    id="form.contact.phone"
                    defaultMessage="Telefon"
                  >
                    {placeholder => (
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder={placeholder}
                        required
                        onChange={this.handleChange}
                        value={form.phone || ''}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <Button type="submit" arrow={true} size="big">
                  <FormattedMessage
                    id="bnt.next.step"
                    defaultMessage="Următorul pas"
                  />
                </Button>
              </TabContent>
            </TabPanel>
            <TabPanel>
              <TabContent>
                <div className="form-group">
                  <label htmlFor="sector">
                    <FormattedMessage
                      id="form.contact.sector"
                      defaultMessage="Sector/regiunea"
                    />
                  </label>
                  <select
                    name="sector"
                    className="form-control"
                    id="sector"
                    required
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
                      {message => <option value="Telecentru">{message}</option>}
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
                      id="form.contact.sector.aeroport"
                      defaultMessage="Aeroport "
                    >
                      {message => <option value="Aeroport ">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="form.contact.sector.durlesti"
                      defaultMessage="Durlesti"
                    >
                      {message => <option value="Durlesti">{message}</option>}
                    </FormattedMessage>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="street">
                    <FormattedMessage
                      id="form.contact.street"
                      defaultMessage="Strada"
                    />
                  </label>
                  <FormattedMessage
                    id="form.contact.street"
                    defaultMessage="Strada"
                  >
                    {placeholder => (
                      <input
                        type="text"
                        className="form-control"
                        name="street"
                        id="street"
                        placeholder={placeholder}
                        required
                        onChange={this.handleChange}
                        value={form.street || ''}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="nrBlock">
                    <FormattedMessage
                      id="form.contact.nrBlock"
                      defaultMessage="Nr. bloc"
                    />
                  </label>
                  <FormattedMessage
                    id="form.contact.nrBlock"
                    defaultMessage="Nr. bloc"
                  >
                    {placeholder => (
                      <input
                        type="text"
                        className="form-control"
                        name="nrBlock"
                        id="nrBlock"
                        placeholder={placeholder}
                        required
                        onChange={this.handleChange}
                        value={form.nrBlock || ''}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="sector">
                    <FormattedMessage
                      id="form.contact.etaj"
                      defaultMessage="Etaj"
                    />
                  </label>
                  <select
                    name="etaj"
                    className="form-control"
                    id="etaj"
                    required
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
                </div>
                <div className="form-group">
                  <label htmlFor="nrRoom">
                    <FormattedMessage
                      id="form.contact.nrRoom"
                      defaultMessage="Nr. Camerelor"
                    />
                  </label>
                  <select
                    name="nrRoom"
                    className="form-control"
                    id="nrRoom"
                    required
                    onChange={this.handleChange}
                    value={form.nrRoom || ''}
                  >
                    <FormattedMessage
                      id="form.contact.selectDefault"
                      defaultMessage="Selectați"
                    >
                      {message => <option value="">{message}</option>}
                    </FormattedMessage>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="+4">+4</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="reasonSale">
                    <FormattedMessage
                      id="form.contact.reasonSale"
                      defaultMessage="Motivul vînzării"
                    />
                  </label>
                  <select
                    name="reasonSale"
                    className="form-control"
                    id="reasonSale"
                    required
                    onChange={this.handleChange}
                    value={form.reasonSale || ''}
                  >
                    <FormattedMessage
                      id="form.contact.selectDefault"
                      defaultMessage="Selectați"
                    >
                      {message => <option value="">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="form.contact.reasonSale.divort"
                      defaultMessage="Divorț"
                    >
                      {message => <option value="Divorț">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="form.contact.reasonSale.emigrare"
                      defaultMessage="Emigrare"
                    >
                      {message => <option value="Emigrare">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="form.contact.reasonSale.divizare"
                      defaultMessage="Divizare"
                    >
                      {message => <option value="Divizare">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="form.contact.reasonSale.mostenire"
                      defaultMessage="Mostenire"
                    >
                      {message => <option value="Mostenire">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="form.contact.reasonSale.schimbarea.locuintei"
                      defaultMessage="Schimbarea locuinței"
                    >
                      {message => (
                        <option value="Schimbarea locuinței">{message}</option>
                      )}
                    </FormattedMessage>
                    <FormattedMessage
                      id="form.contact.reasonSale.datorii"
                      defaultMessage="Datorii"
                    >
                      {message => <option value="Datorii">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="form.contact.reasonSale.doliu"
                      defaultMessage="Doliu"
                    >
                      {message => <option value="Doliu">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="form.contact.reasonSale.alte.motive"
                      defaultMessage="Alte motive"
                    >
                      {message => (
                        <option value="Alte motive">{message}</option>
                      )}
                    </FormattedMessage>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="typeDwelling">
                    <FormattedMessage
                      id="form.contact.typeDwelling"
                      defaultMessage="Tipul locuinței"
                    />
                  </label>
                  <select
                    name="typeDwelling"
                    className="form-control"
                    id="typeDwelling"
                    required
                    onChange={this.handleChange}
                    value={form.typeDwelling || ''}
                  >
                    <FormattedMessage
                      id="form.contact.selectDefault"
                      defaultMessage="Selectați"
                    >
                      {message => <option value="">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="form.contact.typeDwelling.apartament"
                      defaultMessage="Apartament"
                    >
                      {message => <option value="Apartament">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="form.contact.typeDwelling.camin"
                      defaultMessage="Cămin"
                    >
                      {message => <option value="Cămin">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="form.contact.typeDwelling.casa.sol"
                      defaultMessage="Casa la sol"
                    >
                      {message => (
                        <option value="Casa la sol">{message}</option>
                      )}
                    </FormattedMessage>
                  </select>
                </div>
                <div className="form-group">
                  {/* <Recaptcha
                    ref="recaptcha"
                    sitekey={RECAPTCHA_KEY}
                    onChange={this.handleRecaptcha}
                    className="g-recaptcha"
                  /> */}
                </div>
                <Button type="submit" arrow={true} size="big">
                  <FormattedMessage
                    id="bnt.next.step"
                    defaultMessage="Următorul pas"
                  />
                </Button>
              </TabContent>
            </TabPanel>
            <TabPanel>
              <TabContent>
                <IconSuccess>
                  <span />
                </IconSuccess>
                <Title>
                  <FormattedMessage
                    id="tab.receive.offer.title"
                    defaultMessage="Datele au fost expediate cu succes, în scurt timp veți primi oferta..."
                  />
                </Title>
              </TabContent>
            </TabPanel>
          </Tabs>
        </Form>
      </Modal>
    );
  }
}
export default Popup;
