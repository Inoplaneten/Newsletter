import React from 'react';
import { Link } from 'react-router-dom';
import { NewsDate } from './../NewsDate/NewsDate';
import './News.scss'

const News = ({news}) => {
    return (
        news.map((article, index) => {
            return (
                <article className="news" key={index}>
                    <h2 className="news__title">
                        <Link to={`/news/news-${index}`}>
                            {article.title}
                        </Link>
                    </h2>
                    <div className="news__info">
                        <a href={article.url} rel="noopener">{article.source.name}</a>
                        <NewsDate date={article.publishedAt}/>
                    </div>
                </article>
            );
        })
    );
};

export { News }