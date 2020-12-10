import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = (): null => {
  const { pathname } = useLocation();
  const root = document.getElementById('root');

  useLayoutEffect(() => {
    if (pathname && root) {
      root.scrollTop = 0;
    }
  });

  return null;
};

export default ScrollToTop;
