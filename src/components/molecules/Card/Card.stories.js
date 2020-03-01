import React from 'react';
import Card from './Card';

export default {
  component: 'Card',
  title: 'Card',
};

export const primary = () => <Card />;
export const secondary = () => <Card cardType="twitter" />;
export const tertiary = () => <Card cardType="article" />;
