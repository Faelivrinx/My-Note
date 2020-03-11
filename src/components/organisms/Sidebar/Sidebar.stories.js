import React from 'react';
import Sidebar from './Sidebar';

export default {
  component: 'Sidebar',
  title: 'Sidebar',
};

export const sidebarNote = () => <Sidebar pageType="notes" />;

export const sidebarTwitter = () => <Sidebar pageType="twitters" />;

export const sidebarArticles = () => <Sidebar pageType="articles" />;
