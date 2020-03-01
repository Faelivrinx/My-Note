import React from 'react';
import styled from 'styled-components';
import PlusIcon from 'assets/icons/plus.svg';
import BulbIcon from 'assets/icons/bulb.svg';
import PenIcon from 'assets/icons/pen.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.note};
`;

export default {
  component: 'ButtonIcon',
  title: 'ButtonIcon',
  decorators: [storyFn => <YellowBackground>{storyFn()}</YellowBackground>],
};

export const plus = () => <ButtonIcon icon={PlusIcon} />;
export const plusActive = () => <ButtonIcon active icon={PlusIcon} />;
export const bulb = () => <ButtonIcon icon={BulbIcon} />;
export const pen = () => <ButtonIcon icon={PenIcon} />;
export const twitter = () => <ButtonIcon icon={TwitterIcon} />;
export const logout = () => <ButtonIcon icon={LogoutIcon} />;
