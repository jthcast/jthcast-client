import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../../locales/i18n';
import MenuList from '.';

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

it('renders MenuList with className', () => {
  render(
    <Router>
      <RecoilRoot>
        <MenuList className="test" />
      </RecoilRoot>
    </Router>
  );

  const scrollTopButton = screen.getByRole('button');
  fireEvent.click(scrollTopButton);
});

it('renders MenuList with showStartPosition bottom', () => {
  render(
    <Router>
      <RecoilRoot>
        <MenuList showStartPosition="bottom" />
      </RecoilRoot>
    </Router>
  );
});

it('renders MenuList with showStartPosition left', () => {
  render(
    <Router>
      <RecoilRoot>
        <MenuList showStartPosition="left" />
      </RecoilRoot>
    </Router>
  );
});

it('renders MenuList with showStartPosition right', () => {
  render(
    <Router>
      <RecoilRoot>
        <MenuList showStartPosition="right" />
      </RecoilRoot>
    </Router>
  );
});

it('renders MenuList with showStartPosition top', () => {
  render(
    <Router>
      <RecoilRoot>
        <MenuList showStartPosition="top" />
      </RecoilRoot>
    </Router>
  );
});
