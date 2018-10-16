// @flow

import React, { Children } from 'react';
import Box from '../Box';
import WidthContainer from '../WidthContainer';

type Props = {
  align: 'left' | 'center' | 'right',
  bordered: boolean,
  children?: any,
};

const Section = (props: Props) => (
  <Box my={[6, 6, 6]}>
    <WidthContainer>{props.children}</WidthContainer>
  </Box>
);

export default Section;
