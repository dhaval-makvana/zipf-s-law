import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Point = (props) => {
    
    const circles = props.data.map((d, i) => {
        return (
            <circle 
                className="dot"
                r="3.5"
                cx={props.x(d)}
                cy={props.y(d)}
                key={d.rank}
                fill="orange"
            />
        )
    });

    return (
        <g>
            {circles}
        </g>
    )
};

Point.propTypes = {
    data: PropTypes.array,
    x: PropTypes.func,
    y: PropTypes.func
}

export default Point;