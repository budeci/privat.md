// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ReactModal, { setAppElement } from 'react-modal';

type Props = {
  isOpen: boolean,
  children?: any,
  isLoading?: boolean,

  onRequestClose?: () => any,
};

const StyledModal = styled(ReactModal)`
  position: relative;
  width: ${props => (props.width ? props.width : '100%')};
  background: white;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.15);
  /* overflow: auto; */
  padding: 20px;
  margin: 20px;
  transition: all 300ms ease-in-out;
  max-width: 600px;
  &.ReactModal__Content {
    transform: scale(0.5);
    opacity: 0;
    height: calc(100% - 10%);
    * {
      height: 100%;
    }
    &--after-open {
      opacity: 1;
      transform: scale(1);
    }

    &--before-close {
      opacity: 0;
      transform: scale(1.5);
    }
  }
  ${props => css`
    ${props.right &&
      css`
        ${breakpoint('tablet')(css`
          max-width: none;
          height: 100%;
          position: fixed;
          right: -100%;
          margin: 0;
          border-radius: 0;
          width: 80%;
          padding-top: 70px;
          &.ReactModal__Content {
            height: 100%;
            transform: none;
            transition: all 300ms ease-in-out;
            &--after-open {
              right: 0;
            }
            &--before-close {
              right: -100%;
            }
          }
        `)};
        ${breakpoint('desktop')(css`
          width: 50%;
        `)};
      `};
  `};
  /* ${breakpoint('tablet')(css`
    padding: 30px;
    max-width: 600px;
  `)}; */

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  overflow: auto;

  /* ${breakpoint('tablet')(css`
    height: auto;
  `)}; */
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
`;

const Content = styled.div`
  padding-top: 0px;
  margin-bottom: 0px;
  height: 100%;
  /* ${breakpoint('tablet')(css`
    padding-top: 0;
    margin-bottom: 0;
  `)}; */
`;

const CloseButton = styled.button`
  /* display: none; */
  border: none;
  background: none;
  padding: 0;
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 30px;
  color: #888;
  font-weight: normal;
  height: 48px !important;
  width: 48px;	
  background-color: #FFFFFF;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(49,58,65,0.29);
  cursor: pointer;
  ${props => css`
    ${props.right &&
      css`
        ${breakpoint('tablet')(css`
          top: 20px;
          right: 20px;
        `)};
      `};
  `};

  /* ${breakpoint('tablet')(css`
    display: block;
  `)}; */

  &:hover {
    filter: brightness(1.1);
  }

  &:focus {
    outline: none;
  }

  &:active {
    filter: brightness(1.2);
  }
`;

const customStyles = {
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transform: 'translate3d(0, 0, 0)',
    zIndex: 10000,
  },
};

const Modal = (props: Props) => {
  setAppElement('.root');

  return (
    <StyledModal
      width={props.width ? props.width : null}
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      contentLabel="Modal"
      closeTimeoutMS={300}
      shouldReturnFocusAfterClose={false}
      htmlOpenClassName="overflow-hidden"
      bodyOpenClassName="overflow-hidden"
      style={customStyles}
      right={props.right}
    >
      <Wrapper>
        <Content>{props.children}</Content>

        {props.isLoading && <Loader />}
      </Wrapper>

      <CloseButton onClick={props.onRequestClose} right={props.right}>
        ×
      </CloseButton>
    </StyledModal>
  );
};

export default Modal;
