import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';

class Axis extends Component {
    
    componentDidMount() {
        this.renderAxis();
    }

    componentDidUpdate() {
        this.renderAxis();
    }

    renderAxis() {
        const node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.axis);
    }
    
    render() {

        const translate = `translate(0, ${this.props.h})`;

        return (
            <g 
                className="axis"
                transform={this.props.axisType === "x" ? translate : ""}
            />
        )
    }
}

Axis.propTypes = {
    h: PropTypes.number,
    axis: PropTypes.func,
    axisType: PropTypes.oneOf(['x', 'y'])
};

export default Axis;