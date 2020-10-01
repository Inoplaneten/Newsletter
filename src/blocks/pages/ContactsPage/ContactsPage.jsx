import React from 'react';
import transformsString from './../../../modules/transformsString.js';
import './ContactsPage.scss';

const ContactsPage = props => {
    const phoneLink = props.phone.replace(/\D/g, '');
    const newSkills = transformsString(props.skills);
    return (
        <section className="section-contacts">
            <div className="container">
                <div className="author-info">
                    <div className="author-content">
                        <a href={'tel:+'+ phoneLink} className="author-content__tel">
                            {props.phone}
                        </a>
                        <h1 className="author-content__title">
                            {props.name}<br/>{props.lastName}
                        </h1>
                        <a href={'mailto:'+ props.email} className="author-content__email">
                            {props.email}
                        </a>
                        <p className="author-content__qualification">
                            {props.qualification}
                        </p>
                        <p className="author-content__skills">
                            {newSkills.newString} <span>{newSkills.lastWord}</span>
                        </p>
                    </div>
                    <div className="author-foto">
                        <img src={window.location.origin + '/img/author.jpg'} alt={props.name + ' ' + props.lastName}/>
                    </div>
                </div> 
            </div>
        </section>
    );
};

export { ContactsPage };