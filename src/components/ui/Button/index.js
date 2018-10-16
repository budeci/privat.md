// @flow

import React from 'react';
import styled, { withTheme, css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { ReactComponent as RightArrow } from './right-arrow.svg';

type Props = {
  display?: 'inline-block' | 'block',
  disabled?: boolean,
  arrow?: boolean,
  type?: 'button' | 'submit' | 'reset',
  size?: 'small' | 'regular' | 'big' | 'giant',
  fontWeight?: 'normal' | 'bold',
  fontColor?: 'primary' | 'green' | 'blue' | 'white' | 'red',
  buttonStyle?: 'flat' | 'bordered',
  buttonColor?: 'primary' | 'green' | 'blue' | 'white' | 'red',
  children?: any,
  component?: any,
  onClick?: Function,
};

const StyledButton = styled.button`
  padding: 5px 10px;
  border-radius: 0;
  border: none;
  color: white;
  font-size: 14px;
  background: ${props => props.theme.colors.lightGreen};
  border-radius: 4px;
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  &:disabled {
    opacity: 0.7;
  }
  ${props => css`
    ${props.size === 'big' &&
      css`
        min-width: 130px;
        ${breakpoint('tablet')(css`
          min-width: 270px;
          padding: 18px 25px;
        `)};
      `};
    ${props.arrow &&
      css`
        span {
          width: 90%;
        }
        svg {
          float: right;
          font-size: 24px;
        }
      `};
  `};
`;

const Button = ({
  display = 'inline-block',
  disabled = false,
  arrow = false,
  type = 'button',
  size = 'regular',
  fontWeight = 'bold',
  fontColor = 'white',
  buttonStyle = 'flat',
  buttonColor = 'primary',
  component = 'button',
  children,
  ...rest
}: Props) => {
  const Component = StyledButton.withComponent(component);

  return (
    <Component
      type={type}
      display={display}
      disabled={disabled}
      arrow={arrow}
      size={size}
      fontWeight={fontWeight}
      fontColor={fontColor}
      buttonStyle={buttonStyle}
      buttonColor={buttonColor}
      {...rest}
    >
      {children}
      {arrow && <RightArrow />}
    </Component>
  );
};

export default withTheme(Button);
