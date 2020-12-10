import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import About from '.';

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

it('renders About', () => {
  render(
    <Router>
      <RecoilRoot>
        <HelmetProvider>
          <About />
        </HelmetProvider>
      </RecoilRoot>
    </Router>
  );
});
