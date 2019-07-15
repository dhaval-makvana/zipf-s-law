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

        if (this.props.axisType === 'x') {
            // X Label
            d3.select(node).append("text")
                .attr("class", "axis-label")
                .attr("x", this.props.w / 2)
                .attr("y", this.props.h)
                .attr("font-size", "20px")
                .attr("text-anchor", "middle")
                .text("Rank of the words");
        } else {
            // Y Label
            d3.select(node).append("text")
                .attr("class", "axis-label")
                .attr("x", -(this.props.h / 2))
                .attr("y", -60)
                .attr("font-size", "20px")
                .attr("text-anchor", "middle")
                .attr("transform", "rotate(-90)")
                .text("Word Count")
        }

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
    w: PropTypes.number,
    h: PropTypes.number,
    axis: PropTypes.func,
    axisType: PropTypes.oneOf(['x', 'y'])
};

export default Axis;