import React, { useEffect, useState } from 'react';
import './MenuList.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DarkModeSwitch from '../../molecules/DarkModeSwitch';
import { IconBars, IconTimes } from '../../atoms/Icons';
import ScrollButton from '../../molecules/ScrollButton';
import LanguageSwitch from '../../molecules/LanguageSwitch';

interface MenuListProps {
  className?: string;
  showStartPosition?: 'bottom' | 'left' | 'none' | 'right' | 'top';
}

const MenuList = ({
  className,
  showStartPosition = 'none',
}: MenuListProps): JSX.Element => {
  const { t } = useTranslation();
  const [menuState, setMenuState] = useState(false);

  const menuListHandling = () => {
    setMenuState(!menuState);
  };

  useEffect(() => {
    if (menuState) {
      document.body.classList.add('jth-menuList-show');
    } else {
      document.body.classList.remove('jth-menuList-show');
    }
  }, [menuState]);

  return (
    <>
      <nav
        className={`jth-menuList${
          showStartPosition ? ` jth-menuList-${showStartPosition}` : ``
        }${className ? ` ${className}` : ``}`}
        role="dialog"
        aria-modal={menuState}
      >
        <div className="jth-menuList-items">
          <ul className="jth-menuList-links">
            <li>
              <Link onClick={menuListHandling} to="/">
                {t('Header.home')}
              </Link>
            </li>
            <li>
              <Link onClick={menuListHandling} to="/about">
                {t('Header.about')}
              </Link>
            </li>
            <li>
              <Link onClick={menuListHandling} to="/posts">
                {t('Header.posts')}
              </Link>
            </li>
            <li>
              <Link onClick={menuListHandling} to="/codes">
                {t('Header.codes')}
              </Link>
            </li>
            <li>
              <Link onClick={menuListHandling} to="/portfolio">
                {t('Header.portfolio')}
              </Link>
            </li>
            <li>
              <LanguageSwitch />
            </li>
            <li>
              <DarkModeSwitch />
            </li>
          </ul>
        </div>
        <div
          role="presentation"
          onClick={menuListHandling}
          className="jth-menuList-backdrop"
        />
      </nav>
      <ScrollButton
        ariaLabel="menuButton"
        onClick={menuListHandling}
        showType="up"
        className="jth-scrollButton-menuList-menu"
      >
        {menuState ? <IconTimes /> : <IconBars />}
      </ScrollButton>
    </>
  );
};

export default MenuList;
