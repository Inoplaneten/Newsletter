import React from 'react';
import { NewsDate } from '../../NewsDate/NewsDate';
import { TitleSingleNews } from '../../TitleSingleNews/TitleSingleNews';
import { connect } from 'react-redux';
import './SingleArticlePage.scss';

const SingleArticlePage = ({news, index}) => {
    return news[index] ? (
        <section className="section-single-news">
            <div className="container">
                <div className="news-content">
                    <div className="news-content__info">
                        <TitleSingleNews
                            title={news[index].title}
                        />
                        <a href={news[index].url} className="news-content__link">
                            {news[index].source.name}
                        </a>
                        <NewsDate date={news[index].publishedAt}/>
                    </div>
                    <div className="news-content__description">
                        <img src={news[index].urlToImage} alt={news[index].title}/>
                        <p>
                            {news[index].description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    ): null;
};

const mapStateToProps = state => ({
    news: state.news
});

const ConnectedSingleArticlePage = connect(mapStateToProps)(SingleArticlePage)

export { ConnectedSingleArticlePage as SingleArticlePage };