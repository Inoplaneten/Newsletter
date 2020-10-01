import React from 'react';
import { News } from '../../News/News.jsx';
import { connect } from 'react-redux';
import './MainAndNewsPages.scss'

const MainAndNewsPages = ({news, isAllNews, title}) => {
    const data = isAllNews ? news: news.filter((article, index) => index < 6);
    return (
        <section className="section-news">
            <div className="container">
                <h1>{title}</h1>
                <div className="news-annonce">
                    <News news={data}/>  
                </div>  
            </div>
        </section>
    );
};

const mapStateToProps = state => ({
    news: state.news
});

const ConnectedMainAndNewsPages = connect(mapStateToProps)(MainAndNewsPages);

export { ConnectedMainAndNewsPages as MainAndNewsPages };