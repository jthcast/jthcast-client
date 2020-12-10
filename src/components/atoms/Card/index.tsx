import React from 'react';
import './Card.scss';

export interface CardInterface {
  seq: string;
  title?: string;
  tags?: string[];
  content?: string;
  date?: string;
  image?: string;
}

interface CardProps {
  className?: string;
  item?: CardInterface;
  showContent?: boolean;
}

const Card = ({
  className,
  item,
  showContent = false,
}: CardProps): JSX.Element => {
  return (
    <>
      {item && (
        <article className={`jth-card${className ? ` ${className}` : ``}`}>
          {item.image && <img src={item.image} alt={item.title} />}
          {(item.tags || item.date) && (
            <div className="jth-card-info">
              {item.tags && (
                <span className="jth-card-tags">{item.tags.join(' / ')}</span>
              )}
              {item.date && (
                <time dateTime={item.date} className="jth-card-date">
                  {item.date}
                </time>
              )}
            </div>
          )}
          {item.title && <h2>{item.title}</h2>}
          {item.content && showContent && <p>{item.content}</p>}
        </article>
      )}
    </>
  );
};

export default Card;
