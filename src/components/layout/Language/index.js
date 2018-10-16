import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import ArrowDown from './chevron-down.svg';
import ArrowUp from './chevron-up.svg';

const SelectWrap = styled.div`
  position: relative;
  width: 67px;
  overflow: hidden;
  ${props => css`
    ${!props.mobile &&
      css`
        padding-left: 14px;
        select {
          color: white;
        }
      `};
    ${props.mobile &&
      css`
        margin: 6.5px 10px !important;
        select {
          color: ${props => props.theme.colors.blue};
        }
      `};
  `};
  select {
    width: 65px;
    position: relative;
    z-index: 100;
    min-height: 29px;
    display: block;
    border: none;
    outline: none;
    padding-right: 0px;
    /* background: ${props => props.theme.colors.blue}; */
    background: transparent;
    option {
      background: ${props => props.theme.colors.blue};
      color: white;
    }
  }
  &::after {
    cursor: pointer;
    content: '';
    position: absolute;
    top: 5px;
    right: 0;
    width: 24px;
    height: 24px;
    background: ${props =>
      props.theme.colors.blue} url(${ArrowDown}) no-repeat center;
  }
`;
class Language extends Component {
  static contextTypes = {
    language: PropTypes.object,
  };

  state = {
    value: '',
  };

  componentDidMount() {
    const { language } = this.context;
    this.setState({
      value: language.locale || language.detected,
    });
  }

  handleChange = event => {
    const { language } = this.context;
    const { originalPath } = language;
    const { value } = event.target;

    if (value === this.state.value) {
      return;
    }

    this.setState({ value }, () => {
      localStorage.setItem('language', value);
      window.location.href = `/${value}${originalPath}`;
    });
  };

  render() {
    const { language } = this.context;
    const { languages } = language;
    const { value } = this.state;
    const { mobile } = this.props;

    if (!value) {
      return null;
    }

    return (
      <SelectWrap mobile={mobile}>
        <select value={value} onChange={this.handleChange}>
          {languages.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
      </SelectWrap>
    );
  }
}

export default Language;
