import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import Axis from './Axis';
import Points from './Point';
import ResponsiveWrapper from './ResponsiveWrapper';
import Tooltip from './Tooltip';

class ScatterPlot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            hoveredCircle: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        let data = props.data;
        return {
            data
        }
    }

    // componentDidUpdate() {
    //     const svgNode = ReactDOM.findDOMNode(this);
    //     const x = (d) => d['rank'];
    //     const y = (d) => d['count'];
    //     const data = this.state.data;

    //     svgNode.selectAll("circle")
    //         .data(data).enter()
    //         .on("mouseover", function () {
    //             d3.select(this).enter()
    //                 .append("svg:title")
    //                 .text(function (d) { return d.x; });
    //         });
    // }

    render() {

        const { data } = this.state;



        if (data) {
            const margin = {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            };

            const initialWidth = window.innerWidth * .6;
            const initialHeight = window.innerHeight * .6;

            const width = Math.max(this.props.parentWidth || initialWidth) - margin.left - margin.right;
            const height = Math.max(this.props.parentHeight || initialHeight) - margin.top - margin.bottom;

            const svgContainerWidth = width + margin.left + margin.right;
            const svgContainerHeight = height + margin.top + margin.bottom + 200;
            const innerContainer = 'translate(' + margin.left + ',' + margin.top + ')';

            const x = (d) => d['rank'];
            const xScale = d3.scaleLinear()
                .domain([0, d3.max(data, x)])
                .range([0, width]);
            const xAxis = d3.axisBottom(xScale);
            const xMap = (d) => {
                return xScale(x(d));
            }

            const y = (d) => d['count'];
            const yScale = d3.scaleLinear()
                .domain([0, d3.max(data, y)])
                .range([height, 0]);
            const yAxis = d3.axisLeft(yScale);
            const yMap = (d) => {
                return yScale(y(d));
            }

            return (
                <React.Fragment>
                    <svg width={svgContainerWidth} height={svgContainerHeight}>
                        <g transform={innerContainer}>
                            <Axis w={width} h={height} axis={xAxis} axisType="x" />
                            <Axis w={width} h={height} axis={yAxis} axisType="y" />
                            <Points
                                data={data}
                                x={xMap}
                                y={yMap}
                                onMouseOverCallback={(datum) => this.setState({ hoveredCircle: datum })}
                                onMouseOutCallback={() => this.setState({ hoveredCircle: null })}
                            />
                        </g>
                    </svg>
                    {this.state.hoveredCircle ?
                        <Tooltip
                            hoveredCircle={this.state.hoveredCircle}
                            scales={{ xScale, yScale }}
                        /> :
                        null
                    }
                </React.Fragment>

            )
        }

        return null;
    }
}

export default ResponsiveWrapper(ScatterPlot);