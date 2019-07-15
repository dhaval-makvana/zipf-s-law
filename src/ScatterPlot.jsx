import React, { Component } from 'react';
import * as d3 from 'd3';
import Axis from './Axis';
import Point from './Point';


const  margin = {
        top: 20,
        right: 30,
        bottom: 40,
        left: 50,
    },
    width = window.innerWidth * .8 - margin.left - margin.right,
    height = window.innerHeight * .8 - margin.top - margin.bottom;


class ScatterPlot extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        let data = props.data;
        return {
            data
        }
    }

    render() {

        const { data } = this.state;

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

        if (data) {

            const svgContainerWidth = width + margin.left + margin.right;
            const svgContainerHeight = height + margin.top + margin.bottom + 200;
            const innerContainer = 'translate(' + margin.left + ',' + margin.top + ')';
            
            return (
                <svg width={svgContainerWidth} height={svgContainerHeight}>
                    <g transform={innerContainer}>
                        <Axis h={height} axis={xAxis} axisType="x" />
                        <Axis h={height} axis={yAxis} axisType="y" />
                        <Point 
                            data={data}
                            x={xMap}
                            y={yMap} 
                        />
                    </g>
                </svg>
            )
        }
        
        return null;
    }
}

export default ScatterPlot;