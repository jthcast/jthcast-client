import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DarkModeSwitch from '../../molecules/DarkModeSwitch';
import HeaderMessage from '../../atoms/HeaderMessage';
import LanguageSwitch from '../../molecules/LanguageSwitch';
import { IconLogoColored } from '../../atoms/Icons';

interface HeaderProps {
  className?: string;
  ghost?: boolean;
  showType?: 'fixed' | 'top' | 'sticky' | 'up';
  subTitle?: string;
  title?: string;
}

const Header = ({
  className,
  ghost = false,
  showType = 'top',
  subTitle,
  title,
}: HeaderProps): JSX.Element => {
  const { t } = useTranslation();
  const root = document.getElementById('root');

  const [scrollState, setScrollState] = useState(false);
  const prevScrollRef = useRef(0);
  const showTypeRef = useRef(showType);
  const hideRef = useRef(false);

  const scrollHandling = useCallback(() => {
    if (root) {
      const scrollValue = root.scrollTop;

      if (showTypeRef.current === 'up') {
        hideRef.current = true;
      }
      if (prevScrollRef.current >= scrollValue) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
      prevScrollRef.current = scrollValue;
    }
  }, [root]);

  useEffect(() => {
    scrollHandling();
    if (root) {
      root.addEventListener('scroll', scrollHandling);
    }

    return () => {
      if (root) {
        root.removeEventListener('scroll', scrollHandling);
      }
    };
  }, [scrollHandling, root]);

  return (
    <>
      <HeaderMessage allowClose>
        <Link to="/about">{t('Header.headerMessage')}</Link>
      </HeaderMessage>
      <header
        className={`jth-header-container${
          showTypeRef.current === 'sticky' ? ' jth-header-sticky' : ``
        }${showTypeRef.current === 'fixed' ? ' jth-header-fixed' : ``}${
          hideRef.current ? ' jth-header-hide' : ``
        }${scrollState ? ` jth-header-show` : ``}${
          ghost ? ' jth-header-ghost' : ``
        }${className ? ` ${className}` : ``}`}
      >
        {/* <div className="jth-header-mobile">
          <Link to="/" aria-label="home">
            <IconLogo />
          </Link>
        </div> */}
        <nav className="jth-header-items">
          {title || subTitle ? (
            <ul className="jth-header-items-left">
              <li>
                <Link aria-label="home" to="/">
                  <span className="jth-header-title">
                    <IconLogoColored />
                    {title}
                  </span>
                  <span className="jth-header-subTitle">{subTitle}</span>
                </Link>
              </li>
            </ul>
          ) : null}
          {/* {title ||
            (subTitle && (
              <ul className="jth-header-items-center">
                <li>
                  <Link aria-label="home" tabIndex={-1} to="/">
                    <span className="jth-header-title">{title}</span>
                    <span className="jth-header-subTitle">{subTitle}</span>
                  </Link>
                </li>
              </ul>
            ))} */}
          <ul className="jth-header-items-right">
            <li>
              <NavLink to="/about" activeClassName="jth-header-avtive">
                {t('Header.about')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/posts" activeClassName="jth-header-avtive">
                {t('Header.posts')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/codes" activeClassName="jth-header-avtive">
                {t('Header.codes')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="jth-header-avtive">
                {t('Header.portfolio')}
              </NavLink>
            </li>
            <li>
              <LanguageSwitch />
            </li>
            <li>
              <DarkModeSwitch />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
