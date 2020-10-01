import React from 'react';
import transformsString from '../../modules/transformsString.js';

const TitleSingleNews = ({title}) => {
    const newTitle = transformsString(title);
    return (
        <h1 className="news-content__title">
            {newTitle.newString} <span>{newTitle.lastWord}</span>
        </h1>
    );
};

export { TitleSingleNews };