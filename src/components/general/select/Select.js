import React from 'react';
import PropTypes from 'prop-types';
const Select = (props) => {
    return (
        <select>
            {props.options.map(option => {
                return <option>{option.label}</option>
            })}
        </select>
    )
};
Select.PropTypes = {
    options: PropTypes.array.isRequired
};