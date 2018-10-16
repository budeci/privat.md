// @flow

import React, { PureComponent, createContext } from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { Consumer } from './context';

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  width: 50vw;
  height: 100%;
  background: white;
  visibility: hidden;
  opacity: 0;

  ${ifProp(
    'isOpen',
    css`
      visibility: visible;
      opacity: 1;
    `,
  )};
`;

type Props = {
  isOpen: boolean,
  close: () => any,
};

class Sidebar extends PureComponent<Props> {
  render() {
    return (
      <Wrapper isOpen={this.props.isOpen}>
        <button onClick={this.props.close}>Close</button>
      </Wrapper>
    );
  }
}

export default () => (
  <Consumer>
    {({ isOpen, close }) => <Sidebar isOpen={isOpen} close={close} />}
  </Consumer>
);
