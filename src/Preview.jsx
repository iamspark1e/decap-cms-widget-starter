import PropTypes from 'prop-types';
import React from 'react';

export default function Preview({ value, getAsset }) {
    return (
        <div>Preview.jsx, {value}</div>
    )
}

Preview.propTypes = {
    value: PropTypes.node,
};