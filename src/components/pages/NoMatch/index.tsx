import React from 'react';
import './NoMatch.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Meta from '../../atoms/Meta';

const NoMatch = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <Meta title={t('404Page.title')} description={t('404Page.description')} />
      <section className="jth-section jth-noMatch">
        <div className="jth-container jth-section-rowGrid-center">
          <h1 data-content={t('404Page.message')}>{t('404Page.message')}</h1>
          <p>{t('404Page.subMessage')}</p>
          <Link to="/">{t('Common.homePage')}</Link>
        </div>
      </section>
    </>
  );
};

export default NoMatch;
