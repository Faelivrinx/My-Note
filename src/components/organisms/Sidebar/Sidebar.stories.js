import React from 'react';
import Sidebar from './Sidebar';

export default {
  component: 'Sidebar',
  title: 'Sidebar',
};

export const sidebarNote = () => <Sidebar pageType="note" />;

export const sidebarTwitter = () => <Sidebar pageType="twitter" />;

export const sidebarArticles = () => <Sidebar pageType="article" />;
