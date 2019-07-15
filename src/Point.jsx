import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Points = (props) => {

    const circles = props.data.map((d, i) => {
        return (
            <circle
                className="dot"
                r="5"
                cx={props.x(d)}
                cy={props.y(d)}
                key={d.rank}
                fill="orange"
                onMouseOver={(d) => props.onMouseOverCallback(d)}
                onMouseOut={() => props.onMouseOutCallback(null)}
            />
        )
    });

    return (
        <g>
            {circles}
        </g>
    )
};

Points.propTypes = {
    data: PropTypes.array,
    x: PropTypes.func,
    y: PropTypes.func
}

export default Points;