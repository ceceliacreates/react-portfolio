import React from 'react';
import Project from './Project';

const TopRow = function (props) {
    return (
        <row>
        <Project name="community-click" />
        <Project name="budget-calculator" />
        <Project name="parsely" />
        </row>
    )
}

export default TopRow;