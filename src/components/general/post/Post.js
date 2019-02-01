import React from 'react';
import './_post.scss';

export default (props) => {
    let {body} = props;
    return (
        <div className="post-container">
            <div className="post-content">
                <div className="image-container">
                    <img alt="house"
                         src="http://www.nicovdmeulen.com/wp-content/uploads/cache/2017/08/Cic-01/1498855585.jpg"/>
                </div>
                <span>{body}</span>
            </div>
        </div>
    )
}

