import React from 'react';
import PropTypes from 'prop-types';
import './_input.scss';
const Input = (props) => {
    return (
        <>
            {props.label && <label>{props.label}</label>}
            <div>
                <input placeholder={props.placeholder} type={props.type}/>
            </div>
        </>
    )
};
Input.PropTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string
};
export default Input;
