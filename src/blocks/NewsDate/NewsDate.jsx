import React from 'react';
import converFormatData from './../../modules/converFormatData.js';

const NewsDate = ({date}) => {
    const newFormatDate = converFormatData(date);
    return (
        <p className="news-content-date">
            {newFormatDate.day}
            <span>{newFormatDate.month}</span>
        </p>
    );
};

export { NewsDate };