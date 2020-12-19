import React, { useEffect } from 'react';
import './DarkModeSwitch.scss';
import { useRecoilState } from 'recoil';
import Switch from '../../atoms/Switch';
import { darkModeState } from '../../../recoilStates';

const DarkModeSwitch = (): JSX.Element => {
  const [isDark, setDark] = useRecoilState(darkModeState);
  // const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
  // const checkSystemPreference = useCallback(() => {
  //   if (systemPreference.matches) {
  //     setDark(true);
  //   } else {
  //     setDark(false);
  //   }
  // }, [systemPreference.matches, setDark]);

  const darkModeHandling = () => {
    setDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  // useEffect(() => {
  //   checkSystemPreference();
  //   systemPreference.addEventListener('change', checkSystemPreference);

  //   return () => {
  //     systemPreference.removeEventListener('change', checkSystemPreference);
  //   };
  // }, [checkSystemPreference, systemPreference]);

  return (
    <Switch
      className="switch-darkMode"
      checked={isDark}
      unCheckedChildren="🌞"
      checkedChildren="🌜"
      onClick={darkModeHandling}
    />
  );
};

export default DarkModeSwitch;
