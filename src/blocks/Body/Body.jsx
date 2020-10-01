import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MainAndNewsPages } from '../pages/MainAndNewsPages/MainAndNewsPages';
import { SingleArticlePage } from '../pages/SingleArticlePage/SingleArticlePage';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage';
import { ModalThx } from '../ModalThx/ModaThx';
import { Switch, Route, useLocation } from 'react-router-dom';
import { getNewsBegin, getNewsSuccess, getNewsFailure } from '../../redux/action';
import { connect } from 'react-redux';

const Body = ({onStart, onSuccess, onFailure, isLoading}) => {
    const params = useLocation();
    const currentIndex = params.pathname && params.pathname.split('-')[1];
    useEffect(() => {
        onStart();
        const requesUrl = 'http://newsapi.org/v2/top-headlines?country=ru&apiKey=40ac60ab1e9a41aa9d7a82c11ea9364d';
        (async () => {
            const response = await axios.get(requesUrl);
            setTimeout(()=> {
                onSuccess(response.data.articles);
            },1500)
        })();
    }, [onStart, onSuccess]);

    return  (
        <Switch>
            <Route path="/" exact>   
                {isLoading ? <ModalThx/>:<MainAndNewsPages isAllNews={false} title={"Всегда свежие новости"}/>}
            </Route>
            <Route path="/news" exact>   
                <MainAndNewsPages isAllNews title={"Быть в курсе новостей"}/>
            </Route>
            <Route path="/news/:id" exact>
                {isLoading ? <ModalThx/>: <SingleArticlePage index={currentIndex}/>}
            </Route>
            <Route path="/contacts" exact>   
                <ContactsPage  
                    name="Руслан"
                    lastName="Карауш" 
                    phone="+(380)-50-032-76-37"
                    email="ruslan-k@te.net.ua"
                    qualification="JavaScript разработчик"
                    skills="ES5, ES6, React"
                />
            </Route>   
        </Switch>
    );
};

const mapStateToProps = state => ({
    isLoading: state.isLoading
});

const mapDispatchToProps = dispath => ({
    onStart: () => dispath(getNewsBegin()),
    onSuccess: data => dispath(getNewsSuccess(data)),
    onFailure: () => dispath(getNewsFailure)
});

const ConnectedBody = connect(mapStateToProps, mapDispatchToProps)(Body);

export { ConnectedBody as Body };