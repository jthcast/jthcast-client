import { atom } from 'recoil';

const darkModeState = atom({
  key: 'darkModeState',
  default: false,
});

const headerMessageState = atom({
  key: 'headerMessageState',
  default: true,
});

const systemLanguage = window.navigator.language;
const languageState = atom({
  key: 'language',
  default: systemLanguage.substr(0, 2),
});

export { darkModeState, headerMessageState, languageState };
