// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1170px;
  /* min-width: 1170px; */
  padding: 0 20px;
  margin: 0 auto;
`;

type Props = {
  children?: any,
};

const WidthContainer = (props: Props) => <Wrapper>{props.children}</Wrapper>;

export default WidthContainer;
