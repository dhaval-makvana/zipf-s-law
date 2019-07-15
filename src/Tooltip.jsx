import React, { Component } from 'react';

const Tooltip = (props) => {

    console.log("hovered circle", props);
    const { xScale, yScale } = props.scales;
    return (
        <div className="Tooltip">
            <table>
                <tbody>
                    <tr>
                        <td colSpan="1">Word</td>
                        <td colSpan="1">{props.hoveredCircle.word}</td>
                    </tr>
                    <tr>
                        <td colSpan="1">Count</td>
                        <td colSpan="1">{props.hoveredCircle.count}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tooltip;