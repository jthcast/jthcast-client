import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useQuery from '../../../customHooks/useQuery';
import Card from '../../atoms/Card';
import Chip from '../../atoms/Chip';
import { IconSearch, IconSpinner, IconTimesCircle } from '../../atoms/Icons';
import { postsData, PostsDataProps } from '../../../data/PostsData';
import './Posts.scss';
import useDebounce from '../../../customHooks/useDebounce';
import useFocus from '../../../customHooks/useFocus';
import Meta from '../../atoms/Meta';

const Posts = (): JSX.Element => {
  const { t } = useTranslation();
  const tags = postsData.reduce<{ [key: string]: number }>(
    (acc, data) => {
      data.tags?.forEach((tagItem) => {
        acc[tagItem] = acc[tagItem] ? acc[tagItem] + 1 : 1;
      });
      return acc;
    },
    { All: postsData.length }
  );
  const [posts, setPosts] = useState<Array<PostsDataProps>>(postsData);
  const queryObject = useQuery();
  const filterPosts = useCallback(() => {
    const tagKeyword = queryObject.tag;
    const results = postsData.filter((post) => {
      if (tagKeyword) {
        return post.tags?.includes(tagKeyword);
      }
      return postsData;
    });
    setPosts(results);
  }, [queryObject.tag]);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [searchInputRef, setFocus] = useFocus();
  const clearInput = () => {
    setSearchInputValue('');
    setFocus();
  };
  const searchInputKeyDownHandling = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      event.nativeEvent instanceof KeyboardEvent &&
      event.nativeEvent.key === 'Escape'
    ) {
      event.preventDefault();
      clearInput();
    }
  };
  const searchInputChangeHandling = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const keyword = event.currentTarget.value;
    setSearchInputValue(keyword);
  };
  const debounceValue = useDebounce(searchInputValue, 100);
  const [isLoading, setIsLoading] = useState(false);
  const searchHandling = useCallback(() => {
    setIsLoading(true);
    const filteredPosts = postsData.filter((post) => {
      return (
        post.title?.includes(debounceValue) ||
        post.tags?.includes(debounceValue) ||
        post.series?.includes(debounceValue)
      );
    });
    setPosts(filteredPosts);
    setIsLoading(false);
  }, [debounceValue]);

  useEffect(() => {
    filterPosts();
    setSearchInputValue('');
  }, [filterPosts]);

  useEffect(() => {
    searchHandling();
  }, [debounceValue, searchHandling]);

  return (
    <>
      <Meta title={t('Posts.title')} description={t('Posts.description')} />
      <section className="jth-posts">
        <div className="jth-container">
          {postsData.length === 0 && (
            <div className="jth-posts-nothing">
              <h1>{t('Posts.postDoesntExistMessage')}</h1>
            </div>
          )}
          {tags.All > 0 && (
            <div className="jth-posts-tags">
              {Object.entries(tags).map((tagItem) => {
                return (
                  <Link
                    to={
                      tagItem[0] === 'All'
                        ? `/posts`
                        : `/posts?tag=${tagItem[0]}`
                    }
                    key={tagItem[0]}
                    onClick={filterPosts}
                  >
                    <Chip className="jth-posts-tag" ghost allowClose={false}>
                      {tagItem[0]} {tagItem[1]}
                    </Chip>
                  </Link>
                );
              })}
            </div>
          )}
          {postsData.length > 0 && (
            <div className="jth-posts-search">
              <input
                aria-label="Search"
                className="jth-posts-search-input"
                type="text"
                value={searchInputValue}
                onChange={searchInputChangeHandling}
                onKeyDown={searchInputKeyDownHandling}
                ref={searchInputRef}
              />
              {searchInputValue && (
                <IconTimesCircle
                  onClick={clearInput}
                  className="jth-posts-search-clearIcon"
                />
              )}
              <IconSearch />
            </div>
          )}
          {isLoading && (
            <div className="jth-posts-loading">
              <IconSpinner spin />
            </div>
          )}
          {!isLoading && searchInputValue && posts.length > 0 && (
            <div className="jth-posts-searchResult">
              <p>{t('Common.searchResultsMessage', { what: posts.length })}</p>
            </div>
          )}
          {!isLoading && searchInputValue && posts.length === 0 && (
            <div className="jth-posts-nothing">
              <h1>{t('Common.searchResultDoesntExist')}</h1>
            </div>
          )}
          {!isLoading && posts.length > 0 && (
            <ul className="jth-posts-list">
              {posts.map((post) => {
                return (
                  <li key={post.seq}>
                    <Link to={`/posts/${post.seq}`} aria-label={post.title}>
                      <Card item={post} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default Posts;
