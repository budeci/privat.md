// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

type Props = {
  children?: any,
};

const GlobalTypography = (props: Props) => <Wrapper>{props.children}</Wrapper>;

export default GlobalTypography;
