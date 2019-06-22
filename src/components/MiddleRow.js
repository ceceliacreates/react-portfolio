import React from 'react';
import Project from './Project';
import Bio from './Bio';

const MiddleRow = function (props) {
    return (
        <>
        <Project name="node-bot" />
        <Bio />
        <Project name="backpack" />
        </>
    )
}

export default MiddleRow;