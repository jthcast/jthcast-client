import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../../locales/i18n';
import Header from '.';

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

it('renders Header with className', () => {
  render(
    <Router>
      <RecoilRoot>
        <Header className="test" />
      </RecoilRoot>
    </Router>
  );
});

it('renders Header with showType up state', () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
  Object.defineProperty(root, 'scrollY', { value: 1000 });
  render(
    <Router>
      <RecoilRoot>
        <Header showType="up" />
      </RecoilRoot>
    </Router>
  );
  fireEvent.scroll(root, { value: 0 });
});
