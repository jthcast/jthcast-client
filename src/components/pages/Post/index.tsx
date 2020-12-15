import React, { Fragment, lazy, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card from '../../atoms/Card';
import { IconSpinner } from '../../atoms/Icons';
import ErrorBoundary from '../../atoms/ErrorBoundary';
import { postsData, PostsDataProps } from '../../../data/PostsData';
import './Post.scss';
import NoMatch from '../NoMatch';
import Meta from '../../atoms/Meta';

interface PostUri {
  seq: string;
}

const Post = (): JSX.Element => {
  const { t } = useTranslation();
  const { seq } = useParams<PostUri>();
  const postState = postsData.filter((post) => post.seq === seq)[0];
  const PostItem = lazy(
    () => import(`../../../data/PostsData/${postState.seq}`)
  );
  const seriesPosts = postState
    ? postsData
        .reduce<Array<PostsDataProps>>((acc, post) => {
          if (
            postState.series &&
            post.series &&
            postState.series === post.series
          ) {
            acc.push(post);
          }
          return acc;
        }, [])
        .sort((a, b) => +a.seq - +b.seq)
    : [];
  const relatedPosts = postState
    ? postsData
        .reduce<Array<PostsDataProps>>((acc, post) => {
          post.tags?.forEach((tag) => {
            if (
              postState.seq !== post.seq &&
              postState.series !== post.series &&
              postState.tags &&
              postState.tags.includes(tag)
            ) {
              acc.push(post);
            }
          });
          return acc;
        }, [])
        .slice(0, 2)
    : [];
  return (
    <>
      {postState ? (
        <>
          <Meta title={postState.title} description={postState.content} />
          <article className="jth-post">
            <section className="jth-container jth-post-info">
              {postState.title && <h1>{postState.title}</h1>}
              {postState.tags && <p>{postState.tags.join(' / ')}</p>}
              {postState.date && <time>{postState.date}</time>}
              {postState.image && (
                <img src={postState.image} alt={postState.title} />
              )}
              {postState.content && (
                <p className="jth-post-info-content">{postState.content}</p>
              )}
            </section>
            <section className="jth-container jth-post-content">
              <ErrorBoundary>
                <Suspense
                  fallback={
                    <div className="jth-container jth-post-loading">
                      <IconSpinner spin />
                    </div>
                  }
                >
                  <PostItem />
                </Suspense>
              </ErrorBoundary>
            </section>
            {seriesPosts.length > 1 && (
              <section className="jth-container">
                <h2>{t('Post.seriesPosts')}</h2>
                <ol className="jth-post-seriesPosts">
                  {seriesPosts.map((post) => {
                    return (
                      <Fragment key={post.seq}>
                        {post.seq === postState.seq ? (
                          <li className="jth-post-seriesPosts-this">
                            <p>{post.title}</p>
                          </li>
                        ) : (
                          <li>
                            <Link
                              to={`/posts/${post.seq}`}
                              aria-label={post.title}
                            >
                              {post.title}
                            </Link>
                          </li>
                        )}
                      </Fragment>
                    );
                  })}
                </ol>
              </section>
            )}
            {relatedPosts.length > 0 && (
              <section className="jth-container">
                <h2>{t('Post.relatedPosts')}</h2>
                <ul className="jth-post-relatedPosts">
                  {relatedPosts.map((post) => {
                    return (
                      <li key={post.seq}>
                        <Link to={`/posts/${post.seq}`} aria-label={post.title}>
                          <Card item={post} />
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

export default Post;
