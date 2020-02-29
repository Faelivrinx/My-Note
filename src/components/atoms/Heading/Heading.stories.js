import React from 'react';
import Heading from './Heading';

export default {
  component: 'Heading',
  title: 'Heading',
};

export const normal = () => <Heading>Hello World!</Heading>;

export const large = () => <Heading big>Hello World!</Heading>;
