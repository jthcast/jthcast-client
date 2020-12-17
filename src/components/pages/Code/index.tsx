import React, { lazy, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IconSpinner } from '../../atoms/Icons';
import ErrorBoundary from '../../atoms/ErrorBoundary';
import './Code.scss';
import codesData, { CodeProps } from '../../../data/CodesData';
import Meta from '../../atoms/Meta';
import NoMatch from '../NoMatch';

interface CodeUri {
  seq: string;
}

const Code = (): JSX.Element => {
  const { t } = useTranslation();
  const { seq } = useParams<CodeUri>();
  const codeState = codesData.filter((code) => code.seq === seq)[0];
  const CodeItem = lazy(
    () => import(`../../../data/CodesData/${codeState.seq}`)
  );
  const relatedCodes = codeState
    ? codesData
        .reduce<Array<CodeProps>>((acc, code) => {
          code.tags?.forEach((tag) => {
            if (
              codeState.seq !== code.seq &&
              codeState.tags &&
              codeState.tags.includes(tag)
            ) {
              acc.push(code);
            }
          });
          return acc;
        }, [])
        .slice(0, 3)
    : [];
  return (
    <>
      {codeState ? (
        <>
          <Meta title={codeState.title} description={codeState.subTitle} />
          <article className="jth-code">
            <section className="jth-container jth-code-info">
              {codeState.title && <h1>{codeState.title}</h1>}
              {codeState.subTitle && <p>{codeState.subTitle}</p>}
              {/* {codeState.date && <time>{codeState.date}</time>} */}
              {codeState.icon && codeState.icon({})}
            </section>
            <section className="jth-container jth-code-content">
              <ErrorBoundary>
                <Suspense
                  fallback={
                    <div className="jth-container jth-code-loading">
                      <IconSpinner spin />
                    </div>
                  }
                >
                  <CodeItem />
                </Suspense>
              </ErrorBoundary>
            </section>
            {relatedCodes.length > 0 && (
              <section className="jth-container">
                <h2>{t('Code.relatedCodes')}</h2>
                <ul className="jth-code-relatedCodes">
                  {relatedCodes.map((code) => {
                    return (
                      <li key={code.seq}>
                        <Link to={`/codes/${code.seq}`} aria-label={code.title}>
                          {code.icon && code.icon({})}
                          <p>{code.title}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}
          </article>
        </>
      ) : (
        <NoMatch />
      )}
    </>
  );
};

export default Code;
