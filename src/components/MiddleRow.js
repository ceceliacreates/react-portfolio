import React from 'react';
import Project from './Project';
import Bio from './Bio';

const MiddleRow = function (props) {
    return (
        <row>
        <Project name="node-bot" />
        <Bio />
        <Project name="backpack" />
        </row>
    )
}

export default MiddleRow;