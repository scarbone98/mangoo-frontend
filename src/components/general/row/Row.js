import React from 'react';
import './_row.scss';

export default (props) => {
    let {title} = props;
    return (
        <section>
            <span className="row-title">{title}</span>
            <div className="row-container">
                {props.children}
            </div>
            <a>Show all (2000+) ></a>
        </section>
    )
}
